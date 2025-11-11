import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Map, BarChart2, BookOpen, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/background-51-.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Wilds: Monitoramento Inteligente de Queimadas
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Utilizando inteligência artificial e dados de satélite para proteger nossas florestas e comunidades.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
            <Link 
              to="/fire-horizon" 
              className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            >
              Ver Mapa de Queimadas
            </Link>
            <Link 
              to="/reportar" 
              className="btn-secondary bg-transparent border-2 border-white hover:bg-white hover:text-green-700"
            >
              Denunciar Queimada
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como a Wilds Ajuda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <Flame className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detecção Precoce</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa IA analisa dados de satélite para identificar focos de incêndio em seus estágios iniciais, permitindo uma resposta rápida.
              </p>
            </div>
            <div className="feature-card">
              <Map className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mapa Interativo</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Visualize queimadas ativas, áreas de risco e informações climáticas em tempo real em um mapa intuitivo.
              </p>
            </div>
            <div className="feature-card">
              <BarChart2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Análises e Estatísticas</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Acompanhe tendências, áreas afetadas e o impacto das queimadas com dashboards detalhados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Solução
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            Sua participação é crucial. Denuncie focos de incêndio e ajude a proteger o meio ambiente.
          </p>
          <Link 
            to="/reportar" 
            className="btn-primary bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
          >
            Denunciar Agora
          </Link>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Educação e Prevenção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-content">
              <h3 className="text-2xl font-semibold mb-4">
                Aprenda sobre Prevenção e Impactos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Oferecemos guias e artigos para conscientizar sobre os perigos das queimadas e como todos podem contribuir para a prevenção.
              </p>
              <Link 
                to="/educacao" 
                className="btn-secondary bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
              >
                <BookOpen className="inline-block w-5 h-5 mr-2" />
                Acessar Guias Educativos
              </Link>
            </div>
            <div className="image-content">
              <img 
                src="https://via.placeholder.com/600x400/4CAF50/ffffff?text=Prevenção+de+Queimadas" 
                alt="Prevenção de Queimadas" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src={isDark ? '/white.png' : '/dark.png'} 
              alt="Wilds Logo" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed">
              Wilds é um sistema de monitoramento inteligente de queimadas, utilizando IA e dados de satélite para proteger o meio ambiente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação Rápida</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/fire-horizon" className="text-sm hover:text-white transition-colors">Fire Horizon</Link></li>
              <li><Link to="/educacao" className="text-sm hover:text-white transition-colors">Educação</Link></li>
              <li><Link to="/reportar" className="text-sm hover:text-white transition-colors">Reportar</Link></li>
              <li><Link to="/perfil" className="text-sm hover:text-white transition-colors">Perfil</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <p className="text-sm">Email: contato@wilds.app</p>
            <p className="text-sm">Telefone: (XX) XXXX-XXXX</p>
            <p className="text-sm mt-4">Endereço: Rua da Natureza, 123, Floresta Verde - BR</p>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Wilds. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Home;