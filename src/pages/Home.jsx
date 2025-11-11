import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Leaf, AlertTriangle, Sprout, Users, BookOpen, Bot, FlaskConical, Heart, ArrowRight, CheckCircle2, Droplets, Wind, Sun } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'EPIs Corretos',
      description: 'Orientação completa sobre equipamentos de proteção individual e seu uso adequado',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      icon: FlaskConical,
      title: 'Manejo Seguro',
      description: 'Técnicas corretas de aplicação, armazenamento e descarte de agrotóxicos',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      iconBg: 'bg-gradient-to-br from-orange-500 to-amber-600'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Práticas agrícolas responsáveis que protegem o meio ambiente e sua saúde',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: Bot,
      title: 'IA Guma',
      description: 'Assistente virtual inteligente para tirar dúvidas em tempo real sobre o campo',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600'
    }
  ];

  const benefits = [
    { icon: CheckCircle2, text: 'Redução de acidentes no campo', color: 'text-green-600 dark:text-green-400' },
    { icon: CheckCircle2, text: 'Aumento da produtividade segura', color: 'text-blue-600 dark:text-blue-400' },
    { icon: CheckCircle2, text: 'Proteção da saúde do agricultor', color: 'text-orange-600 dark:text-orange-400' },
    { icon: CheckCircle2, text: 'Preservação ambiental', color: 'text-emerald-600 dark:text-emerald-400' }
  ];

  const stats = [
    { number: '500+', label: 'Produtores Atendidos', icon: Users },
    { number: '95%', label: 'Segurança Aumentada', icon: Shield },
    { number: '24/7', label: 'Suporte Disponível', icon: Bot },
    { number: '100%', label: 'Sustentável', icon: Leaf }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-24 md:py-32 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-56 h-56 bg-green-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-teal-300 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Floating icons decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <Shield className="absolute top-24 right-12 w-20 h-20 animate-bounce" style={{animationDuration: '3s'}} />
          <Leaf className="absolute bottom-32 left-16 w-24 h-24 animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}} />
          <FlaskConical className="absolute top-1/3 right-1/4 w-16 h-16 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '1s'}} />
        </div>

        <div className="relative container mx-auto px-4 sm:px-8 text-center z-10 max-w-6xl">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-full mb-8 shadow-2xl border border-white/20">
            <Sprout className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-semibold tracking-wide">Feira de Agricultura Familiar • EE Prof. Manoel Machado</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="block bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              Agricultura Familiar
            </span>
            <span className="block text-yellow-300 text-4xl md:text-5xl lg:text-6xl mt-3 font-extrabold">
              Protegida pela Tecnologia
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Soluções digitais para o uso seguro de agrotóxicos e EPIs, unindo inovação, educação e sustentabilidade no campo
          </p>

          {/* Stats badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-300" />
                <span className="font-bold">100% Seguro</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-yellow-300" />
                <span className="font-bold">IA Guma</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-yellow-300" />
                <span className="font-bold">Sustentável</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/educacao"
              className="group relative btn-primary bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-yellow-400/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <span className="relative flex items-center justify-center gap-3">
                <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Aprender Agora</span>
              </span>
            </Link>
            <Link
              to="/guma"
              className="group relative btn-secondary bg-white/15 backdrop-blur-xl border-2 border-white/40 hover:bg-white hover:text-green-700 text-lg px-10 py-5 rounded-2xl font-bold shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Falar com Guma</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" className="fill-gray-50 dark:fill-gray-950"/>
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-5 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Nossas Soluções</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Tecnologia que Protege
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ferramentas digitais pensadas para o dia a dia do agricultor familiar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl transform rotate-2 opacity-10 group-hover:rotate-4 group-hover:opacity-20 transition-all duration-500`}></div>
                <div className={`relative bg-gradient-to-br ${feature.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 ${feature.borderColor} h-full`}>
                  <div className={`${feature.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-black mb-3 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guma AI Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-5 py-2 rounded-full mb-6">
                <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Inteligência Artificial</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Conheça a Guma
                </span>
                <span className="block text-gray-900 dark:text-white mt-2">
                  Sua Assistente Virtual
                </span>
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A Guma é uma inteligência artificial criada especialmente para orientar produtores rurais sobre o uso seguro de agrotóxicos, EPIs e práticas sustentáveis.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Tire dúvidas em tempo real sobre segurança no campo',
                  'Receba orientações sobre dosagens e aplicações corretas',
                  'Aprenda sobre equipamentos de proteção adequados',
                  'Obtenha dicas de manejo sustentável e controle de pragas'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/guma"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Conversar com a Guma</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-400 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl">
                  <Bot className="w-full h-auto text-white opacity-90" style={{maxHeight: '400px'}} />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-gray-900 dark:text-white">Online 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Benefícios Comprovados
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-black text-gray-900 dark:text-gray-100 mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card flex items-start gap-4 group hover:scale-105 transition-transform">
                <benefit.icon className={`w-6 h-6 flex-shrink-0 ${benefit.color}`} />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/20">
            <Sprout className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-bold tracking-wide uppercase">Comece Agora</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Transforme Seu Campo
            <span className="block text-yellow-300 mt-2">Com Tecnologia e Segurança</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Junte-se a centenas de produtores que já estão cultivando com mais segurança e sustentabilidade
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/educacao"
              className="group inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xl px-10 py-5 rounded-2xl font-black shadow-2xl hover:shadow-yellow-400/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Explorar Conteúdos</span>
            </Link>

            <Link
              to="/guma"
              className="group inline-flex items-center gap-4 bg-white/15 backdrop-blur-xl border-2 border-white/40 hover:bg-white hover:text-green-700 text-xl px-10 py-5 rounded-2xl font-bold shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Falar com Guma</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,50L60,55C120,60,240,70,360,65C480,60,600,40,720,35C840,30,960,40,1080,45C1200,50,1320,50,1380,50L1440,50L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" className="fill-gray-50 dark:fill-gray-950"/>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;