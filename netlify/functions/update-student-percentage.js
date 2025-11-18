// netlify/functions/update-student-percentage.js
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

    // --- IMPORTANT: Persistence to .md files in Git is complex ---
    // To actually update the .md file in the Git repository, you would need:
    // 1. A Git access token (e.g., GitHub Personal Access Token) stored securely as an environment variable.
    // 2. A Git client library or direct API calls to GitHub/GitLab/Bitbucket.
    // 3. Logic to:
    //    a. Fetch the content of the student's .md file (e.g., from 'content/alunos/{studentId}.md').
    //    b. Parse the markdown (e.g., using 'gray-matter' for frontmatter).
    //    c. Update a specific field (e.g., 'checklist_percentage') in the frontmatter.
    //    d. Commit the changes to a new branch or directly to main (not recommended for direct to main).
    //    e. Push the commit.
    // This would then trigger a new Netlify build.
    // This is significantly more involved than a simple serverless function.
    // For this task, we are only demonstrating the serverless function's ability to receive data.

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Successfully received update for student ${studentId}.` })
    };
  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
    };
  }
};