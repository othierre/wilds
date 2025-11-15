import matter from 'gray-matter';

export async function getLessons() {
  const lessons = [];
  const modules = import.meta.glob('../../content/aulas/*.md', { as: 'raw', eager: true });

  for (const path in modules) {
    const fileContent = modules[path];
    const { data } = matter(fileContent); // No content needed for lessons, just front matter
    const slug = path.split('/').pop().replace('.md', '');

    lessons.push({
      slug,
      ...data,
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
