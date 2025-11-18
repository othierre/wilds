import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Search, Filter, User, ChevronDown, ChevronUp } from 'lucide-react';
import { getStudents } from '../utils/studentUtils'; // Import the utility function
import StudentProfileModal from '../components/StudentProfileModal'; // Import the new modal component

const PainelEepmm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [expandedClasses, setExpandedClasses] = useState({
    '1': true,
    '2': true,
    '3': true
  });
  const [studentsData, setStudentsData] = useState([]); // State to hold student data
  const [showStudentModal, setShowStudentModal] = useState(false); // State for modal visibility
  const [selectedStudent, setSelectedStudent] = useState(null); // State for selected student

  useEffect(() => {
    const loadStudents = async () => {
      const students = await getStudents();
      setStudentsData(students);
    };
    loadStudents();
  }, []); // Empty dependency array means this runs once on mount

  // Effect to control body scroll when modal is open
  useEffect(() => {
    if (showStudentModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset'; // Clean up on unmount
    };
  }, [showStudentModal]);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setShowStudentModal(true);
  };

  const handleCloseStudentModal = () => {
    setShowStudentModal(false);
    setSelectedStudent(null);
  };

  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.activities.some(activity => activity.toLowerCase().includes(searchTerm.toLowerCase())); // Search in activities
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  // Group students by class
  const studentsByClass = filteredStudents.reduce((acc, student) => {
    if (!acc[student.class]) {
      acc[student.class] = [];
    }
    acc[student.class].push(student);
    return acc;
  }, {});

  const toggleClass = (classNum) => {
    setExpandedClasses(prev => ({
      ...prev,
      [classNum]: !prev[classNum]
    }));
  };

  // General Grade Data
  const totalGrade = studentsData.reduce((sum, student) => sum + student.grade, 0);
  const averageGrade = studentsData.length > 0 ? totalGrade / studentsData.length : 0;

  const generalGradeData = [
    { name: 'Nota Média', value: averageGrade, color: '#22c55e' },
    { name: 'Outros', value: 100 - averageGrade, color: '#dc2626' }, // Assuming grades are out of 100
  ];

  // Individual Grade Data (for Bar Chart)
  const individualGradeData = studentsData.map(student => ({
    name: student.name,
    grade: student.grade,
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#1f1f1f] rounded-lg shadow-lg p-3">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs text-gray-600 dark:text-gray-400">
              <span style={{ color: entry.color }}>{entry.name === 'Nota Média' ? 'Nota' : entry.name}:</span> {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Painel EEPMM - Desempenho dos Alunos
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Acompanhe o desempenho individual e geral dos alunos, suas notas e provas.
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar aluno ou atividade..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#1f1f1f] rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full sm:w-auto pl-10 pr-8 py-2 bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#1f1f1f] rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
            >
              <option value="all">Todas as Salas</option>
              <option value="1">1º Ano</option>
              <option value="2">2º Ano</option>
              <option value="3">3º Ano</option>
            </select>
          </div>
        </div>

        {/* Graphs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart - General Grade Rate */}
          <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#1f1f1f] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Nota Média Geral
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={generalGradeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {generalGradeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart - Individual Grade Rate */}
          <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#1f1f1f] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Notas Individuais
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={individualGradeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[0, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="grade" fill="#6366f1" name="Nota" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Student Profiles - Organized by Class */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Perfis dos Alunos
          </h2>
          
          {filteredStudents.length > 0 ? (
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
                              className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1f1f1f] rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                              onClick={() => handleStudentClick(student)}
                            >
                              <div className="flex items-center mb-3">
                                <User className="w-6 h-6 text-gray-500 mr-3" />
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{student.name}</h4>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-1">
                                <span className="font-medium">Nota:</span> {student.grade}%
                              </p>
                              <div className="mb-3">
                                <h5 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">Atividades:</h5>
                                {student.activities && student.activities.length > 0 ? (
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    {student.activities.map((activity, index) => (
                                      <li key={index}>{activity}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-gray-500 text-sm">Nenhuma atividade registrada.</p>
                                )}
                              </div>
                              <div className="mt-2">
                                <h5 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Provas:</h5>
                                {student.proofs.length > 0 ? (
                                  <div className="space-y-2">
                                    {student.proofs.map((proof, index) => (
                                      <div key={index} className="flex items-center gap-2">
                                        {proof.type === 'image' && (
                                          <img src={proof.url} alt={proof.name} className="w-16 h-16 object-cover rounded-md" />
                                        )}
                                        {proof.type === 'pdf' && (
                                          <span className="text-red-500">PDF Icon</span>
                                        )}
                                        <a
                                          href={proof.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-500 hover:underline text-sm"
                                        >
                                          {proof.name}
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-gray-500 text-sm">Nenhuma prova anexada.</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#1f1f1f] rounded-lg p-8 text-center">
              <p className="text-gray-500">Nenhum aluno encontrado com os critérios de busca/filtro.</p>
            </div>
          )}
        </div>
      </div>

      {showStudentModal && selectedStudent && (
        <StudentProfileModal
          student={selectedStudent}
          studentsInSameClass={studentsData.filter(s => s.class === selectedStudent.class)}
          onClose={handleCloseStudentModal}
        />
      )}
    </div>
  );
};

export default PainelEepmm;