import React, { useState, useEffect } from 'react';
import { User, ChevronDown, ChevronUp, CheckSquare, Square } from 'lucide-react';
import { getStudents, updateStudent } from '../utils/studentUtils'; // Import the update function
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CHECKLIST_QUESTIONS = [
  "Fez o post do Blog?",
  "Fez Cartazes?",
  "Preencheu o Formulário online?",
  "Fez a Busca por agrotóxicos?",
  "Ajudou na decoração?",
  "Foi participativo?",
];

const Argos = () => {
  const { user, loading } = useAuth(); // Get user and loading state from AuthContext
  const navigate = useNavigate(); // Initialize useNavigate
  const [students, setStudents] = useState([]); // Initialize with empty array
  const [expandedClasses, setExpandedClasses] = useState({
    '1': true,
    '2': true,
    '3': true
  });
  const [savingStates, setSavingStates] = useState({}); // New state for individual saving

  useEffect(() => {
    if (!loading) {
      // If not loading and user is not the specific admin, redirect
      if (!user || user.email !== 'thierryyuri123@gmail.com') {
        navigate('/'); // Redirect to home page
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-gray-900 dark:text-gray-100 text-xl">Carregando...</p>
      </div>
    );
  }

  // Only render the content if the user is authenticated and has the correct email
  if (!user || user.email !== 'thierryyuri123@gmail.com') {
    return null; // Or a more explicit "Access Denied" message if preferred
  }

  const loadStudents = async () => { // Make loadStudents a standalone function
    const fetchedStudents = await getStudents();
    // Initialize checklist for each student based on existing activities
    const studentsWithChecklist = fetchedStudents.map(student => ({
      ...student,
      checklist: CHECKLIST_QUESTIONS.reduce((acc, question) => {
        acc[question] = student.activities && student.activities.includes(question);
        return acc;
      }, {}),
    }));
    setStudents(studentsWithChecklist);
  };

  useEffect(() => {
    loadStudents();
  }, []); // Empty dependency array means this runs once on mount

  const calculateCompletionPercentage = (studentChecklist) => {
    const totalQuestions = CHECKLIST_QUESTIONS.length;
    if (totalQuestions === 0) return 0;

    const completedTasks = CHECKLIST_QUESTIONS.filter(question => studentChecklist[question]).length;
    return ((completedTasks / totalQuestions) * 100).toFixed(0);
  };

  const handleSaveStudent = async (studentId, studentChecklist) => {
    setSavingStates(prev => ({ ...prev, [studentId]: true }));
    const percentage = parseInt(calculateCompletionPercentage(studentChecklist)); // Ensure percentage is a number

    const completedActivities = {};
    CHECKLIST_QUESTIONS.forEach(question => {
      completedActivities[question] = studentChecklist[question] || false;
    });

    try {
      const result = await updateStudent(studentId, percentage, completedActivities);
      if (result.success) {
        alert(`Progresso do aluno ${studentId} salvo com sucesso!`);
        await loadStudents(); // Reload students to reflect changes
      } else {
        alert(`Falha ao salvar progresso do aluno ${studentId}. Erro: ${result.message}`);
      }
    } catch (error) {
      alert(`Erro inesperado ao salvar progresso do aluno ${studentId}. Erro: ${error.message}`);
      console.error('Error saving student progress:', error);
    } finally {
      setSavingStates(prev => ({ ...prev, [studentId]: false }));
    }
  };

  const handleChecklistItemChange = (studentId, question, isChecked) => {
    setStudents(prevStudents => {
      const updatedStudents = prevStudents.map(student =>
        student.id === studentId
          ? {
              ...student,
              checklist: {
                ...student.checklist,
                [question]: isChecked,
              },
            }
          : student
      );
      return updatedStudents;
    });
  };

  const toggleClass = (classNum) => {
    setExpandedClasses(prev => ({
      ...prev,
      [classNum]: !prev[classNum]
    }));
  };

  // Group students by class
  const studentsByClass = students.reduce((acc, student) => {
    if (!acc[student.class]) {
      acc[student.class] = [];
    }
    acc[student.class].push(student);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Painel Argos - Checklist de Alunos
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gerencie o checklist individual de cada aluno e acompanhe o progresso.
            </p>
          </div>
        </div>

        {/* Student Checklists - Organized by Class */}
        <div className="space-y-4">
          {['1', '2', '3'].map(classNum => {
            const classStudents = studentsByClass[classNum] || [];
            if (classStudents.length === 0) return null;

            return (
              <div key={classNum} className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#1f1f1f] rounded-lg overflow-hidden">
                {/* Class Header - Dropdown Toggle */}
                <button
                  onClick={() => toggleClass(classNum)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {classNum}º
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {classNum}º Ano
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {classStudents.length} {classStudents.length === 1 ? 'aluno' : 'alunos'}
                      </p>
                    </div>
                  </div>
                  {expandedClasses[classNum] ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Class Divider */}
                <div className="h-px bg-gray-200 dark:bg-[#1f1f1f]" />

                {/* Students Grid - Collapsible */}
                {expandedClasses[classNum] && (
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {classStudents.map(student => (
                        <div
                          key={student.id}
                          className="bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1f1f1f] rounded-lg p-4"
                        >
                          <div className="flex items-center mb-3">
                            <User className="w-6 h-6 text-gray-500 mr-3" />
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{student.name}</h4>
                          </div>
                          <div className="space-y-2 mb-4">
                            {CHECKLIST_QUESTIONS.map((question, index) => (
                              <div key={index} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`checkbox-${student.id}-${index}`}
                                  checked={student.checklist[question] || false}
                                  onChange={(e) => handleChecklistItemChange(student.id, question, e.target.checked)}
                                  className="form-checkbox h-5 w-5 text-blue-600 rounded dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor={`checkbox-${student.id}-${index}`} className="ml-2 text-gray-700 dark:text-gray-300 cursor-pointer">
                                  {question}
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-[#1f1f1f] flex justify-between items-center">
                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                              Progresso: {calculateCompletionPercentage(student.checklist)}%
                            </p>
                            <button
                              onClick={() => handleSaveStudent(student.id, student.checklist)}
                              disabled={savingStates[student.id]}
                              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                            >
                              {savingStates[student.id] ? 'Salvando...' : 'Salvar'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Summary Table for the Class */}
                    <div className="p-4 mt-4 border-t border-gray-200 dark:border-[#1f1f1f]">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Resumo da Turma {classNum}º Ano
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md">
                          <thead>
                            <tr className="bg-gray-200 dark:bg-[#1f1f1f] text-gray-600 dark:text-gray-300 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">NOMES</th>
                              <th className="py-3 px-6 text-left">PORCENTAGEM</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700 dark:text-gray-400 text-sm font-light">
                            {classStudents.map(student => (
                              <tr key={student.id} className="border-b border-gray-200 dark:border-[#1f1f1f] hover:bg-gray-100 dark:hover:bg-[#2a2a2a]">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{student.name}</td>
                                <td className="py-3 px-6 text-left">{calculateCompletionPercentage(student.checklist)}%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Argos;
