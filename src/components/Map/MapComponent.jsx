import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Flame, Wind, Droplets, ThermometerSun } from 'lucide-react'

// Fix para ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Ícones customizados para diferentes estados de queimadas
const createCustomIcon = (status) => {
  const colors = {
    active: '#dc2626',    // Vermelho - Ativo
    controlled: '#f97316', // Laranja - Controlado
    extinct: '#64748b'     // Cinza - Extinto
  }
  
  return L.divIcon({
    className: 'custom-fire-marker',
    html: `<div style="background: ${colors[status]}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  })
}

// Mock data de queimadas (em produção, viriam de API real)
const mockFireData = [
  {
    id: 1,
    lat: -15.7942,
    lng: -47.8822,
    status: 'active',
    intensity: 'high',
    area: 152,
    detected: '2024-10-24T08:30:00',
    temp: 42,
    humidity: 15,
    windSpeed: 25,
    confidence: 95
  },
  {
    id: 2,
    lat: -15.8267,
    lng: -48.0527,
    status: 'controlled',
    intensity: 'medium',
    area: 89,
    detected: '2024-10-23T14:20:00',
    temp: 38,
    humidity: 22,
    windSpeed: 18,
    confidence: 87
  },
  {
    id: 3,
    lat: -15.7200,
    lng: -47.9300,
    status: 'active',
    intensity: 'high',
    area: 203,
    detected: '2024-10-24T06:15:00',
    temp: 45,
    humidity: 12,
    windSpeed: 32,
    confidence: 98
  },
  {
    id: 4,
    lat: -15.8500,
    lng: -47.7800,
    status: 'extinct',
    intensity: 'low',
    area: 45,
    detected: '2024-10-22T10:00:00',
    temp: 32,
    humidity: 35,
    windSpeed: 10,
    confidence: 75
  },
  {
    id: 5,
    lat: -15.7600,
    lng: -48.1200,
    status: 'active',
    intensity: 'medium',
    area: 98,
    detected: '2024-10-24T09:45:00',
    temp: 40,
    humidity: 18,
    windSpeed: 22,
    confidence: 91
  }
]

const MapComponent = ({ onFireSelect }) => {
  const [selectedFire, setSelectedFire] = useState(null)

  const handleMarkerClick = (fire) => {
    setSelectedFire(fire)
    if (onFireSelect) {
      onFireSelect(fire)
    }
  }

  const getStatusLabel = (status) => {
    const labels = {
      active: 'Ativo',
      controlled: 'Controlado',
      extinct: 'Extinto'
    }
    return labels[status] || status
  }

  const getIntensityColor = (intensity) => {
    const colors = {
      high: 'rgb(220, 38, 38)',
      medium: 'rgb(249, 115, 22)',
      low: 'rgb(251, 191, 36)'
    }
    return colors[intensity] || colors.medium
  }

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[-15.7942, -47.8822]}
        zoom={11}
        className="h-full w-full"
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mockFireData.map((fire) => (
          <div key={fire.id}>
            <Marker
              position={[fire.lat, fire.lng]}
              icon={createCustomIcon(fire.status)}
              eventHandlers={{
                click: () => handleMarkerClick(fire),
              }}
            >
              <Popup>
                <div className="p-2 min-w-[250px]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-900">Queimada #{fire.id}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      fire.status === 'active' ? 'bg-red-100 text-red-800' :
                      fire.status === 'controlled' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {getStatusLabel(fire.status)}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700">Área: {fire.area} hectares</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThermometerSun className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700">Temperatura: {fire.temp}°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">Umidade: {fire.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">Vento: {fire.windSpeed} km/h</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Confiança: {fire.confidence}%
                    </p>
                    <p className="text-xs text-gray-500">
                      Detectado em: {new Date(fire.detected).toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>
              </Popup>
            </Marker>

            {/* Círculo de propagação para queimadas ativas */}
            {fire.status === 'active' && (
              <Circle
                center={[fire.lat, fire.lng]}
                radius={fire.area * 50}
                pathOptions={{
                  color: getIntensityColor(fire.intensity),
                  fillColor: getIntensityColor(fire.intensity),
                  fillOpacity: 0.15,
                  weight: 2
                }}
              />
            )}
          </div>
        ))}
      </MapContainer>

      {/* Legenda */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-[200px]">
        <h4 className="font-semibold text-sm mb-2 text-gray-900 dark:text-gray-100">Legenda</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow"></div>
            <span className="text-gray-700 dark:text-gray-300">Ativo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow"></div>
            <span className="text-gray-700 dark:text-gray-300">Controlado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-500 border-2 border-white shadow"></div>
            <span className="text-gray-700 dark:text-gray-300">Extinto</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapComponent

