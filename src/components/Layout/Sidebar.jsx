import { NavLink } from 'react-router-dom'
import { Home, AlertTriangle, BarChart3, BookOpen, User, Download, X, Flame, Sparkles } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import WildsLogo from '../WildsLogo'

const Sidebar = ({ onClose }) => {
  const { isDark } = useTheme()
  const navigation = [
    { name: 'Wilds (Início)', href: '/', icon: Home },
    { name: 'Fire Horizon', href: '/fire-horizon', icon: Flame },
    { name: 'Estatísticas', href: '/estatisticas', icon: BarChart3 },
    // { name: 'Blog', href: '/blog', icon: FileText }, // Desativado temporariamente
    { name: 'Educação', href: '/educacao', icon: BookOpen },
    { name: 'Perfil', href: '/perfil', icon: User },
    { name: 'Instalar App', href: '/instalar', icon: Download },
    { name: 'Guma', href: '/guma', icon: Sparkles },
  ]

  return (
    <div className="flex h-full flex-col gap-y-5 overflow-y-auto bg-white dark:bg-[#141414] border-r border-gray-200 dark:border-[#1f1f1f] px-6 pb-24">
      <div className="flex h-16 shrink-0 items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <WildsLogo color={isDark ? 'white' : 'black'} className="h-7 w-auto object-contain" />
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        )}
      </div>

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex gap-x-3 rounded-lg p-3 text-sm leading-6 font-semibold transition-colors ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-[#a3a3a3] hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
                      }`
                    }
                  >
                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li className="mt-auto">
            <div className="card border-l-4 border-l-alert-500">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-alert-100 dark:bg-alert-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-alert-600 dark:text-alert-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Alerta Ativo
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    3 queimadas detectadas próximas a você
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

