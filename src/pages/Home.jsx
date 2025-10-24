import { useState } from 'react'
import MapComponent from '../components/Map/MapComponent'
import { AlertTriangle, Flame, TrendingUp, Wind, Droplets, ThermometerSun, MapPin } from 'lucide-react'

const Home = () => {
  const [selectedFire, setSelectedFire] = useState(null)

  const stats = [
    { 
      label: 'Queimadas Ativas', 
      value: '127', 
      change: '+12%',
      trend: 'up',
      icon: Flame,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30'
    },
    { 
      label: 'Área Afetada', 
      value: '3.2k ha', 
      change: '+8%',
      trend: 'up',
      icon: MapPin,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    },
    { 
      label: 'Alertas Hoje', 
      value: '43', 
      change: '-5%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30'
    },
    { 
      label: 'Risco Atual', 
      value: 'Alto', 
      change: 'Crítico',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30'
    },
  ]

  const recentAlerts = [
    {
      id: 1,
      location: 'Brasília - DF',
      time: '5 min atrás',
      severity: 'high',
      area: 152
    },
    {
      id: 2,
      location: 'Palmas - TO',
      time: '23 min atrás',
      severity: 'medium',
      area: 89
    },
    {
      id: 3,
      location: 'Goiânia - GO',
      time: '1 hora atrás',
      severity: 'high',
      area: 203
    }
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                  {stat.value}
                </p>
                <p className={`text-sm mt-1 ${
                  stat.trend === 'up' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content - Map and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Container */}
        <div className="lg:col-span-2">
          <div className="card p-0 overflow-hidden h-[600px]">
            <MapComponent onFireSelect={setSelectedFire} />
          </div>
        </div>

        {/* Right Sidebar - Info Panel */}
        <div className="space-y-4">
          {/* Weather Info */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Condições Climáticas
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ThermometerSun className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Temperatura</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">42°C</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Umidade</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wind className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Vento</span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">25 km/h</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
              <p className="text-sm text-red-800 dark:text-red-300 font-medium">
                ⚠️ Condições críticas para propagação de incêndios
              </p>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Alertas Recentes
            </h3>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.severity === 'high' ? 'bg-red-500' : 'bg-orange-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {alert.location}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {alert.area} hectares • {alert.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Ver todos os alertas →
            </button>
          </div>

          {/* Quick Report Button */}
          <a href="/reportar" className="block">
            <div className="card bg-gradient-to-r from-alert-500 to-alert-600 hover:from-alert-600 hover:to-alert-700 transition-all cursor-pointer border-0">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Reportar Queimada</h4>
                  <p className="text-sm text-white/90">Faça uma denúncia agora</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home

