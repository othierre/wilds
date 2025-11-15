import React, { useState, useEffect } from 'react';
import { Youtube, Clock, BookOpen, UploadCloud } from 'lucide-react'; // Import icons
import { getLessons } from '../utils/lessonUtils'; // Import the utility to fetch lessons

const Aulas = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false); // Reintroduce state for modal

  useEffect(() => {
    const fetchLessons = async () => {
      const fetchedLessons = await getLessons();
      setLessons(fetchedLessons);
    };
    fetchLessons();
  }, []);

  // Placeholder for banner images - in a real app, these would come from a CMS or API
  const banners = [
    { id: 1, image: 'https://via.placeholder.com/1200x400/FF5733/FFFFFF?text=Aulas+Wilds+-+Agricultura+Familiar', alt: 'Banner 1' },
    { id: 2, image: 'https://via.placeholder.com/1200x400/33FF57/FFFFFF?text=Aulas+Wilds+-+Segurança+no+Campo', alt: 'Banner 2' },
    { id: 3, image: 'https://via.placeholder.com/1200x400/3357FF/FFFFFF?text=Aulas+Wilds+-+Direitos+Rurais', alt: 'Banner 3' },
  ];

  // Simple carousel state
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, [banners.length]);

  // UploadAulaModal component (now guides to CMS)
  const UploadAulaModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-[#141414] rounded-lg shadow-xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Adicionar Nova Aula</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Para adicionar uma nova aula, por favor, acesse o painel administrativo do Netlify CMS em <a href="/admin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">/admin</a>.
            Lá você encontrará a coleção "Aulas" onde poderá inserir o título, descrição, duração e a URL do vídeo do YouTube manualmente.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Aulas e Capacitação
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Aprenda sobre agricultura familiar, segurança no campo e direitos trabalhistas rurais.
          </p>
        </div>
        <button 
          onClick={() => setShowUploadModal(true)} 
          className="btn-primary flex items-center gap-2"
        >
          <UploadCloud className="w-5 h-5" />
          Adicionar Nova Aula
        </button>
      </div>

      {/* Banner Section - Carousel */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-[250px] md:h-[400px]">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentBanner * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={banner.id} className="w-full flex-shrink-0 h-full">
              <img 
                src={banner.image} 
                alt={banner.alt} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentBanner === index ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setCurrentBanner(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div key={lesson.slug} className="card group cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={() => setSelectedLesson(lesson)}>
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={`https://img.youtube.com/vi/${lesson.youtubeId}/hqdefault.jpg`} 
                  alt={lesson.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Youtube className="w-12 h-12 text-white" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {lesson.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {lesson.description}
                </p>
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {lesson.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {lesson.duration}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 dark:text-gray-400">Nenhuma aula encontrada. Adicione aulas através do Netlify CMS.</p>
        )}
      </div>

      {/* Video Player Modal */}
      {selectedLesson && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#141414] rounded-lg shadow-xl p-6 w-full max-w-3xl relative">
            <button
              onClick={() => setSelectedLesson(null)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{selectedLesson.title}</h2>
            <div className="aspect-video w-full mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${selectedLesson.youtubeId}`}
                title={selectedLesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{selectedLesson.description}</p>
          </div>
        </div>
      )}

      {showUploadModal && <UploadAulaModal onClose={() => setShowUploadModal(false)} />}
    </div>
  );
};

export default Aulas;
