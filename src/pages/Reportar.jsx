import { useState } from 'react'
import { MapPin, Upload, AlertTriangle, CheckCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Reportar = () => {
  const { user, loginWithGoogle } = useAuth()
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    intensity: 'medium',
    photo: null
  })
  const [photoPreview, setPhotoPreview] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [useGPS, setUseGPS] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const getGPSLocation = () => {
    setUseGPS(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setFormData(prev => ({
            ...prev,
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          }))
          setUseGPS(false)
        },
        (error) => {
          console.error('Erro ao obter localização:', error)
          alert('Não foi possível obter sua localização. Por favor, insira manualmente.')
          setUseGPS(false)
        }
      )
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.')
      setUseGPS(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!user) {
      alert('Você precisa estar logado para fazer uma denúncia.')
      return
    }

    // Aqui você integraria com a API real
    console.log('Denúncia enviada:', formData)
    setSubmitted(true)

    // Reset após 3 segundos
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        location: '',
        description: '',
        intensity: 'medium',
        photo: null
      })
      setPhotoPreview(null)
    }, 3000)
  }

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Login Necessário
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Você precisa estar logado para fazer uma denúncia de queimada.
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

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Denúncia Enviada!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sua denúncia foi recebida e será verificada em breve.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Reportar Queimada
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Ajude-nos a identificar e combater queimadas em sua região
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-6">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Localização
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Digite o endereço ou coordenadas"
              className="input flex-1"
              required
            />
            <button
              type="button"
              onClick={getGPSLocation}
              disabled={useGPS}
              className="btn-secondary flex items-center gap-2 whitespace-nowrap"
            >
              <MapPin className="w-4 h-4" />
              {useGPS ? 'Obtendo...' : 'Usar GPS'}
            </button>
          </div>
        </div>

        {/* Intensity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Intensidade
          </label>
          <select
            name="intensity"
            value={formData.intensity}
            onChange={handleInputChange}
            className="input"
            required
          >
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Descrição
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Descreva o que você observou..."
            rows="4"
            className="textarea"
            required
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Foto (opcional)
          </label>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
            {photoPreview ? (
              <div className="space-y-4">
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="max-h-48 mx-auto rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPhotoPreview(null)
                    setFormData(prev => ({ ...prev, photo: null }))
                  }}
                  className="btn-secondary"
                >
                  Remover Foto
                </button>
              </div>
            ) : (
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Clique para fazer upload de uma foto
                </p>
              </label>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>💡 Dica:</strong> Fotos de qualidade ajudam nossa IA a validar a denúncia mais rapidamente.
          </p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-alert w-full py-3 text-base">
          Enviar Denúncia
        </button>
      </form>
    </div>
  )
}

export default Reportar

