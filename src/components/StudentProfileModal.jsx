import React from 'react';
import { X, User, Award, BookOpen, FileText } from 'lucide-react';

const StudentProfileModal = ({ student, studentsInSameClass, onClose }) => {
  if (!student) return null;

  // Calculate class average
  const classAverage = studentsInSameClass.length > 0
    ? studentsInSameClass.reduce((sum, s) => sum + s.grade, 0) / studentsInSameClass.length
    : 0;

  // Determine performance comparison
  const performanceComparison = student.grade > classAverage
    ? `Acima da média da turma (${classAverage.toFixed(1)}%)`
    : student.grade < classAverage
    ? `Abaixo da média da turma (${classAverage.toFixed(1)}%)`
    : `Na média da turma (${classAverage.toFixed(1)}%)`;

  // Helper function to determine grade color
  const getGradeColorClass = (grade) => {
    if (grade >= 60) {
      return 'text-green-400';
    } else if (grade >= 40 && grade <= 59) {
      return 'text-yellow-400';
    } else {
      return 'text-red-400';
    }
  };

  const gradeColorClass = getGradeColorClass(student.grade);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1002] p-4">
      <div className="bg-white dark:bg-[#141414] rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-[#1f1f1f]">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
            <User className="w-7 h-7 mr-3 text-blue-500" />
            Perfil do Aluno: {student.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Detalhes completos e desempenho de {student.name}.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* General Info */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {student.class}º
              </span>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Sala: {student.class}º Ano
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-500" />
                <span className={gradeColorClass}>Nota: {student.grade}%</span>
              </p>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1f1f1f] rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Comparativo de Desempenho
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Média da Turma:</span> {classAverage.toFixed(1)}%
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Seu Desempenho:</span> {performanceComparison}
            </p>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-green-500" />
              Atividades
            </h3>
            {student.activities && student.activities.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {student.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Nenhuma atividade registrada.</p>
            )}
          </div>

          {/* Proofs */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-500" />
              Provas
            </h3>
            {student.proofs && student.proofs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {student.proofs.map((proof, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1f1f1f] rounded-lg p-3">
                    {proof.type === 'image' && (
                      <img src={proof.url} alt={proof.name} className="w-12 h-12 object-cover rounded-md" />
                    )}
                    {proof.type === 'pdf' && (
                      <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md">
                        PDF
                      </div>
                    )}
                    <a
                      href={proof.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm font-medium truncate"
                      title={proof.name}
                    >
                      {proof.name}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Nenhuma prova anexada.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileModal;
