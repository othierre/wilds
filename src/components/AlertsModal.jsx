import { X } from 'lucide-react';

const AlertsModal = ({ isOpen, onClose, alerts, isLoading, onAlertClick }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Alertas da Última Hora
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 space-y-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <p className="text-gray-600 dark:text-gray-400">Buscando e processando alertas...</p>
            </div>
          ) : alerts.length === 0 ? (
            <div className="flex justify-center items-center h-48">
              <p className="text-gray-600 dark:text-gray-400">Nenhum alerta de incêndio detectado na última hora.</p>
            </div>
          ) : (
            alerts.map(alert => (
              <div 
                key={alert.id}
                onClick={() => onAlertClick(alert)}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${
                    alert.severity === 'high' ? 'bg-red-500' : 
                    alert.severity === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                      {alert.location}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {alert.area} hectares • {alert.time}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertsModal;
