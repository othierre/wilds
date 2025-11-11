import { useEffect } from 'react';

const Guma = () => {
  useEffect(() => {
    // Redirect to the external URL
    window.location.replace('https://guma.ia.br/inicio');
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <p className="text-lg">Redirecionando para Guma...</p>
    </div>
  );
};

export default Guma;
