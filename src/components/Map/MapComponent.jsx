import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Flame, Wind, Droplets, ThermometerSun, Navigation, Maximize, Minimize } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

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

// Ícone azul para localização do usuário
const createUserLocationIcon = () => {
  return L.divIcon({
    className: 'custom-user-marker',
    html: `<div style="position: relative; width: 20px; height: 20px;">
      <div style="background: #3b82f6; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5); position: absolute; top: 0; left: 0; animation: pulse-blue 2s infinite;"></div>
      <div style="background: #3b82f6; width: 12px; height: 12px; border-radius: 50%; position: absolute; top: 4px; left: 4px;"></div>
    </div>
    <style>
      @keyframes pulse-blue {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.3);
          opacity: 0.5;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    </style>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  })
}



// Componente para trocar o tema do mapa
const MapThemeController = () => {
  const map = useMap()
  const { isDark } = useTheme()
  const [currentLayer, setCurrentLayer] = useState(null)

  useEffect(() => {
    // Remove a camada anterior se existir
    if (currentLayer) {
      map.removeLayer(currentLayer)
    }

    // Adiciona a nova camada baseada no tema
    const tileUrl = isDark
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

    const attribution = isDark
      ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    const newLayer = L.tileLayer(tileUrl, {
      attribution: attribution,
      maxZoom: 19
    })

    newLayer.addTo(map)
    setCurrentLayer(newLayer)

    return () => {
      if (newLayer) {
        map.removeLayer(newLayer)
      }
    }
  }, [isDark, map])

  return null
}

// Componente para mostrar marcador de localização do usuário
const UserLocationMarker = ({ onLocationFound }) => {
  const [position, setPosition] = useState(null)
  const [accuracy, setAccuracy] = useState(null)

  useEffect(() => {
    if ('geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude, accuracy: acc } = pos.coords
          const newPos = [latitude, longitude]
          setPosition(newPos)
          setAccuracy(acc)
          
          if (onLocationFound) {
            onLocationFound(newPos, acc)
          }
        },
        (error) => {
          console.error('Erro ao rastrear localização:', error)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      )

      return () => {
        navigator.geolocation.clearWatch(watchId)
      }
    }
  }, [onLocationFound])

  if (!position) return null

  return (
    <>
      {/* Círculo de precisão */}
      {accuracy && (
        <Circle
          center={position}
          radius={accuracy}
          pathOptions={{
            color: '#3b82f6',
            fillColor: '#3b82f6',
            fillOpacity: 0.1,
            weight: 1,
            opacity: 0.5
          }}
        />
      )}
      
      {/* Marcador azul da localização */}
      <Marker
        position={position}
        icon={createUserLocationIcon()}
      >
        <Popup>
          <div className="p-2 min-w-[200px]">
            <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-2">
              📍 Você está aqui
            </h3>
            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <p>Lat: {position[0].toFixed(6)}</p>
              <p>Lng: {position[1].toFixed(6)}</p>
              {accuracy && (
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">
                  Precisão: ±{Math.round(accuracy)}m
                </p>
              )}
            </div>
          </div>
        </Popup>
      </Marker>
    </>
  )
}

// Componente para controlar a localização
const LocationButton = () => {
  const map = useMap()
  const [isLocating, setIsLocating] = useState(false)

  const handleLocationClick = () => {
    setIsLocating(true)
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          map.setView([latitude, longitude], 15, {
            animate: true,
            duration: 1
          })
          setIsLocating(false)
        },
        (error) => {
          console.error('Erro ao obter localização:', error)
          alert('Não foi possível obter sua localização. Verifique as permissões do navegador.')
          setIsLocating(false)
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      )
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.')
      setIsLocating(false)
    }
  }

  return (
    <button
      onClick={handleLocationClick}
      disabled={isLocating}
      className="gps-button"
      style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        zIndex: 1000,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#000000',
        border: '1px solid rgba(229, 231, 235, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isLocating ? 'wait' : 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      }}
      onMouseEnter={(e) => {
        if (!isLocating) {
          e.currentTarget.style.transform = 'scale(1.05)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
      aria-label="Minha localização"
    >
      <Navigation 
        className={`w-5 h-5 ${isLocating ? 'animate-spin' : ''}`}
        strokeWidth={2.5}
      />
    </button>
  )
}

// Componente para controlar o foco do mapa
const MapFocusController = ({ fireToFocus }) => {
  const map = useMap();

  useEffect(() => {
    if (fireToFocus && fireToFocus.lat && fireToFocus.lng) {
      map.flyTo([fireToFocus.lat, fireToFocus.lng], 14, {
        animate: true,
        duration: 1.5
      });
    }
  }, [fireToFocus, map]);

  return null;
};

const MapComponent = ({ onFireSelect, fireToFocus }) => {
  const [selectedFire, setSelectedFire] = useState(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const mapContainerRef = useRef(null)

  // O estado para armazenar os dados de queimadas virá da API
  const [fireData, setFireData] = useState([]);
  // Estado de carregamento para feedback do usuário
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFireData = async () => {
      try {
        // Busca os dados da API
        const response = await fetch('http://localhost:3001/api/fires');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setFireData(data);
      } catch (error) {
        console.error("Falha ao buscar dados de queimadas:", error);
        // Em um app real, você poderia mostrar uma notificação para o usuário
      } finally {
        setIsLoading(false);
      }
    };

    fetchFireData();
  }, []); // O array vazio garante que o efeito rode apenas uma vez

  // Fazer links das atribuições abrirem em nova guia
  useEffect(() => {
    const timer = setTimeout(() => {
      const attributionLinks = document.querySelectorAll('.leaflet-control-attribution a')
      attributionLinks.forEach(link => {
        link.setAttribute('target', '_blank')
        link.setAttribute('rel', 'noopener noreferrer')
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleMarkerClick = (fire) => {
    setSelectedFire(fire)
    if (onFireSelect) {
      onFireSelect(fire)
    }
  }

  const toggleFullscreen = () => {
    const elem = mapContainerRef.current

    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => {
        setIsFullscreen(true)
      }).catch(err => {
        console.error('Erro ao entrar em tela cheia:', err)
      })
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false)
      })
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

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
    <div ref={mapContainerRef} className="h-full w-full relative">
      {/* Botão Fullscreen */}
      <button
        onClick={toggleFullscreen}
        className="fullscreen-button"
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 1000,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: '#000000',
          border: '1px solid rgba(229, 231, 235, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
        aria-label={isFullscreen ? 'Sair da tela cheia' : 'Expandir para tela cheia'}
      >
        {isFullscreen ? (
          <Minimize className="w-5 h-5" strokeWidth={2.5} />
        ) : (
          <Maximize className="w-5 h-5" strokeWidth={2.5} />
        )}
      </button>

      {/* Indicador de Carregamento */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 z-[2000]">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Carregando mapa...</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Buscando dados de queimadas.</p>
          </div>
        </div>
      )}

      <MapContainer
        center={[-14.2350, -51.9253]}
        zoom={4}
        className="h-full w-full"
        zoomControl={true}
      >
        {/* Controlador de tema do mapa */}
        <MapThemeController />

        {/* Controlador de foco do mapa */}
        <MapFocusController fireToFocus={fireToFocus} />

        {/* Marcador de localização do usuário */}
        <UserLocationMarker />

        {/* Mostra os marcadores de queimadas baseados nos dados da API */}
        {!isLoading && fireData.map((fire) => (
          <div key={fire.id}>
            <Marker
              position={[fire.lat, fire.lng]}
              icon={createCustomIcon(fire.status)}
              eventHandlers={{
                click: () => handleMarkerClick(fire),
              }}
            >
              <Popup>
                <div className="p-4 min-w-[250px]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Queimada #{fire.id}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      fire.status === 'active' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                      fire.status === 'controlled' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                    }`}>
                      {getStatusLabel(fire.status)}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-red-500 dark:text-red-400" />
                      <span className="text-gray-700 dark:text-gray-300">Área: {fire.area} hectares</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThermometerSun className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                      <span className="text-gray-700 dark:text-gray-300">Temperatura: {fire.temp}°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">Umidade: {fire.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">Vento: {fire.windSpeed} km/h</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Confiança: {fire.confidence}%
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
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
        
        {/* Botão de GPS */}
        <LocationButton />
      </MapContainer>

      {/* Legenda */}
      <div 
        className="map-legend absolute bottom-4 left-4 z-[1000] rounded-lg shadow-lg p-4 max-w-[200px] border"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          borderColor: 'rgba(229, 231, 235, 0.5)'
        }}
      >
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
          <div className="flex items-center gap-2 pt-2 border-t border-gray-300 dark:border-gray-600">
            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">Você</span>
          </div>
        </div>
      </div>
      
      {/* Dark mode styles */}
      <style>{`
        /* Map Legend */
        .dark .map-legend {
          background-color: rgba(0, 0, 0, 0.7) !important;
          border-color: rgba(31, 31, 31, 0.6) !important;
        }

        /* GPS Button */
        .dark .gps-button {
          background-color: rgba(0, 0, 0, 0.7) !important;
          color: #ffffff !important;
          border-color: rgba(31, 31, 31, 0.6) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
        }
        .dark .gps-button:hover:not(:disabled) {
          background-color: rgba(26, 26, 26, 0.8) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5) !important;
        }

        /* Fullscreen Button */
        .dark .fullscreen-button {
          background-color: rgba(0, 0, 0, 0.7) !important;
          color: #ffffff !important;
          border-color: rgba(31, 31, 31, 0.6) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
        }
        .dark .fullscreen-button:hover {
          background-color: rgba(26, 26, 26, 0.8) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5) !important;
        }

        /* Attribution - Light Mode */
        .leaflet-control-attribution {
          background-color: rgba(255, 255, 255, 0.8) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          color: #000000 !important;
          border: 1px solid rgba(229, 231, 235, 0.5) !important;
          border-radius: 4px !important;
          padding: 2px 6px !important;
          font-size: 11px !important;
        }

        .leaflet-control-attribution a {
          color: #16a34a !important;
          text-decoration: none !important;
          font-weight: 500 !important;
        }

        .leaflet-control-attribution a:hover {
          color: #15803d !important;
          text-decoration: underline !important;
        }

        /* Attribution - Dark Mode */
        .dark .leaflet-control-attribution {
          background-color: rgba(0, 0, 0, 0.7) !important;
          color: #e5e5e5 !important;
          border: 1px solid rgba(31, 31, 31, 0.6) !important;
        }

        .dark .leaflet-control-attribution a {
          color: #4ade80 !important;
        }

        .dark .leaflet-control-attribution a:hover {
          color: #22c55e !important;
        }

        /* Popup - Light Mode */
        .leaflet-popup-content-wrapper {
          background-color: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(12px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(12px) saturate(180%) !important;
          border: 1px solid rgba(229, 231, 235, 0.5) !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
          padding: 4px !important;
        }

        .leaflet-popup-content {
          margin: 8px !important;
          color: #111827 !important;
        }

        .leaflet-popup-tip {
          background-color: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(12px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(12px) saturate(180%) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        }

        .leaflet-popup-close-button {
          color: #6b7280 !important;
          font-size: 20px !important;
          padding: 6px 10px !important;
          top: 6px !important;
          right: 6px !important;
          width: 28px !important;
          height: 28px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .leaflet-popup-close-button:hover {
          color: #111827 !important;
          background-color: rgba(0, 0, 0, 0.08) !important;
          border-radius: 6px !important;
        }

        /* Popup - Dark Mode */
        .dark .leaflet-popup-content-wrapper {
          background-color: rgba(0, 0, 0, 0.85) !important;
          border: 1px solid rgba(31, 31, 31, 0.6) !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
        }

        .dark .leaflet-popup-content {
          color: #e5e5e5 !important;
        }

        .dark .leaflet-popup-tip {
          background-color: rgba(0, 0, 0, 0.85) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
        }

        .dark .leaflet-popup-close-button {
          color: #9ca3af !important;
        }

        .dark .leaflet-popup-close-button:hover {
          color: #e5e5e5 !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-radius: 6px !important;
        }
      `}</style>
    </div>
  )
}

export default MapComponent

