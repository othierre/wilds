import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { User, Award, Bell, MapPin, Mail, Calendar, CheckCircle, AlertTriangle } from 'lucide-react'

const Perfil = () => {
  const { user, logout, loginWithGoogle } = useAuth()
  const [activeTab, setActiveTab] = useState('info')

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Faça Login
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Entre para acessar seu perfil e histórico de denúncias
          </p>
          <button
            onClick={loginWithGoogle}
            className="btn-primary"
          >
            Entrar com Google
          </button>
        </div>
      </div>
    )
  }

  const userReports = [
    {
      id: 1,
      location: 'Brasília - DF',
      date: '2024-10-23',
      status: 'verified',
      area: 152
    },
    {
      id: 2,
      location: 'Goiânia - GO',
      date: '2024-10-20',
      status: 'verified',
      area: 89
    },
    {
      id: 3,
      location: 'Palmas - TO',
      date: '2024-10-18',
      status: 'pending',
      area: 67
    }
  ]

  const userAlerts = [
    {
      id: 1,
      type: 'fire',
      location: 'Brasília - DF',
      radius: '10km',
      active: true
    },
    {
      id: 2,
      type: 'weather',
      location: 'Goiânia - GO',
      radius: '5km',
      active: true
    }
  ]

  const achievements = [
    { title: 'Primeiro Relato', description: 'Fez sua primeira denúncia', earned: true },
    { title: 'Vigilante', description: '5 denúncias verificadas', earned: true },
    { title: 'Guardião', description: '10 denúncias verificadas', earned: true },
    { title: 'Herói Ambiental', description: '25 denúncias verificadas', earned: false }
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="card">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || user.email}&background=16a34a&color=fff&size=128`}
            alt={user.displayName || user.email}
            className="w-24 h-24 rounded-full border-4 border-primary-500"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {user.displayName || 'Usuário Wilds'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              {user.email}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Reputação: {user.reputation}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {userReports.filter(r => r.status === 'verified').length} verificadas
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="btn-secondary"
          >
            Sair
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <nav className="flex gap-4 sm:gap-8 min-w-max sm:min-w-0">
          <button
            onClick={() => setActiveTab('info')}
            className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === 'info'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            Informações
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === 'reports'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            Minhas Denúncias
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === 'alerts'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            Alertas
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === 'achievements'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            Conquistas
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'info' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Informações Pessoais
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{user.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Membro desde Outubro 2024
                  </span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Estatísticas
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total de Denúncias</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{userReports.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Verificadas</span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {userReports.filter(r => r.status === 'verified').length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Pontos de Reputação</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{user.reputation}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Histórico de Denúncias
            </h3>
            <div className="space-y-3">
              {userReports.map((report) => (
                <div
                  key={report.id}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {report.location}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          report.status === 'verified'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                        }`}>
                          {report.status === 'verified' ? 'Verificada' : 'Pendente'}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>Área: {report.area} hectares</span>
                        <span>Data: {new Date(report.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Alertas Configurados
            </h3>
            <div className="space-y-3">
              {userAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Bell className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                          {alert.type === 'fire' ? 'Queimadas próximas' : 'Condições climáticas'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {alert.location} • Raio de {alert.radius}
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={alert.active} className="sr-only peer" readOnly />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
              ))}
              <button className="btn-primary w-full">
                Adicionar Novo Alerta
              </button>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`card ${
                  achievement.earned
                    ? 'border-l-4 border-l-yellow-500'
                    : 'opacity-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.earned
                      ? 'bg-yellow-100 dark:bg-yellow-900/30'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    <Award className={`w-6 h-6 ${
                      achievement.earned
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Perfil

