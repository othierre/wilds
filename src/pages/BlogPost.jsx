import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()

  // Simulação de carregamento do post
  const post = {
    slug: slug,
    title: 'Bem-vindo ao Blog Wilds',
    date: '2025-01-15T10:00:00.000Z',
    description: 'Apresentamos o novo blog do Wilds, seu portal de informações sobre monitoramento e prevenção de queimadas.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
    category: 'Notícias',
    tags: ['bem-vindo', 'novidades', 'wilds'],
    author: 'Equipe Wilds',
    readTime: 5,
    content: `
# Bem-vindo ao Blog Wilds! 🔥

Estamos muito felizes em apresentar o **Blog Wilds**, seu novo portal de informações sobre monitoramento, prevenção e combate a queimadas.

## Nossa Missão

O Wilds nasceu com o objetivo de democratizar o acesso a informações sobre queimadas e incêndios florestais, utilizando tecnologia de ponta para:

- 🛰️ Monitorar queimadas em tempo real via satélite
- 🤖 Detectar focos de incêndio usando Inteligência Artificial
- 📊 Fornecer estatísticas e análises detalhadas
- 🌍 Promover a conscientização ambiental

## O que você vai encontrar aqui?

Nosso blog será constantemente atualizado com:

1. **Notícias sobre queimadas** - Informações atualizadas sobre incêndios florestais no Brasil e no mundo
2. **Dicas de prevenção** - Como evitar e combater queimadas de forma segura
3. **Tecnologia e inovação** - As últimas novidades em monitoramento e detecção de incêndios
4. **Impacto ambiental** - Análises sobre as consequências das queimadas para o meio ambiente
5. **Educação ambiental** - Conteúdos educativos para todas as idades

## Junte-se a nós!

Faça parte dessa comunidade que luta pela preservação ambiental. Instale nosso app, compartilhe informações e ajude a salvar vidas e o meio ambiente.

---

**Equipe Wilds** 🌱
    `
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Queimadas': 'bg-alert-100 text-alert-700 dark:bg-alert-900/30 dark:text-alert-400',
      'Prevenção': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      'Tecnologia': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'Meio Ambiente': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      'Notícias': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
    }
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
  }

  const shareUrl = window.location.href

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Voltar */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para o blog
      </Link>

      {/* Hero Image */}
      <div className="aspect-video rounded-xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} min de leitura
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400">
          {post.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-[#1f1f1f]">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Compartilhar:
            </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <article className="card prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Tags */}
      <div className="card">
        <div className="flex flex-wrap items-center gap-2">
          <Tag className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Tags:</span>
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-gradient-to-br from-primary-50 to-green-50 dark:from-primary-900/20 dark:to-green-900/20 border-primary-200 dark:border-primary-800 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Gostou do conteúdo?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Instale o Wilds e receba alertas de queimadas em tempo real!
        </p>
        <Link
          to="/instalar"
          className="btn-primary inline-flex items-center gap-2"
        >
          Instalar Agora
        </Link>
      </div>
    </div>
  )
}

export default BlogPost

