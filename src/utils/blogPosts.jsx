import fm from 'front-matter'

// Função para carregar posts do blog
export async function getBlogPosts() {
  // Importar todos os arquivos markdown da pasta content/blog
  const postFiles = import.meta.glob('/content/blog/*.md', { as: 'raw', eager: true })
  
  const posts = Object.entries(postFiles).map(([filepath, content]) => {
    // Processar frontmatter do markdown
    const { attributes: data, body: markdownContent } = fm(content)    
    // Extrair o slug do caminho do arquivo
    const slug = filepath.split('/').pop().replace('.md', '')
    
    // Calcular tempo de leitura (aproximado)
    const words = markdownContent.split(/\s+/).length
    const readTime = Math.ceil(words / 200) // ~200 palavras por minuto
    
    return {
      slug,
      title: data.title || 'Sem título',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      image: data.image || 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80',
      category: data.category || 'Geral',
      tags: data.tags || [],
      author: data.author || 'Equipe Wilds',
      featured: data.featured || false,
      readTime,
      content: markdownContent
    }
  })
  
  // Ordenar por data (mais recente primeiro)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Função para buscar um post específico
export async function getBlogPostBySlug(slug) {
  const posts = await getBlogPosts()
  return posts.find(post => post.slug === slug)
}

// Importar marked para converter markdown para HTML. Certifique-se de instalar: npm install marked
import { marked } from 'marked'

// Função para converter markdown para HTML
export function markdownToHtml(markdown) {
  return marked.parse(markdown)
}
