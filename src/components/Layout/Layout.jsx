import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import MobileNav from './MobileNav'
import FloatingReportButton from '../FloatingReportButton'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#000000]">
      {/* Desktop Sidebar */}
      <div className={`hidden lg:flex lg:fixed lg:inset-y-0 lg:z-[1000] ${isMinimized ? 'lg:w-16' : 'lg:w-64'}`}>
        <Sidebar isMinimized={isMinimized} toggleMinimized={toggleMinimized} />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[1100] transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setSidebarOpen(false)}
        />
        
        {/* Sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 z-[1101] w-72 transform transition-transform duration-300 ease-in-out shadow-2xl ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Main Content */}
      <div className={`${isMinimized ? 'lg:pl-16' : 'lg:pl-64'}`}>
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="py-6 px-4 sm:px-6 lg:px-8 pb-20 lg:pb-6">
          <div className="animate-fadeIn">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden z-[1001]">
        <MobileNav />
      </div>

      {/* Floating Report Button */}
      <FloatingReportButton />
    </div>
  )
}

export default Layout

