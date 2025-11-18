// netlify/functions/update-student-percentage.js

/*
 * To make this function fully operational:
 *
 * 1. Install Dependencies:
 *    Navigate to the 'netlify/functions' directory in your terminal and run:
 *    npm install gray-matter
 *    (Note: Usando fetch nativo do Node.js, não precisa de @octokit)
 *
 * 2. Configure Environment Variables in Netlify:
 *    Go to your Netlify site settings -> "Build & deploy" -> "Environment variables".
 *    Add the following variables:
 *    - GITHUB_TOKEN: A Personal Access Token (PAT) from your GitHub account with 'repo' scope.
 *                    (Be extremely careful with this token; do not expose it publicly.)
 *    - REPO_OWNER: Your GitHub username (e.g., 'thier').
 *    - REPO_NAME: The name of your repository (e.g., 'wildsai').
 *    - BRANCH: The branch you want to commit to (e.g., 'main' or 'master').
 *
 * 3. Ensure studentId matches .md filenames:
 *    The 'studentId' sent from the frontend must exactly match the slug used in your
 *    'content/alunos/{studentId}.md' filenames.
 *
 * 4. Markdown Frontmatter:
 *    Ensure your student .md files have a YAML frontmatter section where 'checklist_percentage'
 *    can be added or updated. Example:
 *    ---
 *    title: João Silva
 *    class: 1
 *    checklist_percentage: 50
 *    ---
 */

import matter from 'gray-matter';

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
      headers: { 'Allow': 'POST' }
    };
  }

  try {
    const { studentId, percentage } = JSON.parse(event.body);

    if (!studentId || percentage === undefined) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing studentId or percentage in request body.' })
      };
    }

    console.log(`Received update for student ${studentId}: percentage = ${percentage}%`);

    // --- GitHub API Interaction usando fetch nativo ---
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO_OWNER = process.env.REPO_OWNER || 'your-github-username';
    const REPO_NAME = process.env.REPO_NAME || 'your-repo-name';
    const BRANCH = process.env.BRANCH || 'main';

    if (!GITHUB_TOKEN) {
      console.error('GITHUB_TOKEN environment variable is not set.');
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'GitHub token not configured.' })
      };
    }

    const filePath = `content/alunos/${studentId}.md`;
    const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
    
    const headers = {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Netlify-Function'
    };

    const MAX_RETRIES = 3;
    let retries = 0;

    while (retries < MAX_RETRIES) {
      let fileContent;
      let sha;

      try {
        // 1. Get the file content
        const getResponse = await fetch(`${apiUrl}?ref=${BRANCH}`, {
          method: 'GET',
          headers: headers
        });

        if (getResponse.ok) {
          const data = await getResponse.json();
          fileContent = Buffer.from(data.content, 'base64').toString('utf8');
          sha = data.sha;
        } else if (getResponse.status === 404) {
          console.warn(`File ${filePath} not found. Creating new file.`);
          fileContent = `---\nchecklist_percentage: 0\n---\n# ${studentId}\n`;
          sha = undefined;
        } else {
          throw new Error(`GitHub API error: ${getResponse.status} ${getResponse.statusText}`);
        }
      } catch (error) {
        console.error(`Error fetching file ${filePath}:`, error);
        return {
          statusCode: 500,
          body: JSON.stringify({ message: `Error fetching file ${filePath}.`, error: error.message })
        };
      }

      // 2. Parse frontmatter and update percentage
      const parsed = matter(fileContent);
      parsed.data.checklist_percentage = percentage;
      const updatedMarkdown = matter.stringify(parsed.content, parsed.data);

      // 3. Commit and push the changes
      const updateBody = {
        message: `Update checklist percentage for ${studentId} to ${percentage}%`,
        content: Buffer.from(updatedMarkdown).toString('base64'),
        branch: BRANCH
      };

      // Só adiciona o SHA se o arquivo já existe
      if (sha) {
        updateBody.sha = sha;
      }

      const updateResponse = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateBody)
      });

      if (updateResponse.ok) {
        console.log(`Successfully updated ${filePath} for student ${studentId}.`);
        return {
          statusCode: 200,
          body: JSON.stringify({ message: `Successfully updated ${filePath} for student ${studentId}.` })
        };
      } else if (updateResponse.status === 409 && retries < MAX_RETRIES - 1) {
        console.warn(`Conflict (409) when updating ${filePath}. Retrying... (Attempt ${retries + 1}/${MAX_RETRIES})`);
        retries++;
        // Continue to the next iteration of the loop to re-fetch and retry
      } else {
        const errorData = await updateResponse.json();
        throw new Error(`Failed to update file after ${retries + 1} attempts: ${JSON.stringify(errorData)}`);
      }
    }

    // If the loop finishes, it means max retries were reached without success
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Failed to update ${filePath} after ${MAX_RETRIES} attempts due to persistent conflicts.` })
    };
  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
    };
  }
}