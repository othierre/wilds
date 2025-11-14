import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { getBlogPostBySlug } from '../utils/blogPosts.jsx'

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [readTime, setReadTime] = useState(0)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const blogPost = await getBlogPostBySlug(slug)
        if (blogPost) {
          setPost(blogPost)
          calculateReadTime(blogPost.content)
        }
      } catch (error) {
        console.error('Erro ao carregar post:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200
    const textLength = content.split(' ').length
    const time = Math.ceil(textLength / wordsPerMinute)
    setReadTime(time)
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-primary-400"></div>
        <p className="mt-4 text-gray-500 dark:text-gray-400">Carregando post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Post não encontrado</h1>
        <Link to="/blog" className="text-primary-600 dark:text-primary-400 hover:underline">
          Voltar para o blog
        </Link>
      </div>
    )
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
            {readTime} min de leitura
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
      {post.tags && post.tags.length > 0 && (
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
      )}

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

