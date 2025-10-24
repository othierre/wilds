import { useState, useEffect } from 'react'
import { Smartphone, Monitor, Download, Share, MoreVertical, Plus, Home, Chrome } from 'lucide-react'

const Instalar = () => {
  const [platform, setPlatform] = useState('unknown')
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isInstallable, setIsInstallable] = useState(false)

  useEffect(() => {
    // Detectar plataforma
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setPlatform('ios')
    } else if (/android/i.test(userAgent)) {
      setPlatform('android')
    } else if (navigator.userAgent.indexOf('Win') !== -1) {
      setPlatform('windows')
    } else {
      setPlatform('desktop')
    }

    // Capturar evento de instalação
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('PWA instalado')
    }
    
    setDeferredPrompt(null)
    setIsInstallable(false)
  }

  const platforms = [
    {
      id: 'ios',
      name: 'iPhone / iPad',
      icon: Smartphone,
      color: 'blue',
      steps: [
        {
          icon: Share,
          title: 'Abra o Safari',
          description: 'Certifique-se de estar usando o navegador Safari (não funciona no Chrome iOS)'
        },
        {
          icon: Share,
          title: 'Toque no botão Compartilhar',
          description: 'Toque no ícone de compartilhar (quadrado com seta para cima) na barra inferior'
        },
        {
          icon: Plus,
          title: 'Adicionar à Tela de Início',
          description: 'Role para baixo e toque em "Adicionar à Tela de Início"'
        },
        {
          icon: Home,
          title: 'Confirme',
          description: 'Toque em "Adicionar" no canto superior direito. O app aparecerá na sua tela inicial!'
        }
      ]
    },
    {
      id: 'android',
      name: 'Android',
      icon: Smartphone,
      color: 'green',
      steps: [
        {
          icon: Chrome,
          title: 'Abra o Chrome',
          description: 'Acesse o site usando o navegador Google Chrome'
        },
        {
          icon: MoreVertical,
          title: 'Menu do Chrome',
          description: 'Toque nos três pontos no canto superior direito'
        },
        {
          icon: Download,
          title: 'Adicionar à tela inicial',
          description: 'Selecione "Adicionar à tela inicial" ou "Instalar app"'
        },
        {
          icon: Home,
          title: 'Confirme',
          description: 'Toque em "Adicionar" ou "Instalar". O app aparecerá na sua tela inicial!'
        }
      ]
    },
    {
      id: 'windows',
      name: 'Windows / Desktop',
      icon: Monitor,
      color: 'purple',
      steps: [
        {
          icon: Chrome,
          title: 'Abra o Chrome ou Edge',
          description: 'Acesse o site usando Chrome, Edge ou outro navegador compatível'
        },
        {
          icon: Download,
          title: 'Ícone de Instalação',
          description: 'Procure pelo ícone de instalação (+) na barra de endereço'
        },
        {
          icon: Download,
          title: 'Clique em Instalar',
          description: 'Clique no botão "Instalar" que aparece'
        },
        {
          icon: Home,
          title: 'Pronto!',
          description: 'O app será instalado e você poderá abri-lo como um aplicativo nativo'
        }
      ]
    }
  ]

  const currentPlatformData = platforms.find(p => p.id === platform) || platforms[2]

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <Download className="w-10 h-10 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Instalar Wilds
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Instale o Wilds como um aplicativo em seu dispositivo para acesso rápido e experiência aprimorada
        </p>
      </div>

      {/* Botão de instalação automática (se disponível) */}
      {isInstallable && (
        <div className="card bg-gradient-to-r from-primary-50 to-green-50 dark:from-primary-900/20 dark:to-green-900/20 border-primary-200 dark:border-primary-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Instalação Rápida Disponível!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Clique no botão ao lado para instalar automaticamente
                </p>
              </div>
            </div>
            <button
              onClick={handleInstallClick}
              className="btn-primary whitespace-nowrap"
            >
              Instalar Agora
            </button>
          </div>
        </div>
      )}

      {/* Seletor de Plataforma */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Selecione sua plataforma
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((p) => {
            const Icon = p.icon
            const isActive = p.id === platform
            return (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isActive
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${
                  isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'
                }`} />
                <p className={`font-medium text-sm ${
                  isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {p.name}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Instruções passo a passo */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Como instalar no {currentPlatformData.name}
        </h2>
        <div className="space-y-6">
          {currentPlatformData.steps.map((step, index) => {
            const StepIcon = step.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${currentPlatformData.color}-100 dark:bg-${currentPlatformData.color}-900/30`}>
                    <StepIcon className={`w-6 h-6 text-${currentPlatformData.color}-600 dark:text-${currentPlatformData.color}-400`} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white bg-${currentPlatformData.color}-500`}>
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Benefícios */}
      <div className="card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Por que instalar?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Acesso Rápido', description: 'Abra diretamente da tela inicial' },
            { title: 'Funciona Offline', description: 'Acesse recursos básicos sem internet' },
            { title: 'Notificações', description: 'Receba alertas de queimadas na sua região' },
            { title: 'Experiência Native', description: 'Interface otimizada como um app real' }
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Instalar

