import { Link, useLocation } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

const FloatingReportButton = () => {
  const location = useLocation()
  
  // Não mostrar o botão na própria página de reportar
  if (location.pathname === '/reportar') {
    return null
  }

  return (
    <Link to="/reportar">
      <button 
        className="fixed right-6 bottom-24 lg:bottom-8 z-[1200] w-16 h-16 bg-gradient-to-br from-alert-500 to-alert-600 hover:from-alert-600 hover:to-alert-700 text-white rounded-full shadow-2xl hover:shadow-alert-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group"
        aria-label="Reportar queimada"
      >
        <AlertTriangle className="w-7 h-7 transition-transform duration-300" />
      </button>
    </Link>
  )
}

export default FloatingReportButton

