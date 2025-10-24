import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'demo_key'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

// Mock data para quando a API key não estiver configurada
const mockWeatherData = {
  temp: 42,
  humidity: 15,
  windSpeed: 25,
  description: 'Ensolarado',
  icon: '01d',
  fireRisk: 'high'
}

export const getWeatherByCoords = async (lat, lon) => {
  try {
    if (API_KEY === 'demo_key') {
      // Retorna dados mock se não houver API key
      return mockWeatherData
    }

    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
    })

    const data = response.data
    
    // Calcular risco de incêndio baseado em temperatura, umidade e vento
    const calculateFireRisk = (temp, humidity, windSpeed) => {
      if (temp > 35 && humidity < 20 && windSpeed > 20) return 'high'
      if (temp > 30 && humidity < 30 && windSpeed > 15) return 'medium'
      return 'low'
    }

    return {
      temp: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Converter m/s para km/h
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      fireRisk: calculateFireRisk(
        data.main.temp, 
        data.main.humidity, 
        data.wind.speed * 3.6
      )
    }
  } catch (error) {
    console.error('Erro ao buscar dados climáticos:', error)
    return mockWeatherData
  }
}

export const getWeatherByCity = async (city) => {
  try {
    if (API_KEY === 'demo_key') {
      return mockWeatherData
    }

    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
    })

    const data = response.data
    
    return {
      temp: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6),
      description: data.weather[0].description,
      icon: data.weather[0].icon
    }
  } catch (error) {
    console.error('Erro ao buscar dados climáticos:', error)
    return mockWeatherData
  }
}

export const getForecast = async (lat, lon) => {
  try {
    if (API_KEY === 'demo_key') {
      // Retorna previsão mock
      return [
        { date: '2024-10-24', temp: 42, rain: 0 },
        { date: '2024-10-25', temp: 40, rain: 5 },
        { date: '2024-10-26', temp: 38, rain: 15 },
        { date: '2024-10-27', temp: 35, rain: 20 },
        { date: '2024-10-28', temp: 33, rain: 30 }
      ]
    }

    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
    })

    // Processar dados de previsão (próximos 5 dias)
    const dailyData = {}
    
    response.data.list.forEach(item => {
      const date = item.dt_txt.split(' ')[0]
      if (!dailyData[date]) {
        dailyData[date] = {
          date,
          temp: Math.round(item.main.temp),
          rain: item.rain ? item.rain['3h'] || 0 : 0
        }
      }
    })

    return Object.values(dailyData).slice(0, 5)
  } catch (error) {
    console.error('Erro ao buscar previsão:', error)
    return []
  }
}

