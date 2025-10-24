const DevelopmentBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-[length:200%_100%] animate-gradient overflow-hidden relative z-[999]">
      <div className="animate-marquee whitespace-nowrap py-2">
        <span className="inline-block text-white font-semibold text-sm px-4">
          ⚠️ PROJETO EXPERIMENTAL EM FASE DE DESENVOLVIMENTO - Este site ainda não utiliza dados reais - Funcionalidades em construção
        </span>
        <span className="inline-block text-white font-semibold text-sm px-4">
          ⚠️ PROJETO EXPERIMENTAL EM FASE DE DESENVOLVIMENTO - Este site ainda não utiliza dados reais - Funcionalidades em construção
        </span>
        <span className="inline-block text-white font-semibold text-sm px-4">
          ⚠️ PROJETO EXPERIMENTAL EM FASE DE DESENVOLVIMENTO - Este site ainda não utiliza dados reais - Funcionalidades em construção
        </span>
      </div>
      
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default DevelopmentBanner

