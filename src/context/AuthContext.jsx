import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento de usuário
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Simulação de login - integrar com Firebase depois
    const mockUser = {
      id: '1',
      name: 'Usuário Demo',
      email: email,
      photo: null,
      reputation: 85
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return mockUser
  }

  const loginWithGoogle = async () => {
    // Simulação de login com Google - integrar com Firebase depois
    const mockUser = {
      id: '1',
      name: 'Usuário Google',
      email: 'usuario@gmail.com',
      photo: 'https://ui-avatars.com/api/?name=Usuario+Google&background=16a34a&color=fff',
      reputation: 90
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return mockUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    loading,
    login,
    loginWithGoogle,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

