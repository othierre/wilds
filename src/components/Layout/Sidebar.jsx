import { NavLink } from 'react-router-dom'
import { Home, AlertTriangle, BarChart3, BookOpen, User, Download, X, Flame, FileText, UserCog, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import GumaIcon from '../GumaIcon'
import { useTheme } from '../../context/ThemeContext'
import WildsLogo from '../WildsLogo'
import { useNetlifyAuth } from '../../context/NetlifyAuthContext'
import { Tooltip } from 'react-tooltip'

const Sidebar = ({ onClose, isMinimized, toggleMinimized }) => {
  const { isDark } = useTheme()
  const { user } = useNetlifyAuth()

  const navigation = [
    { name: 'Wilds (Início)', href: '/', icon: Home },
    // { name: 'Fire Horizon', href: '/fire-horizon', icon: Flame },
    { name: 'Estatísticas', href: '/estatisticas', icon: BarChart3 },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Educação', href: '/educacao', icon: BookOpen },
    { name: 'Perfil', href: '/perfil', icon: User },
    { name: 'Guma IA', href: '/guma', icon: GumaIcon },
    { name: 'Instalar App', href: '/instalar', icon: Download },
  ]

  return (
    <div className={`flex h-full flex-col gap-y-5 overflow-y-auto bg-white dark:bg-[#141414] border-r border-gray-200 dark:border-[#1f1f1f] pb-24 ${isMinimized ? 'px-2' : 'px-6'}`}>
      <div className="flex h-16 shrink-0 items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          {!isMinimized && <WildsLogo color={isDark ? 'white' : 'black'} className="h-7 w-auto object-contain" />}
          <button 
            onClick={toggleMinimized}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors hidden lg:block"
            aria-label={isMinimized ? "Expandir menu" : "Minimizar menu"}
          >
            {isMinimized ? (
              <PanelLeftOpen strokeWidth={1.5} className="h-6 w-6" />
            ) : (
              <PanelLeftClose strokeWidth={1.5} className="h-6 w-6" />
            )}
          </button>
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
                      `group flex rounded-lg p-3 text-sm leading-6 font-semibold transition-colors ${isMinimized ? 'justify-center' : 'gap-x-3'} ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-[#a3a3a3] hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
                      }`
                    }
                    {...(isMinimized && {
                      'data-tooltip-id': 'my-tooltip',
                      'data-tooltip-content': item.name,
                      'data-tooltip-place': 'right',
                    })}
                  >
                    <item.icon className={`h-6 w-6 shrink-0 ${
                      item.name === 'Guma IA'
                        ? 'text-[#58616e] dark:text-[#909090] group-hover:text-primary-600 dark:group-hover:text-primary-400'
                        : ''
                    }`} aria-hidden="true" />
                    {!isMinimized && item.name}
                  </NavLink>
                </li>
              ))}
              {user && (
                <li>
                  <a
                    href="/admin"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group flex rounded-lg p-3 text-sm leading-6 font-semibold text-gray-700 dark:text-[#a3a3a3] hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors ${isMinimized ? 'justify-center' : 'gap-x-3'}`}
                    {...(isMinimized && {
                      'data-tooltip-id': 'my-tooltip',
                      'data-tooltip-content': 'Admin',
                      'data-tooltip-place': 'right',
                    })}
                  >
                    <UserCog className="h-6 w-6 shrink-0" aria-hidden="true" />
                    {!isMinimized && "Admin"}
                  </a>
                </li>
              )}
            </ul>
          </li>


        </ul>
      </nav>
      <Tooltip id="my-tooltip" />
    </div>
  )
}

export default Sidebar

