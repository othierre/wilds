import matter from 'gray-matter';

// Helper function to extract YouTube ID from URL
function extractYoutubeId(url) {
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?/;
  const match = url.match(youtubeRegex);
  return match ? match[1] : null;
}

export async function getLessons() {
  const lessons = [];
  const modules = import.meta.glob('../../content/aulas/*.md', { as: 'raw', eager: true });

  for (const path in modules) {
    const fileContent = modules[path];
    const { data } = matter(fileContent); // No content needed for lessons, just front matter
    const slug = path.split('/').pop().replace('.md', '');

    const youtubeId = data.youtubeUrl ? extractYoutubeId(data.youtubeUrl) : null;

    lessons.push({
      slug,
      ...data,
      youtubeId, // Add the extracted YouTube ID
    });
  }

  // Sort lessons by date in descending order
  lessons.sort((a, b) => new Date(b.date) - new Date(a.date));

  return lessons;
}

export async function getLessonBySlug(slug) {
  const lessons = await getLessons();
  return lessons.find(lesson => lesson.slug === slug);
}
