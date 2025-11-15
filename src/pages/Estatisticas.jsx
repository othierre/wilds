import { useState } from 'react'
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts'
import { TrendingUp, TrendingDown, Flame, MapPin, Wind, Droplets, Users, FlaskConical, Gavel, Briefcase } from 'lucide-react'

const Estatisticas = () => {
  const [period, setPeriod] = useState('week')

  // Mock data para os gráficos
  const weeklyData = [
    { name: 'Seg', queimadas: 12, area: 245, co2: 180 },
    { name: 'Ter', queimadas: 19, area: 389, co2: 290 },
    { name: 'Qua', queimadas: 15, area: 312, co2: 235 },
    { name: 'Qui', queimadas: 25, area: 512, co2: 385 },
    { name: 'Sex', queimadas: 22, area: 445, co2: 335 },
    { name: 'Sáb', queimadas: 18, area: 368, co2: 275 },
    { name: 'Dom', queimadas: 16, area: 325, co2: 245 },
  ]

  const stateData = [
    { name: 'MT', value: 245, color: '#dc2626' },
    { name: 'PA', value: 198, color: '#f97316' },
    { name: 'TO', value: 167, color: '#f59e0b' },
    { name: 'GO', value: 143, color: '#84cc16' },
    { name: 'MS', value: 89, color: '#22c55e' },
  ]

  const biomeData = [
    { name: 'Amazônia', value: 342 },
    { name: 'Cerrado', value: 298 },
    { name: 'Mata Atlântica', value: 156 },
    { name: 'Pantanal', value: 89 },
    { name: 'Caatinga', value: 67 },
  ]

  // Mock data para Agricultura Familiar
  const familyFarmingEstablishmentsData = [
    { name: 'Agricultura Familiar', value: 77, color: '#22c55e' },
    { name: 'Outros Estabelecimentos', value: 23, color: '#f59e0b' },
  ];

  const foodProductionContributionData = [
    { name: 'Feijão', value: 70 },
    { name: 'Mandioca', value: 87 },
    { name: 'Leite', value: 60 },
    { name: 'Aves', value: 50 },
  ];

  // Mock data para Agrotóxicos e EPI
  const pesticideUseByCropData = [
    { name: 'Soja', value: 54, color: '#84cc16' },
    { name: 'Milho', value: 18, color: '#f97316' },
    { name: 'Algodão', value: 7, color: '#f59e0b' },
    { name: 'Pastagem', value: 6, color: '#dc2626' },
    { name: 'Cana-de-açúcar', value: 4, color: '#6366f1' },
  ];

  const ppeAdherenceData = [
    { name: 'Usou EPI', value: 41, color: '#22c55e' },
    { name: 'Não Usou EPI', value: 59, color: '#dc2626' },
  ];

  // Mock data para Direitos Trabalhistas Rurais
  const slaveLaborRescuesData = [
    { year: '2022', value: 2218 },
    { year: '2023', value: 2663 },
  ];

  const agriculturalRescuesPercentageData = [
    { name: 'Atividades Agropecuárias', value: 90, color: '#dc2626' },
    { name: 'Outras Atividades', value: 10, color: '#6366f1' },
  ];

  const stats = [
    {
      label: 'Total Semanal',
      value: '127',
      change: '+12%',
      trend: 'up',
      icon: Flame,
      color: 'red'
    },
    {
      label: 'Área Total',
      value: '2.6k ha',
      change: '+8%',
      trend: 'up',
      icon: MapPin,
      color: 'orange'
    },
    {
      label: 'CO₂ Emitido',
      value: '1.9k ton',
      change: '+15%',
      trend: 'up',
      icon: Wind,
      color: 'gray'
    },
    {
      label: 'Chuvas Previstas',
      value: '23%',
      change: '-5%',
      trend: 'down',
      icon: Droplets,
      color: 'blue'
    },
    {
      label: 'Empregos Agricultura Familiar',
      value: '10.1M',
      change: '+X%', 
      trend: 'up', 
      icon: Users, 
      color: 'green'
    },
    {
      label: 'Agrotóxicos Consumidos (2021)',
      value: '719.5k ton',
      change: '+X%', 
      trend: 'up', 
      icon: FlaskConical, 
      color: 'red'
    },
    {
      label: 'Resgates Trabalho Escravo (2023)',
      value: '2.6k',
      change: '+X%', 
      trend: 'up', 
      icon: Gavel, 
      color: 'red'
    },
    {
      label: 'Informalidade Rural (2015)',
      value: '88%',
      change: '-X%', 
      trend: 'down', 
      icon: Briefcase, 
      color: 'gray'
    },
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#1f1f1f] rounded-lg shadow-lg p-3">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs text-gray-600 dark:text-gray-400">
              <span style={{ color: entry.color }}>{entry.name}:</span> {entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Estatísticas do Setor Rural
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Análise detalhada de dados relevantes para o setor rural brasileiro, incluindo agricultura familiar, uso de agrotóxicos e direitos trabalhistas.
          </p>
        </div>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="input max-w-[200px]"
        >
          <option value="day">Hoje</option>
          <option value="week">Última Semana</option>
          <option value="month">Último Mês</option>
          <option value="year">Último Ano</option>
        </select>
      </div>

      {/* Stats Cards */}
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
                <div className={`flex items-center gap-1 mt-1 ${
                  stat.trend === 'up' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <div className={`bg-${stat.color}-100 dark:bg-${stat.color}-900/30 p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Area Chart - Queimadas por Dia */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Queimadas por Dia
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="colorQueimadas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="queimadas" 
                stroke="#dc2626" 
                fillOpacity={1} 
                fill="url(#colorQueimadas)" 
                name="Queimadas"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Estabelecimentos de Agricultura Familiar */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Estabelecimentos de Agricultura Familiar
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={familyFarmingEstablishmentsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {familyFarmingEstablishmentsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Estados */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Queimadas por Estado
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stateData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {stateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Uso de Agrotóxicos por Cultura */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Uso de Agrotóxicos por Cultura (%)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pesticideUseByCropData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#84cc16" name="Porcentagem" radius={[8, 8, 0, 0]}>
                {pesticideUseByCropData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart - Resgates de Trabalho Análogo à Escravidão */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Resgates de Trabalho Análogo à Escravidão
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={slaveLaborRescuesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
            <XAxis dataKey="year" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="#dc2626" name="Resgates" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Estatisticas

