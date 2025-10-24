import { NavLink } from 'react-router-dom'
import { Home, AlertTriangle, BarChart3, BookOpen, User, Download } from 'lucide-react'

const MobileNav = () => {
  const navigation = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Stats', href: '/estatisticas', icon: BarChart3 },
    { name: 'Educação', href: '/educacao', icon: BookOpen },
    { name: 'Perfil', href: '/perfil', icon: User },
    { name: 'Instalar', href: '/instalar', icon: Download },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[1001] bg-white dark:bg-[#141414] border-t border-gray-200 dark:border-[#1f1f1f] backdrop-blur-sm bg-opacity-90 dark:bg-opacity-95">
      <div className="grid grid-cols-5">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-1 text-xs font-medium transition-colors ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`h-6 w-6 mb-1 ${isActive ? 'text-primary-600 dark:text-primary-400' : ''}`} />
                <span className="truncate">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default MobileNav

