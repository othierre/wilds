import { ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle, Lightbulb, Phone, MapPin, Users, Calendar, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrevencaoQueimadas = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header com botão voltar */}
      <div className="mb-8">
        <Link 
          to="/educacao"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Educação
        </Link>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-xl">
            <Shield className="w-10 h-10 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Como Prevenir Queimadas
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Guia completo para prevenção e boas práticas
            </p>
          </div>
        </div>
      </div>

      {/* Introdução */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          📖 Introdução
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A prevenção de queimadas é uma responsabilidade de todos. No Brasil, mais de <strong>90% das queimadas são causadas por ação humana</strong>, 
          seja por negligência, descuido ou práticas inadequadas. Este guia vai te ensinar tudo sobre como prevenir queimadas e proteger nosso meio ambiente.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          A prevenção é sempre mais eficiente e econômica do que o combate. Uma única queimada pode destruir décadas de crescimento florestal, 
          afetar a qualidade do ar, contaminar fontes de água e causar prejuízos incalculáveis à biodiversidade.
        </p>
      </div>

      {/* Principais Causas */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
          Principais Causas de Queimadas
        </h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">1. Queimadas Agrícolas</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Prática ilegal de "limpeza" de terreno para plantio ou pasto. Muitas vezes o fogo sai do controle e se espalha para áreas protegidas.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">2. Descarte de Cigarros</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Bitucas de cigarro jogadas em vegetação seca podem iniciar grandes incêndios, especialmente em períodos de estiagem.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">3. Fogueiras e Queima de Lixo</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Fogueiras mal apagadas ou queima de lixo próximo a áreas de vegetação são fontes comuns de incêndios florestais.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">4. Balões e Fogos de Artifício</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Além de crime, balões e fogos podem cair em áreas de mata e iniciar incêndios devastadores.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">5. Desmatamento Ilegal</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Criminosos usam fogo para desmatar áreas protegidas visando especulação imobiliária ou extração ilegal de recursos.
            </p>
          </div>
        </div>
      </div>

      {/* Boas Práticas */}
      <div className="card bg-green-50 dark:bg-green-900/10 border-2 border-green-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
          ✅ Boas Práticas de Prevenção
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">🏠 Em Propriedades Rurais</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Mantenha aceiros (faixas sem vegetação) de 3-5 metros</li>
              <li>• Limpe a vegetação seca ao redor de construções</li>
              <li>• Tenha equipamentos de combate (pás, enxadas, água)</li>
              <li>• Faça manutenção de cercas elétricas</li>
              <li>• Crie plano de contingência</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">🌲 Em Áreas de Mata</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• NUNCA jogue bitucas de cigarro</li>
              <li>• Não faça fogueiras em dias secos</li>
              <li>• Leve seu lixo de volta</li>
              <li>• Não solte balões</li>
              <li>• Evite usar fogo para qualquer finalidade</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">🚗 Na Estrada</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Não jogue lixo pela janela</li>
              <li>• Cuidado com fagulhas do escapamento</li>
              <li>• Ao ver fogo, acione os bombeiros</li>
              <li>• Não pare em vegetação seca</li>
              <li>• Mantenha para-brisas de emergência</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">🏙️ Na Cidade</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Não queime lixo ou folhas secas</li>
              <li>• Denuncie queimadas irregulares</li>
              <li>• Eduque crianças sobre riscos</li>
              <li>• Participe de campanhas de conscientização</li>
              <li>• Apoie políticas de prevenção</li>
            </ul>
          </div>
        </div>
      </div>

      {/* O que NÃO fazer */}
      <div className="card bg-red-50 dark:bg-red-900/10 border-2 border-red-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
          ❌ O que NUNCA Fazer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Fazer queimadas sem autorização do órgão ambiental</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Queimar lixo em terrenos ou quintais</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Soltar balões (é crime!)</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Jogar cigarro aceso pela janela</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Fazer fogueira próximo a vegetação seca</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Deixar fogueiras mal apagadas</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Usar fogo para "limpar" terrenos</span>
          </div>
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300">Ignorar avisos de risco de incêndio</span>
          </div>
        </div>
      </div>

      {/* Legislação */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          ⚖️ Legislação e Penalidades
        </h2>
        
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Lei de Crimes Ambientais (Lei 9.605/98)</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Art. 41: Provocar incêndio em mata ou floresta
            </p>
            <p className="font-bold text-red-600 dark:text-red-400">
              Pena: 2 a 4 anos de prisão + multa
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Decreto Federal 2.661/98</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Regulamenta o uso do fogo em práticas agropastoris
            </p>
            <p className="font-bold text-orange-600 dark:text-orange-400">
              Queimada controlada requer autorização prévia do IBAMA
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Código Florestal (Lei 12.651/12)</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Estabelece regras para uso sustentável da vegetação
            </p>
            <p className="font-bold text-purple-600 dark:text-purple-400">
              Prevê multas de R$ 1.000 a R$ 1.000.000 por hectare
            </p>
          </div>
        </div>
      </div>

      {/* Dicas Práticas */}
      <div className="card bg-yellow-50 dark:bg-yellow-900/10 border-2 border-yellow-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          💡 Dicas Práticas do Dia a Dia
        </h2>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg flex items-start gap-3">
            <Calendar className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100">Período de Maior Risco</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Julho a outubro é o período mais crítico no Brasil. Reforce cuidados nesses meses!
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg flex items-start gap-3">
            <Users className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100">Eduque Sua Comunidade</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Compartilhe informações, organize palestras e crie grupos de vigilância comunitária.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg flex items-start gap-3">
            <MapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100">Conheça os Riscos da Sua Região</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Consulte mapas de risco do INPE e fique atento aos alertas meteorológicos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contatos de Emergência */}
      <div className="card bg-red-100 dark:bg-red-900/20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
          🚨 Contatos de Emergência
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="tel:193" className="bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">Corpo de Bombeiros</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Emergências com fogo</p>
              </div>
              <span className="text-2xl font-bold text-red-600 dark:text-red-400">193</span>
            </div>
          </a>

          <a href="tel:0800618080" className="bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">IBAMA</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Denúncias ambientais</p>
              </div>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">0800 61 8080</span>
            </div>
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-primary-500 to-green-500 text-white">
        <div className="text-center py-6">
          <h2 className="text-2xl font-bold mb-4">
            🌳 Faça Sua Parte!
          </h2>
          <p className="mb-6 text-lg">
            A prevenção começa com você. Compartilhe este guia e ajude a proteger nossas florestas!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/reportar" 
              className="btn bg-white text-primary-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg"
            >
              Reportar Queimada
            </Link>
            <Link 
              to="/educacao" 
              className="btn bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold px-6 py-3 rounded-lg"
            >
              Ver Outros Guias
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrevencaoQueimadas

