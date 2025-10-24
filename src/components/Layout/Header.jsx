import { Menu, Bell, Sun, Moon, LogIn, LogOut } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'

const Header = ({ onMenuClick }) => {
  const { isDark, toggleTheme } = useTheme()
  const { user, loginWithGoogle, logout } = useAuth()

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
              <div className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-[#1f1f1f]">
                <img 
                  src={user.photo || 'https://ui-avatars.com/api/?name=' + user.name + '&background=16a34a&color=fff'} 
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={logout}
                  className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 dark:text-[#e5e5e5] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden md:inline">Sair</span>
                </button>
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

