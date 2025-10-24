import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Reportar from './pages/Reportar'
import Estatisticas from './pages/Estatisticas'
import Educacao from './pages/Educacao'
import Perfil from './pages/Perfil'
import Instalar from './pages/Instalar'
// import Blog from './pages/Blog'
// import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reportar" element={<Reportar />} />
              <Route path="/estatisticas" element={<Estatisticas />} />
              <Route path="/educacao" element={<Educacao />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/instalar" element={<Instalar />} />
              {/* Blog desativado temporariamente - Admin ainda acessível em /admin */}
              {/* <Route path="/blog" element={<Blog />} /> */}
              {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

