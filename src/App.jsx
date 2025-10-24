import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Reportar from './pages/Reportar'
import Estatisticas from './pages/Estatisticas'
import Educacao from './pages/Educacao'
import Perfil from './pages/Perfil'
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
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

