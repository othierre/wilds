import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import FireHorizon from './pages/FireHorizon'
import Reportar from './pages/Reportar'
import Estatisticas from './pages/Estatisticas'
import Educacao from './pages/Educacao'
import Perfil from './pages/Perfil'
import Instalar from './pages/Instalar'
import Guma from './pages/Guma'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { NetlifyAuthProvider } from './context/NetlifyAuthContext'

import { HelmetProvider } from 'react-helmet-async'

// Páginas de guias (não aparecem na navegação)
import PrevencaoQueimadas from './pages/guias/PrevencaoQueimadas'
import ImpactosAmbientais from './pages/guias/ImpactosAmbientais'
import RecuperacaoFlorestal from './pages/guias/RecuperacaoFlorestal'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <NetlifyAuthProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/reportar" element={<Reportar />} />
                  <Route path="/estatisticas" element={<Estatisticas />} />
                  <Route path="/educacao" element={<Educacao />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/instalar" element={<Instalar />} />
                  <Route path="/guma" element={<Guma />} />
                  
                  {/* Guias educativos (rotas ocultas - não aparecem na navegação) */}
                  <Route path="/guias/prevencao-queimadas" element={<PrevencaoQueimadas />} />
                  <Route path="/guias/impactos-ambientais" element={<ImpactosAmbientais />} />
                  <Route path="/guias/recuperacao-florestal" element={<RecuperacaoFlorestal />} />
                  
                  {/* Blog desativado temporariamente - Admin ainda acessível em /admin */}
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/admin/*" element={null} /> {/* Exclude /admin from React Router */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </Router>
          </NetlifyAuthProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App

