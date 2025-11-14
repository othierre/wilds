import matter from 'gray-matter';
import { marked } from 'marked';

function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const noScriptContent = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  const noMarkdownImages = noScriptContent.replace(/!\[(.*?)\]\((.*?)\)/g, '');
  const text = noMarkdownImages.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime;
}

export async function getBlogPosts() {
  const posts = [];
  const modules = import.meta.glob('../../content/blog/*.md', { as: 'raw', eager: true });

  for (const path in modules) {
    const fileContent = modules[path];
    const { data, content } = matter(fileContent);
    const slug = path.split('/').pop().replace('.md', '');
    const readTime = calculateReadTime(content);

    posts.push({
      slug,
      ...data,
      content: marked(content), // Convert markdown to HTML
      readTime,
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
