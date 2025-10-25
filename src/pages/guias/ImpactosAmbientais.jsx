import { ArrowLeft, Leaf, Skull, Droplets, Wind, TreePine, Fish, Bird, CloudRain, TrendingDown, AlertCircle, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const ImpactosAmbientais = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="mb-8">
        <Link 
          to="/educacao"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Educação
        </Link>
        
        <div className="flex items-start gap-4">
          <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-xl">
            <Leaf className="w-10 h-10 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Impactos Ambientais das Queimadas
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Compreenda as consequências devastadoras para o meio ambiente
            </p>
          </div>
        </div>
      </div>

      {/* Introdução com Estatísticas Impactantes */}
      <div className="card bg-red-50 dark:bg-red-900/10 border-2 border-red-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          📊 A Dimensão do Problema
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">17M</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">hectares queimados em 2023</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">2.5B</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">toneladas de CO₂ emitidas</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">3.500+</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">espécies afetadas</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">90%</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">causadas pelo homem</p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          As queimadas representam uma das maiores ameaças ambientais do Brasil e do mundo. 
          Seus impactos vão muito além do que podemos ver: afetam o clima, a biodiversidade, 
          a qualidade do ar e a vida de milhões de pessoas.
        </p>
      </div>

      {/* Impacto na Biodiversidade */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Bird className="w-6 h-6 text-green-600 dark:text-green-400" />
          🦜 Perda de Biodiversidade
        </h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Morte de Animais</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Milhões de animais morrem diretamente nas chamas ou indiretamente por perda de habitat, falta de alimento e água.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Animais de movimento lento são os mais afetados (preguiças, tamanduás, cobras)</li>
              <li>• Filhotes e ninhos são destruídos</li>
              <li>• Animais feridos ficam vulneráveis a predadores</li>
              <li>• Migração forçada para áreas inadequadas</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Destruição de Habitats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Ecossistemas inteiros são eliminados, levando décadas ou séculos para se recuperar.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Perda de árvores centenárias</li>
              <li>• Destruição de ninhos e tocas</li>
              <li>• Eliminação de corredores ecológicos</li>
              <li>• Fragmentação de habitats</li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Espécies Ameaçadas</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Espécies já em risco de extinção sofrem pressão ainda maior.
            </p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded text-sm">
                🐆 <strong>Onça-pintada:</strong> Habitat reduzido
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded text-sm">
                🦜 <strong>Arara-azul:</strong> Perda de ninhos
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded text-sm">
                🐺 <strong>Lobo-guará:</strong> Território destruído
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded text-sm">
                🦥 <strong>Preguiça:</strong> Movimento lento
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impacto na Atmosfera */}
      <div className="card bg-blue-50 dark:bg-blue-900/10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Wind className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          🌫️ Poluição do Ar e Mudanças Climáticas
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Emissão de Gases Estufa</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Queimadas liberam enormes quantidades de gases que intensificam o efeito estufa:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded">
                <p className="font-bold text-red-600 dark:text-red-400">CO₂</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Dióxido de carbono - principal gás estufa</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded">
                <p className="font-bold text-orange-600 dark:text-orange-400">CH₄</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Metano - 25x mais potente que CO₂</p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded">
                <p className="font-bold text-yellow-600 dark:text-yellow-400">N₂O</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Óxido nitroso - 300x mais potente</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Qualidade do Ar</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A fumaça das queimadas contém substâncias tóxicas que afetam a saúde humana:
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• <strong>Material particulado (PM2.5):</strong> Penetra nos pulmões causando doenças respiratórias</li>
              <li>• <strong>Monóxido de carbono:</strong> Reduz oxigenação do sangue</li>
              <li>• <strong>Compostos orgânicos voláteis:</strong> Causam irritação e doenças crônicas</li>
              <li>• <strong>Metais pesados:</strong> Acumulam no organismo</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Impactos na Saúde Humana
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-700 dark:text-gray-300">✓ Asma e bronquite</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">✓ Doenças cardíacas</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">✓ Irritação nos olhos</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">✓ Câncer de pulmão</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">✓ Problemas na gravidez</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">✓ Aumento de mortalidade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Impacto no Solo */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <TreePine className="w-6 h-6 text-green-600 dark:text-green-400" />
          🌱 Degradação do Solo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-orange-500 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Perda de Nutrientes</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              O fogo queima a matéria orgânica e volatiliza nutrientes essenciais:
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Nitrogênio evapora a 200°C</li>
              <li>• Fósforo perde-se na fumaça</li>
              <li>• Microorganismos morrem</li>
              <li>• Solo fica estéril</li>
            </ul>
          </div>

          <div className="border-2 border-red-500 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Erosão Acelerada</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Sem vegetação, o solo fica exposto e vulnerável:
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Chuvas levam camada fértil</li>
              <li>• Formação de voçorocas</li>
              <li>• Assoreamento de rios</li>
              <li>• Desertificação</li>
            </ul>
          </div>

          <div className="border-2 border-yellow-500 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Compactação</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              O fogo altera a estrutura física do solo:
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Solo fica impermeável</li>
              <li>• Reduz infiltração de água</li>
              <li>• Aumenta escoamento superficial</li>
              <li>• Dificulta regeneração</li>
            </ul>
          </div>

          <div className="border-2 border-purple-500 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Tempo de Recuperação</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              A regeneração completa pode levar:
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• <strong>Savana:</strong> 5-10 anos</li>
              <li>• <strong>Mata Atlântica:</strong> 20-50 anos</li>
              <li>• <strong>Amazônia:</strong> 50-100 anos</li>
              <li>• <strong>Florestas antigas:</strong> Séculos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impacto na Água */}
      <div className="card bg-blue-50 dark:bg-blue-900/10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          💧 Recursos Hídricos
        </h2>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
            <Fish className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Assoreamento de Rios</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Solo erodido é carregado para rios, reduzindo profundidade e qualidade da água.
                Mata peixes e destrói ecossistemas aquáticos.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
            <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Redução de Nascentes</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Sem cobertura vegetal, nascentes secam e o lençol freático baixa. 
                Afeta abastecimento de água de comunidades inteiras.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Contaminação</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Cinzas e resíduos tóxicos são levados pela chuva para corpos d'água, 
                contaminando fontes de água potável.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
            <CloudRain className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Ciclo da Água</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Florestas são fundamentais para "rios voadores" - correntes de vapor d'água. 
                Queimadas afetam regime de chuvas em regiões distantes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impactos Econômicos */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
          💰 Impactos Econômicos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Custos Diretos</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Combate a incêndios: R$ milhões por dia</li>
              <li>• Perda de produção agrícola</li>
              <li>• Destruição de infraestrutura</li>
              <li>• Custos com saúde pública</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Custos Indiretos</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Perda de turismo ecológico</li>
              <li>• Redução de exportações (sanções)</li>
              <li>• Desvalorização de imóveis</li>
              <li>• Impacto na imagem do país</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Círculo Vicioso */}
      <div className="card bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <h2 className="text-2xl font-bold mb-4">
          🔄 O Círculo Vicioso das Queimadas
        </h2>
        <div className="space-y-3">
          <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
            <p className="font-bold mb-1">1. Queimada inicial</p>
            <p className="text-sm">Floresta é queimada por ação humana ou raio</p>
          </div>
          <div className="text-center">↓</div>
          <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
            <p className="font-bold mb-1">2. Solo degradado</p>
            <p className="text-sm">Sem vegetação, solo seca e empobrece</p>
          </div>
          <div className="text-center">↓</div>
          <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
            <p className="font-bold mb-1">3. Vegetação inflamável</p>
            <p className="text-sm">Gramíneas secas substituem árvores</p>
          </div>
          <div className="text-center">↓</div>
          <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
            <p className="font-bold mb-1">4. Novos incêndios</p>
            <p className="text-sm">Área fica mais vulnerável a queimar novamente</p>
          </div>
          <div className="text-center">↻</div>
        </div>
      </div>

      {/* O que podemos fazer */}
      <div className="card bg-green-50 dark:bg-green-900/10 border-2 border-green-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          💚 O Que Podemos Fazer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <span className="text-2xl">🚫</span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">Prevenir</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Evite queimadas e eduque outros</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-2xl">📢</span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">Denunciar</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Reporte queimadas ilegais</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-2xl">🌱</span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">Recuperar</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Apoie projetos de reflorestamento</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-2xl">📚</span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">Educar</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Compartilhe conhecimento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="text-center py-6">
          <Skull className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            O Tempo de Agir é Agora!
          </h2>
          <p className="mb-6 text-lg">
            Cada queimada causa danos irreversíveis. Juntos podemos fazer a diferença!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/reportar" 
              className="btn bg-white text-green-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg"
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

export default ImpactosAmbientais

