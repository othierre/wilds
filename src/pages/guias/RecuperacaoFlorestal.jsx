import { ArrowLeft, Sprout, TreePine, Droplets, Sun, Users, Calendar, MapPin, TrendingUp, CheckCircle, Layers, Leaf, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const RecuperacaoFlorestal = () => {
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
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl">
            <Sprout className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Recuperação Florestal
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Como restaurar áreas afetadas por queimadas
            </p>
          </div>
        </div>
      </div>

      {/* Introdução Motivacional */}
      <div className="card bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="flex items-start gap-4">
          <Heart className="w-12 h-12 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold mb-3">
              A Natureza Pode Se Recuperar! 🌱
            </h2>
            <p className="mb-3">
              Embora as queimadas causem danos devastadores, a natureza tem uma capacidade incrível de regeneração 
              quando recebe o apoio adequado. Com as técnicas corretas e dedicação, podemos restaurar florestas 
              e ecossistemas que foram perdidos.
            </p>
            <p className="text-green-100">
              <strong>Cada árvore plantada é um passo rumo à recuperação!</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Tipos de Recuperação */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />
          🌳 Tipos de Recuperação Florestal
        </h2>
        
        <div className="space-y-4">
          <div className="border-2 border-green-500 rounded-lg p-4 bg-green-50 dark:bg-green-900/10">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 text-lg">1. Regeneração Natural</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A floresta se regenera sozinha através de sementes do banco de sementes do solo e dispersão por animais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-bold text-green-700 dark:text-green-400 mb-1">✅ Vantagens:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Baixo custo</li>
                  <li>• Espécies nativas</li>
                  <li>• Adaptação natural</li>
                  <li>• Diversidade genética</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-orange-700 dark:text-orange-400 mb-1">⚠️ Limitações:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Processo lento</li>
                  <li>• Requer fonte de sementes</li>
                  <li>• Pode não ocorrer sozinha</li>
                  <li>• Depende de condições</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/10">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 text-lg">2. Regeneração Assistida</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Auxílio à regeneração natural através de técnicas que facilitam o processo.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Técnicas:</strong> Controle de espécies invasoras, construção de poleiros artificiais para aves, 
              transposição de solo, enriquecimento com mudas.
            </p>
          </div>

          <div className="border-2 border-purple-500 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/10">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 text-lg">3. Plantio Direto</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Plantio ativo de mudas de espécies nativas em áreas muito degradadas.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Quando usar:</strong> Solo muito degradado, ausência de banco de sementes, áreas isoladas, 
              necessidade de recuperação rápida.
            </p>
          </div>
        </div>
      </div>

      {/* Etapas da Recuperação */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
          📋 Etapas da Recuperação
        </h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Diagnóstico da Área</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Avaliar o estado da área afetada para planejar a melhor estratégia de recuperação.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✓ Análise do solo (fertilidade, compactação, erosão)</li>
                <li>✓ Identificação de espécies remanescentes</li>
                <li>✓ Avaliação da fonte de sementes próximas</li>
                <li>✓ Verificação de banco de sementes do solo</li>
                <li>✓ Análise de fatores limitantes (pragas, invasoras)</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Preparação do Solo</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Recuperar as condições do solo para receber as mudas ou permitir regeneração.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✓ Construção de curvas de nível contra erosão</li>
                <li>✓ Subsolagem (descompactação) se necessário</li>
                <li>✓ Correção de acidez e adubação orgânica</li>
                <li>✓ Controle de formigas cortadeiras</li>
                <li>✓ Remoção de espécies invasoras</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Escolha das Espécies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Selecionar espécies nativas adequadas para cada fase da sucessão ecológica.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-2 rounded border border-yellow-300">
                  <p className="font-bold text-xs text-yellow-700 dark:text-yellow-400 mb-1">Pioneiras (0-5 anos)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Crescimento rápido, pleno sol</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/10 p-2 rounded border border-orange-300">
                  <p className="font-bold text-xs text-orange-700 dark:text-orange-400 mb-1">Secundárias (5-15 anos)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Crescimento médio, meia-sombra</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 p-2 rounded border border-green-300">
                  <p className="font-bold text-xs text-green-700 dark:text-green-400 mb-1">Climácicas (15+ anos)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Crescimento lento, sombra</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Plantio e Manejo Inicial</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Realizar o plantio na época adequada e cuidados iniciais essenciais.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✓ Plantio no início da estação chuvosa</li>
                <li>✓ Espaçamento adequado (3x2m comum)</li>
                <li>✓ Adubação de base e cobertura</li>
                <li>✓ Coroamento (limpeza ao redor da muda)</li>
                <li>✓ Irrigação nos primeiros meses se necessário</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
              5
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Monitoramento e Manutenção</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Acompanhar o desenvolvimento e fazer manutenções periódicas.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✓ Controle de formigas e pragas</li>
                <li>✓ Replantio de mudas mortas (até 20%)</li>
                <li>✓ Coroamento semestral nos 2 primeiros anos</li>
                <li>✓ Adubação de cobertura anual</li>
                <li>✓ Monitoramento de crescimento e fauna</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Espécies Recomendadas */}
      <div className="card bg-green-50 dark:bg-green-900/10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <TreePine className="w-6 h-6 text-green-600 dark:text-green-400" />
          🌲 Espécies Nativas Recomendadas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 dark:text-green-400 mb-3">Para Áreas de Cerrado</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Ipê Amarelo</span>
                <span className="text-xs text-gray-500">Rápido crescimento</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Barbatimão</span>
                <span className="text-xs text-gray-500">Medicinal</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Pequi</span>
                <span className="text-xs text-gray-500">Frutífera</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Cagaita</span>
                <span className="text-xs text-gray-500">Atrai fauna</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Buriti</span>
                <span className="text-xs text-gray-500">Áreas úmidas</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 dark:text-green-400 mb-3">Para Áreas de Mata Atlântica</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Pau-brasil</span>
                <span className="text-xs text-gray-500">Símbolo nacional</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Jequitibá</span>
                <span className="text-xs text-gray-500">Grande porte</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Jacarandá</span>
                <span className="text-xs text-gray-500">Madeira nobre</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Palmito Juçara</span>
                <span className="text-xs text-gray-500">Alimento fauna</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Cedro</span>
                <span className="text-xs text-gray-500">Secundária</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 dark:text-green-400 mb-3">Para Amazônia</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Castanheira</span>
                <span className="text-xs text-gray-500">Grande porte</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Açaí</span>
                <span className="text-xs text-gray-500">Econômica</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Cumaru</span>
                <span className="text-xs text-gray-500">Madeira nobre</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Ucuuba</span>
                <span className="text-xs text-gray-500">Áreas alagadas</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌳 Mogno</span>
                <span className="text-xs text-gray-500">Climácica</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 dark:text-green-400 mb-3">Espécies Pioneiras Universais</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌱 Embaúba</span>
                <span className="text-xs text-gray-500">Super rápida</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌱 Pau-de-tamanco</span>
                <span className="text-xs text-gray-500">Resistente</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌱 Sangra d'água</span>
                <span className="text-xs text-gray-500">Pioneira</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌱 Aroeira-pimenteira</span>
                <span className="text-xs text-gray-500">Versatil</span>
              </div>
              <div className="flex justify-between items-center border-b pb-1">
                <span className="text-gray-700 dark:text-gray-300">🌱 Mutambo</span>
                <span className="text-xs text-gray-500">Sombreamento</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dicas Práticas */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Sun className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          💡 Dicas Práticas Para Sucesso
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <Calendar className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Melhor Época de Plantio</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Início da estação chuvosa (outubro-dezembro no Centro-Oeste). Evite meses secos!
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Irrigação</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Essencial nos primeiros 3 meses. Use sistema de gotejamento ou regue manualmente 2-3x por semana.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <MapPin className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Espaçamento</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                3x2 metros é ideal. Maior densidade acelera sombreamento mas exige mais mudas.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Trabalho em Grupo</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mutirões aumentam eficiência e reduzem custos. Organize sua comunidade!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tempo de Recuperação */}
      <div className="card bg-blue-50 dark:bg-blue-900/10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          ⏱️ Linha do Tempo da Recuperação
        </h2>
        
        <div className="space-y-3">
          <div className="flex gap-4">
            <div className="bg-green-600 text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap flex-shrink-0 h-fit">
              0-2 anos
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">
              <p className="font-bold mb-1">Fase de Estabelecimento</p>
              <p>Pioneiras crescem rapidamente, solo começa a se estabilizar. Manutenção intensa.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap flex-shrink-0 h-fit">
              3-5 anos
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">
              <p className="font-bold mb-1">Fase de Crescimento</p>
              <p>Dossel começa a fechar, fauna retorna, regeneração natural inicia. Menos manutenção.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap flex-shrink-0 h-fit">
              6-15 anos
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">
              <p className="font-bold mb-1">Fase de Consolidação</p>
              <p>Floresta secundária estabelecida, biodiversidade aumenta, ciclos ecológicos restaurados.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-orange-600 text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap flex-shrink-0 h-fit">
              15+ anos
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">
              <p className="font-bold mb-1">Floresta Madura</p>
              <p>Estrutura complexa, alta biodiversidade, serviços ecossistêmicos plenos. Autossustentável.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custos Estimados */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          💰 Custos Estimados (por hectare)
        </h2>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 dark:text-gray-300">Mudas (1.600 unidades)</span>
            <span className="font-bold text-green-600 dark:text-green-400">R$ 4.800 - R$ 8.000</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 dark:text-gray-300">Preparo do solo</span>
            <span className="font-bold text-green-600 dark:text-green-400">R$ 1.500 - R$ 3.000</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 dark:text-gray-300">Plantio e insumos</span>
            <span className="font-bold text-green-600 dark:text-green-400">R$ 2.000 - R$ 4.000</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 dark:text-gray-300">Manutenção (2 anos)</span>
            <span className="font-bold text-green-600 dark:text-green-400">R$ 3.000 - R$ 5.000</span>
          </div>
          <div className="flex justify-between items-center pt-2 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg">
            <span className="font-bold text-gray-900 dark:text-gray-100">TOTAL ESTIMADO</span>
            <span className="font-bold text-xl text-green-600 dark:text-green-400">R$ 11.000 - R$ 20.000</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          <strong>💡 Dica:</strong> Custos podem ser reduzidos com produção própria de mudas, mutirões voluntários e 
          uso de técnicas de baixo custo. Alguns programas governamentais oferecem mudas gratuitamente!
        </p>
      </div>

      {/* Programas de Apoio */}
      <div className="card bg-purple-50 dark:bg-purple-900/10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          🤝 Programas de Apoio à Recuperação
        </h2>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
            <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-1">Programa Floresta+</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              MMA - Pagamento por serviços ambientais para quem conserva e recupera florestas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
            <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-1">Programa ABC+ (Agricultura de Baixo Carbono)</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Crédito rural com juros subsidiados para recuperação de áreas degradadas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
            <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-1">ONGs e Instituições</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              SOS Mata Atlântica, The Nature Conservancy, WWF, Iniciativa Verde - doação de mudas e apoio técnico.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="text-center py-6">
          <Sprout className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            Plante Uma Árvore Hoje! 🌱
          </h2>
          <p className="mb-6 text-lg">
            Cada árvore plantada é um passo para reverter os danos das queimadas. 
            Comece pequeno, pense grande!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/reportar" 
              className="btn bg-white text-green-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg"
            >
              Reportar Área para Recuperação
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

export default RecuperacaoFlorestal

