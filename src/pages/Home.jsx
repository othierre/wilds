import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Map, BarChart2, BookOpen, Facebook, Instagram, Twitter, Shield, Leaf, AlertTriangle, Sprout, Users, TrendingUp } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import WildsLogo from '../components/WildsLogo';

const Home = () => {
  const { isDark } = useTheme();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-green-950 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-32 md:py-48 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-56 h-56 bg-green-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-teal-300 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Floating icons decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-24 right-12 opacity-10 animate-bounce" style={{animationDuration: '3s'}}>
            <Leaf className="w-20 h-20" />
          </div>
          <div className="absolute bottom-32 left-16 opacity-10 animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}>
            <Shield className="w-24 h-24" />
          </div>
        </div>
        
        <div className="absolute inset-0">
          <img 
            src="/back.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/20 to-green-900/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-8 text-center z-10 max-w-6xl">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-full mb-10 shadow-2xl animate-fade-in-down border border-white/20">
            <Sprout className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-semibold tracking-wide">Tecnologia • Segurança • Sustentabilidade</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 animate-fade-in-down">
            <span className="block bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              Wilds
            </span>
            <span className="block text-yellow-300 text-4xl md:text-5xl lg:text-6xl mt-4 font-extrabold">
              Agricultura Protegida
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto animate-fade-in-up leading-relaxed font-light">
            Tecnologia para uso seguro de agrotóxicos e proteção do agricultor
          </p>
          
          {/* Stats badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-14 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="font-bold">500+ Produtores</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-300" />
                <span className="font-bold">100% Seguro</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Link 
              to="/fire-horizon" 
              className="group relative btn-primary bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-yellow-400/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <span className="relative flex items-center justify-center gap-3">
                <Map className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Explorar Mapa</span>
              </span>
            </Link>
            <Link 
              to="/reportar" 
              className="group relative btn-secondary bg-white/15 backdrop-blur-xl border-2 border-white/40 hover:bg-white hover:text-green-700 text-lg px-10 py-5 rounded-2xl font-bold shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <AlertTriangle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Reportar</span>
              </span>
            </Link>
          </div>
        </div>
        
        {/* Enhanced waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" className="fill-green-50 dark:fill-gray-950"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 md:py-40 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-8 relative max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-5 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Nossas Soluções</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Como Protegemos o Campo
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 - EPIs */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl transform rotate-2 opacity-10 group-hover:rotate-4 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative feature-card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-10 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-green-100 dark:border-green-800">
                
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-green-800 dark:text-green-300">EPIs Seguros</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Orientações sobre equipamentos de proteção e uso correto no campo
                </p>
                
                <div className="flex items-center text-green-600 dark:text-green-400 font-bold group-hover:gap-3 gap-2 transition-all">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 - Agrotóxicos */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl transform -rotate-2 opacity-10 group-hover:-rotate-4 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative feature-card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-10 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-blue-100 dark:border-blue-800">
                
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-blue-800 dark:text-blue-300">Manejo Inteligente</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Gestão segura de agrotóxicos com alertas e dosagens corretas
                </p>
                
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:gap-3 gap-2 transition-all">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3 - Sustentabilidade */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl transform rotate-2 opacity-10 group-hover:rotate-4 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative feature-card bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 p-10 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-amber-100 dark:border-amber-800">
                
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-amber-800 dark:text-amber-300">Campo Sustentável</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Práticas modernas que respeitam o meio ambiente e sua saúde
                </p>
                
                <div className="flex items-center text-amber-600 dark:text-amber-400 font-bold group-hover:gap-3 gap-2 transition-all">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-32 md:py-44 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-8 relative z-10 max-w-5xl">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-full mb-10 border border-white/20 shadow-2xl">
              <Shield className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Proteja o Campo</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Sua Vigilância
              <span className="block text-yellow-300 mt-2">Protege Vidas</span>
            </h2>
            
            <p className="text-2xl md:text-3xl mb-14 leading-relaxed font-light max-w-3xl mx-auto">
              Reporte situações de risco e ajude nossa comunidade agrícola
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
              <Link 
                to="/reportar" 
                className="group relative inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xl px-12 py-6 rounded-2xl font-black shadow-2xl hover:shadow-yellow-400/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <AlertTriangle className="relative w-7 h-7 group-hover:scale-110 transition-all" />
                <span className="relative">Reportar Agora</span>
              </Link>
              
              <Link 
                to="/educacao" 
                className="group inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border-2 border-white/40 hover:bg-white hover:text-green-700 text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                <span>Aprender</span>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold opacity-90">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>Resposta 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span>Confidencial</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,50L60,55C120,60,240,70,360,65C480,60,600,40,720,35C840,30,960,40,1080,45C1200,50,1320,50,1380,50L1440,50L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z" className="fill-white dark:fill-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-24 md:py-36 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-0 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-content order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 px-5 py-3 rounded-full mb-8 border border-green-200 dark:border-green-800">
                <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Educação Transformadora</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Conhecimento
                </span>
                <span className="block text-gray-900 dark:text-white mt-2">
                  que Salva Vidas
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Acesse nossa biblioteca completa com guias práticos, vídeos educativos e orientações de especialistas sobre segurança no campo
              </p>
              
              {/* Feature list */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-2 text-gray-900 dark:text-white">EPIs Essenciais</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Aprenda a escolher, usar e manter seus equipamentos de proteção</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-2 text-gray-900 dark:text-white">Manejo Correto</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Técnicas seguras de aplicação e armazenamento de defensivos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-2 text-gray-900 dark:text-white">Práticas Sustentáveis</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Cultive com responsabilidade ambiental e social</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/educacao" 
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Acessar Biblioteca Completa</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="image-content order-1 lg:order-2">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl transform -rotate-2 opacity-10"></div>
                
                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/back2.png" 
                    alt="Educação para Agricultura Familiar" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 px-8 py-6 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
                  <div className="text-center">
                    <div className="text-4xl font-black mb-1">150+</div>
                    <div className="text-sm font-bold uppercase tracking-wider">Guias Práticos</div>
                  </div>
                </div>
                
                {/* Floating icons */}
                <div className="absolute top-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                <div className="absolute top-1/2 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
                  <Leaf className="w-10 h-10 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-green-950 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black text-gray-300 py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Logo and Description */}
            <div className="space-y-6">
              <WildsLogo 
                color="white"
                className="h-14 w-auto object-contain brightness-110"
              />
              <p className="text-base leading-relaxed text-gray-400">
                <span className="font-bold text-white">Wilds</span> — Tecnologia e inovação para uma agricultura familiar mais segura, sustentável e próspera
              </p>
              
              {/* Social media with hover effects */}
              <div className="flex gap-4">
                <a href="#" className="group relative bg-white/5 hover:bg-green-600 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <Facebook className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 bg-green-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                </a>
                <a href="#" className="group relative bg-white/5 hover:bg-green-600 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <Twitter className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 bg-green-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                </a>
                <a href="#" className="group relative bg-white/5 hover:bg-green-600 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <Instagram className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 bg-green-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                Navegação
              </h3>
              <ul className="space-y-3">
                {[
                  { to: '/', label: 'Início' },
                  { to: '/fire-horizon', label: 'Fire Horizon' },
                  { to: '/educacao', label: 'Educação' },
                  { to: '/reportar', label: 'Reportar' },
                  { to: '/perfil', label: 'Perfil' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="group text-base text-gray-400 hover:text-green-400 transition-colors flex items-center gap-3"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-3 transition-all"></span>
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                Contato
              </h3>
              <div className="space-y-4">
                <a href="mailto:contato@wilds.app" className="group flex items-center gap-4 text-base text-gray-400 hover:text-green-400 transition-colors">
                  <div className="bg-white/5 p-3 rounded-lg group-hover:bg-green-600 transition-colors">
                    <span className="text-lg">✉</span>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">contato@wilds.app</span>
                </a>
                <a href="tel:XXXXXXXXXX" className="group flex items-center gap-4 text-base text-gray-400 hover:text-green-400 transition-colors">
                  <div className="bg-white/5 p-3 rounded-lg group-hover:bg-green-600 transition-colors">
                    <span className="text-lg">📞</span>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">(XX) XXXX-XXXX</span>
                </a>
                <div className="flex items-start gap-4 text-base text-gray-400">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <span className="text-lg">📍</span>
                  </div>
                  <span className="leading-relaxed">
                    Rua da Natureza, 123<br/>
                    Floresta Verde - BR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-gray-500 text-center md:text-left">
                &copy; {new Date().getFullYear()} <span className="font-bold text-green-400">Wilds</span>. Todos os direitos reservados.
              </p>
              
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Feito com</span>
                <span className="text-green-400 animate-pulse text-xl">💚</span>
                <span className="text-gray-500">para o campo brasileiro</span>
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">Privacidade</a>
                <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">Termos</a>
                <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">Ajuda</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;