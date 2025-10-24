import { useState, useEffect, useRef } from 'react'
import { Menu, Bell, Sun, Moon, LogIn, LogOut, User, Settings, HelpCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'

const Header = ({ onMenuClick }) => {
  const { isDark, toggleTheme } = useTheme()
  const { user, loginWithGoogle, logout } = useAuth()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    setIsProfileOpen(false)
  }

  const handleNavigate = (path) => {
    navigate(path)
    setIsProfileOpen(false)
  }

  return (
    <header className="sticky top-0 z-[1001] bg-white dark:bg-[#141414] border-b border-gray-200 dark:border-[#1f1f1f] backdrop-blur-sm bg-opacity-90 dark:bg-opacity-95">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-[#e5e5e5] hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="hidden lg:block">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-[#e5e5e5]">
                Monitoramento de Queimadas
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Botão de Notificações */}
            <button className="relative p-2 rounded-lg text-gray-700 dark:text-[#e5e5e5] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-alert-500 rounded-full"></span>
            </button>

            {/* Botão de Tema */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-[#e5e5e5] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Login/Perfil */}
            {user ? (
              <div className="relative pl-2 border-l border-gray-200 dark:border-[#1f1f1f]" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
                >
                  <img 
                    src={user.photo || 'https://ui-avatars.com/api/?name=' + user.name + '&background=16a34a&color=fff'} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full ring-2 ring-gray-200 dark:ring-[#1f1f1f] hover:ring-primary-500 dark:hover:ring-primary-400 transition-all"
                  />
                </button>

                {/* Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg border border-gray-200 dark:border-[#1f1f1f] bg-white dark:bg-[#141414] overflow-hidden animate-fadeIn"
                       style={{
                         backdropFilter: 'blur(12px) saturate(180%)',
                         WebkitBackdropFilter: 'blur(12px) saturate(180%)'
                       }}>
                    {/* Header do Dropdown */}
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-[#1f1f1f]">
                      <p className="text-sm font-medium text-gray-900 dark:text-[#e5e5e5] truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-[#a3a3a3] truncate">
                        {user.email}
                      </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                      <button
                        onClick={() => handleNavigate('/perfil')}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-[#e5e5e5] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
                      >
                        <User className="w-4 h-4" />
                        <span>Meu Perfil</span>
                      </button>

                      <button
                        onClick={() => handleNavigate('/instalar')}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-[#e5e5e5] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Instalar App</span>
                      </button>

                      <button
                        onClick={() => handleNavigate('/educacao')}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-[#e5e5e5] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
                      >
                        <HelpCircle className="w-4 h-4" />
                        <span>Ajuda</span>
                      </button>
                    </div>

                    {/* Sair */}
                    <div className="border-t border-gray-200 dark:border-[#1f1f1f]">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-alert-600 dark:text-alert-400 hover:bg-alert-50 dark:hover:bg-alert-900/20 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sair</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={loginWithGoogle}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Entrar</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

