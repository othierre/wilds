import { useState, useEffect } from 'react'
import MapComponent from '../components/Map/MapComponent'
import { AlertTriangle, Flame, TrendingUp, Wind, Droplets, ThermometerSun, MapPin } from 'lucide-react'

const formatTimeAgo = (dateString) => {
  const now = new Date();
  const detectedDate = new Date(dateString);
  const seconds = Math.floor((now - detectedDate) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " anos atrás";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " meses atrás";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " dias atrás";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " horas atrás";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " min atrás";
  return Math.floor(seconds) + " seg atrás";
};

import AlertsModal from '../components/AlertsModal';

const FireHorizon = () => {
  const [selectedFire, setSelectedFire] = useState(null);
  const [fireToFocus, setFireToFocus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAlerts, setModalAlerts] = useState([]);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [allFires, setAllFires] = useState([]);
  const [recentAlerts, setRecentAlerts] = useState([
    { id: 1, location: 'Carregando...', time: '', area: 0, severity: 'high' },
    { id: 2, location: 'Carregando...', time: '', area: 0, severity: 'medium' },
    { id: 3, location: 'Carregando...', time: '', area: 0, severity: 'high' },
  ]);

  const [stats, setStats] = useState([
    { label: 'Queimadas Ativas', value: '...', change: '' },
    { label: 'Área Afetada', value: '...', change: '' },
    { label: 'Alertas Hoje', value: '...', change: '' },
    { label: 'Risco Atual', value: '...', change: '' },
  ].map(item => ({ ...item, icon: Flame, color: 'text-gray-600 dark:text-gray-400', bgColor: 'bg-gray-100 dark:bg-gray-900/30', trend: '' })));

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/fires');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setAllFires(data);

        const activeFires = data.filter(f => f.status === 'active');
        const activeFiresCount = activeFires.length;

        const totalArea = activeFires.reduce((sum, f) => sum + f.area, 0);
        const formatArea = (area) => area > 1000 ? `${(area / 1000).toFixed(1)}k ha` : `${area} ha`;
        const formattedArea = formatArea(totalArea);

        const today = new Date().toDateString();
        const alertsToday = data.filter(f => new Date(f.detected).toDateString() === today).length;

        const getRiskLevel = (count) => {
          if (count > 100) return { level: 'Crítico', change: 'Extremo', trend: 'up' };
          if (count > 50) return { level: 'Alto', change: 'Elevado', trend: 'up' };
          if (count > 10) return { level: 'Médio', change: 'Moderado', trend: 'up' };
          return { level: 'Baixo', change: 'Controlado', trend: 'down' };
        };
        const risk = getRiskLevel(activeFiresCount);

        setStats([
          { label: 'Queimadas Ativas', value: activeFiresCount.toString(), change: ' ', trend: 'up', icon: Flame, color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-100 dark:bg-red-900/30' },
          { label: 'Área Afetada', value: formattedArea, change: ' ', trend: 'up', icon: MapPin, color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-100 dark:bg-orange-900/30' },
          { label: 'Alertas Hoje', value: alertsToday.toString(), change: ' ', trend: 'up', icon: AlertTriangle, color: 'text-yellow-600 dark:text-yellow-400', bgColor: 'bg-yellow-100 dark:bg-yellow-900/30' },
          { label: 'Risco Atual', value: risk.level, change: risk.change, trend: risk.trend, icon: TrendingUp, color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-100 dark:bg-red-900/30' },
        ]);

        // Processar Alertas Recentes com Geocoding
        const sortedFires = [...data].sort((a, b) => new Date(b.detected) - new Date(a.detected));
        const latestFires = sortedFires.slice(0, 3);

        const alertsPromises = latestFires.map(async (fire) => {
          try {
const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;
            const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${fire.lat}&lon=${fire.lng}&apiKey=${apiKey}&lang=pt`;
            const geoRes = await fetch(url);
            if (!geoRes.ok) {
              console.error('Geocoding API Error:', geoRes.status, await geoRes.text());
              throw new Error('Geocoding failed');
            }
            const geoData = await geoRes.json();
            const properties = geoData.features[0].properties;
            const location = properties.city ? `${properties.city}, ${properties.state_code}` : (properties.state || 'Localização desconhecida');

            return {
              id: fire.id,
              location: location,
              time: formatTimeAgo(fire.detected),
              area: fire.area,
              severity: fire.intensity === 'high' || fire.intensity === 'medium' ? fire.intensity : 'low',
              lat: fire.lat,
              lng: fire.lng,
            };
          } catch (err) {
            console.error("Geocoding error:", err);
            return {
              id: fire.id,
              location: 'Localização indisponível',
              time: formatTimeAgo(fire.detected),
              area: fire.area,
              severity: fire.intensity === 'high' || fire.intensity === 'medium' ? fire.intensity : 'low',
              lat: fire.lat,
              lng: fire.lng,
            };
          }
        });

        const newRecentAlerts = await Promise.all(alertsPromises);
        setRecentAlerts(newRecentAlerts);

      } catch (error) {
        console.error("Falha ao buscar estatísticas:", error);
        // Manter os stats com erro para o usuário saber que algo falhou
        setStats(stats.map(s => ({ ...s, value: 'Erro!', change: 'N/A' })));
      }
    };

    fetchStats();
    const intervalId = setInterval(fetchStats, 60000); // Atualiza a cada 60 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmontar
  }, []);

  const handleViewAllClick = async () => {
    setIsModalOpen(true);
    setIsModalLoading(true);

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recentFires = allFires.filter(fire => new Date(fire.detected) > oneHourAgo);

    const alertsPromises = recentFires.map(async (fire) => {
      try {
        const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;
        const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${fire.lat}&lon=${fire.lng}&apiKey=${apiKey}&lang=pt`;
        const geoRes = await fetch(url);
        if (!geoRes.ok) {
          console.error('Geocoding API Error:', geoRes.status, await geoRes.text());
          throw new Error('Geocoding failed');
        }
        const geoData = await geoRes.json();
        const properties = geoData.features[0].properties;
        const location = properties.city ? `${properties.city}, ${properties.state_code}` : (properties.state || 'Localização desconhecida');

        return {
          id: fire.id,
          location: location,
          time: formatTimeAgo(fire.detected),
          area: fire.area,
          severity: fire.intensity === 'high' || fire.intensity === 'medium' ? fire.intensity : 'low',
          lat: fire.lat,
          lng: fire.lng,
        };
      } catch (err) {
        console.error("Geocoding error:", err);
        return {
          id: fire.id,
          location: 'Localização indisponível',
          time: formatTimeAgo(fire.detected),
          area: fire.area,
          severity: fire.intensity === 'high' || fire.intensity === 'medium' ? fire.intensity : 'low',
          lat: fire.lat,
          lng: fire.lng,
        };
      }
    });

    const newModalAlerts = await Promise.all(alertsPromises);
    setModalAlerts(newModalAlerts);
    setIsModalLoading(false);
  };

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
            <MapComponent onFireSelect={setSelectedFire} fireToFocus={fireToFocus} />
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
                  onClick={() => setFireToFocus(alert)}
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

            <button 
              onClick={handleViewAllClick}
              className="w-full mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Ver todos os alertas →
            </button>
          </div>


        </div>
      </div>
      <AlertsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        alerts={modalAlerts}
        isLoading={isModalLoading}
        onAlertClick={(alert) => {
          setFireToFocus(alert);
          setIsModalOpen(false);
        }}
      />
    </div>
  )
}

export default FireHorizon
