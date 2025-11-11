import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, Tag, TrendingUp, Search, Filter } from 'lucide-react'
import { getBlogPosts } from '../utils/blogPosts'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  const categories = ['all', 'Queimadas', 'Prevenção', 'Tecnologia', 'Meio Ambiente', 'Notícias']

  useEffect(() => {
    // Carregar posts reais do Netlify CMS
    const loadPosts = async () => {
      try {
        const blogPosts = await getBlogPosts()
        setPosts(blogPosts)
        setFilteredPosts(blogPosts)
      } catch (error) {
        console.error('Erro ao carregar posts:', error)
        // Se houver um erro ao carregar posts, defina-os como vazios
        setPosts([])
        setFilteredPosts([])
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  useEffect(() => {
    let filtered = posts

    // Filtrar por categoria
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filtrar por busca
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm, posts])

  const featuredPosts = posts.filter(post => post.featured)
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

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-400 text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          Blog Wilds
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
          Notícias e Artigos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Fique por dentro das últimas novidades sobre queimadas, tecnologia e meio ambiente
        </p>
      </div>

      {/* Search and Filter */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-[#1f1f1f] bg-white dark:bg-[#141414] text-gray-900 dark:text-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-[#1f1f1f] bg-white dark:bg-[#141414] text-gray-900 dark:text-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'Todas as categorias' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'all' && !searchTerm && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Em Destaque
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="card group hover:shadow-xl transition-all duration-300 overflow-hidden p-0"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-[#1f1f1f]">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {selectedCategory !== 'all' ? selectedCategory : searchTerm ? 'Resultados da Busca' : 'Todos os Artigos'}
        </h2>
        
        {loading ? (
          <div className="card text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-primary-400"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Carregando posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Nenhum artigo encontrado. Tente ajustar os filtros.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="card group hover:shadow-xl transition-all duration-300 overflow-hidden p-0"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-[#1f1f1f]">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog

