// netlify/functions/update-student-percentage.js

/*
 * To make this function fully operational:
 *
 * 1. Install Dependencies:
 *    Navigate to the 'netlify/functions' directory in your terminal and run:
 *    npm install @octokit/core gray-matter
 *    (Note: Changed from @octokit/rest to @octokit/core for better compatibility)
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

// ✅ Usando @octokit/core ao invés de @octokit/rest para evitar problemas de compatibilidade
import { Octokit } from "@octokit/core";
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

    // --- GitHub API Interaction ---
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

    const octokit = new Octokit({ auth: GITHUB_TOKEN });
    const filePath = `content/alunos/${studentId}.md`;

    let fileContent;
    let sha;

    try {
      // 1. Get the file content usando a API REST diretamente
      const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: filePath,
        ref: BRANCH,
      });
      
      fileContent = Buffer.from(response.data.content, 'base64').toString('utf8');
      sha = response.data.sha;
    } catch (error) {
      if (error.status === 404) {
        console.warn(`File ${filePath} not found. Creating new file.`);
        fileContent = `---\nchecklist_percentage: 0\n---\n# ${studentId}\n`;
        sha = undefined;
      } else {
        console.error(`Error fetching file ${filePath}:`, error);
        return {
          statusCode: 500,
          body: JSON.stringify({ message: `Error fetching file ${filePath}.`, error: error.message })
        };
      }
    }

    // 2. Parse frontmatter and update percentage
    const parsed = matter(fileContent);
    parsed.data.checklist_percentage = percentage;
    const updatedMarkdown = matter.stringify(parsed.content, parsed.data);

    // 3. Commit and push the changes
    const updateParams = {
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: filePath,
      message: `Update checklist percentage for ${studentId} to ${percentage}%`,
      content: Buffer.from(updatedMarkdown).toString('base64'),
      branch: BRANCH,
    };

    // Só adiciona o SHA se o arquivo já existe
    if (sha) {
      updateParams.sha = sha;
    }

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', updateParams);

    console.log(`Successfully updated ${filePath} for student ${studentId}.`);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Successfully updated ${filePath} for student ${studentId}.` })
    };
  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
    };
  }
}