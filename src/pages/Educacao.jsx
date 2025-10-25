import { BookOpen, Shield, AlertTriangle, Leaf, Users, Phone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Educacao = () => {
  const topics = [
    {
      icon: AlertTriangle,
      title: 'Causas das Queimadas',
      color: 'red',
      content: [
        'Queimadas criminosas e desmatamento ilegal',
        'Práticas agrícolas inadequadas',
        'Descarte irregular de cigarros e fogueiras',
        'Condições climáticas extremas (seca prolongada)',
        'Falta de fiscalização e conscientização'
      ]
    },
    {
      icon: Leaf,
      title: 'Impactos Ambientais',
      color: 'green',
      content: [
        'Perda de biodiversidade e destruição de habitats',
        'Emissão massiva de CO₂ e outros gases poluentes',
        'Degradação do solo e erosão',
        'Contaminação de fontes de água',
        'Alteração dos ciclos climáticos regionais'
      ]
    },
    {
      icon: Shield,
      title: 'Como Prevenir',
      color: 'blue',
      content: [
        'Nunca faça queimadas sem autorização dos órgãos competentes',
        'Mantenha aceiros (faixas sem vegetação) ao redor de propriedades',
        'Descarte adequadamente cigarros e não faça fogueiras em áreas de risco',
        'Denuncie queimadas ilegais às autoridades',
        'Participe de programas de educação ambiental'
      ]
    },
    {
      icon: Users,
      title: 'O que Fazer ao Avistar',
      color: 'orange',
      content: [
        'Mantenha distância segura do fogo',
        'Acione imediatamente o Corpo de Bombeiros (193)',
        'Notifique através do Wilds ou outros canais oficiais',
        'Não tente combater o fogo sozinho',
        'Alerte moradores e animais próximos'
      ]
    }
  ]

  const emergencyContacts = [
    { name: 'Corpo de Bombeiros', number: '193', description: 'Emergências com fogo' },
    { name: 'Defesa Civil', number: '199', description: 'Desastres ambientais' },
    { name: 'IBAMA', number: '0800 61 8080', description: 'Denúncias ambientais' },
    { name: 'Polícia Ambiental', number: '190', description: 'Crimes ambientais' },
  ]

  const facts = [
    {
      number: '90%',
      label: 'das queimadas são causadas por ação humana'
    },
    {
      number: '17 milhões',
      label: 'de hectares queimados em 2023 no Brasil'
    },
    {
      number: '2.5 bilhões',
      label: 'de toneladas de CO₂ emitidas por queimadas'
    },
    {
      number: '3.500+',
      label: 'espécies de animais afetadas anualmente'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Educação e Prevenção
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Aprenda sobre queimadas e como preveni-las
        </p>
      </div>

      {/* Facts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {facts.map((fact, index) => (
          <div key={index} className="card text-center">
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {fact.number}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {fact.label}
            </p>
          </div>
        ))}
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="card">
            <div className="flex items-start gap-4 mb-4">
              <div className={`bg-${topic.color}-100 dark:bg-${topic.color}-900/30 p-3 rounded-lg`}>
                <topic.icon className={`w-6 h-6 text-${topic.color}-600 dark:text-${topic.color}-400`} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {topic.title}
                </h3>
              </div>
            </div>
            <ul className="space-y-2">
              {topic.content.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Emergency Contacts */}
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
            <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Contatos de Emergência
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div 
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {contact.name}
                </h4>
                <a 
                  href={`tel:${contact.number}`}
                  className="text-primary-600 dark:text-primary-400 font-bold text-lg hover:text-primary-700 dark:hover:text-primary-300"
                >
                  {contact.number}
                </a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {contact.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section (Placeholder) */}
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
            <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Materiais Educativos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            to="/guias/prevencao-queimadas"
            className="group aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-all hover:shadow-xl"
          >
            <div className="text-center p-4">
              <Shield className="w-12 h-12 mx-auto mb-2 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                Como Prevenir Queimadas
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Ver guia completo</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
          
          <Link 
            to="/guias/impactos-ambientais"
            className="group aspect-video bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-all hover:shadow-xl"
          >
            <div className="text-center p-4">
              <Leaf className="w-12 h-12 mx-auto mb-2 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                Impactos Ambientais
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-orange-600 dark:text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Ver guia completo</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
          
          <Link 
            to="/guias/recuperacao-florestal"
            className="group aspect-video bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-all hover:shadow-xl"
          >
            <div className="text-center p-4">
              <BookOpen className="w-12 h-12 mx-auto mb-2 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                Recuperação Florestal
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Ver guia completo</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Educacao

