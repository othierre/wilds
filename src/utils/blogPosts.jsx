import matter from 'gray-matter';
import { marked } from 'marked';

export async function getBlogPosts() {
  const posts = [];
  const modules = import.meta.glob('../../content/blog/*.md', { as: 'raw', eager: true });

  for (const path in modules) {
    const fileContent = modules[path];
    const { data, content } = matter(fileContent);
    const slug = path.split('/').pop().replace('.md', '');

    posts.push({
      slug,
      ...data,
      content: marked(content), // Convert markdown to HTML
    });
  }

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export async function getBlogPostBySlug(slug) {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}

export function markdownToHtml(markdown) {
  return marked(markdown);
}
