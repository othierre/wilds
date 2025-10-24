import { Link } from 'react-router-dom'
import { Home, Search, AlertTriangle, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8 relative">
          <div className="text-[150px] sm:text-[200px] font-bold text-gray-200 dark:text-gray-800 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-alert-500 rounded-full flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Página Não Encontrada
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Voltar para Início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Página Anterior
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Páginas úteis:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/reportar" 
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Reportar Queimada
            </Link>
            <Link 
              to="/estatisticas" 
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Estatísticas
            </Link>
            <Link 
              to="/educacao" 
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Educação
            </Link>
            <Link 
              to="/perfil" 
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound

