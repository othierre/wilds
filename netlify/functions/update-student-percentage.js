// netlify/functions/update-student-percentage.js
const { Octokit } = require("@octokit/rest"); // Requires @octokit/rest to be installed
const matter = require('gray-matter'); // Requires gray-matter to be installed

exports.handler = async (event, context) => {
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
    const REPO_OWNER = process.env.REPO_OWNER || 'your-github-username'; // Replace with your GitHub username
    const REPO_NAME = process.env.REPO_NAME || 'your-repo-name';     // Replace with your repository name
    const BRANCH = process.env.BRANCH || 'main';                     // Replace with your branch name (e.g., 'main' or 'master')

    if (!GITHUB_TOKEN) {
      console.error('GITHUB_TOKEN environment variable is not set.');
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'GitHub token not configured.' })
      };
    }

    const octokit = new Octokit({ auth: GITHUB_TOKEN });
    const filePath = `content/alunos/${studentId}.md`; // Assuming studentId matches the filename slug

    let fileContent;
    let sha;

    try {
      // 1. Get the file content
      const { data } = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: filePath,
        ref: BRANCH,
      });
      fileContent = Buffer.from(data.content, 'base64').toString('utf8');
      sha = data.sha;
    } catch (error) {
      if (error.status === 404) {
        console.warn(`File ${filePath} not found. Creating new file.`);
        fileContent = `---\nchecklist_percentage: 0\n---\n# ${studentId}\n`; // Default content for new file
        sha = undefined; // No SHA for new file
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
    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: filePath,
      message: `Update checklist percentage for ${studentId} to ${percentage}%`,
      content: Buffer.from(updatedMarkdown).toString('base64'),
      sha: sha, // Required for updates, omitted for new files
      branch: BRANCH,
    });

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
};