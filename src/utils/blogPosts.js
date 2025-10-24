import matter from 'gray-matter'

// Função para carregar posts do blog
export async function getBlogPosts() {
  // Importar todos os arquivos markdown da pasta content/blog
  const postFiles = import.meta.glob('/content/blog/*.md', { as: 'raw', eager: true })
  
  const posts = Object.entries(postFiles).map(([filepath, content]) => {
    // Processar frontmatter do markdown
    const { data, content: markdownContent } = matter(content)
    
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

// Função para converter markdown para HTML (simples)
export function markdownToHtml(markdown) {
  // Conversão básica de markdown para HTML
  let html = markdown
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
  
  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')
  
  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  
  // Images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />')
  
  // Line breaks
  html = html.replace(/\n\n/gim, '</p><p>')
  html = html.replace(/\n/gim, '<br />')
  
  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>')
  html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
  
  // Blockquotes
  html = html.replace(/^&gt; (.*$)/gim, '<blockquote>$1</blockquote>')
  
  // Wrap paragraphs
  html = '<p>' + html + '</p>'
  
  // Clean up
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p>(<h[1-6]>)/g, '$1')
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1')
  html = html.replace(/<p>(<ul>)/g, '$1')
  html = html.replace(/(<\/ul>)<\/p>/g, '$1')
  html = html.replace(/<p>(<blockquote>)/g, '$1')
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1')
  
  return html
}

