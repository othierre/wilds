// src/utils/studentUtils.js

// This function attempts to fetch student data from a generated JSON file.
// In a production environment with Netlify CMS, a build process would
// read markdown files from 'content/alunos' and generate 'public/students.json'.
// If the JSON file is not found (e.g., in development without a build step),
// it falls back to hardcoded data for demonstration.

export const getStudents = async () => {
  try {
    const response = await fetch('/students.json');
    if (response.ok) {
      const students = await response.json();
      // Ensure 'activities' and 'proofs' are arrays, as they might be single strings or null from JSON
      return students.map(student => ({
        ...student,
        activities: Array.isArray(student.activities) ? student.activities : (student.activities ? [student.activities] : []),
        proofs: Array.isArray(student.proofs) ? student.proofs : (student.proofs ? [student.proofs] : []),
      }));
    }
  } catch (error) {
    console.warn("Could not fetch students.json, falling back to hardcoded data:", error);
  }

  // Fallback to hardcoded data if students.json is not available or fetch fails
  return [
    {
      id: 'joao-silva',
      name: 'João Silva',
      class: '1',
      grade: 85,
      activities: ['Post no Blog', 'Projeto de Agrofloresta'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/foto-projeto-joao.png', name: 'Foto do Projeto' },
        { type: 'pdf', url: '/uploads/uploads-provas/relatorio-joao.pdf', name: 'Relatório Final' },
      ],
    },
    {
      id: 'maria-oliveira',
      name: 'Maria Oliveira',
      class: '2',
      grade: 92,
      activities: ['Análise de Qualidade do Solo', 'Apresentação sobre Sustentabilidade'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/analise-solo-maria.png', name: 'Foto da Análise' },
      ],
    },
    {
      id: 'pedro-souza',
      name: 'Pedro Souza',
      class: '1',
      grade: 70,
      activities: ['Estudo sobre Agrotóxicos'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/artigo-agrotóxicos-pedro.png', name: 'Artigo Agrotóxicos' },
      ],
    },
    {
      id: 'ana-costa',
      name: 'Ana Costa',
      class: '3',
      grade: 95,
      activities: ['Desenvolvimento Sustentável', 'Participação em Evento'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/apresentacao-ana.png', name: 'Apresentação' },
      ],
    },
    {
      id: 'carlos-santos',
      name: 'Carlos Santos',
      class: '2',
      grade: 78,
      activities: ['Manejo de Pragas', 'Relatório de Campo'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/relatorio-campo-carlos.png', name: 'Relatório de Campo' },
      ],
    },
  ];
};

export const updateStudent = async (studentId, percentage, completedActivities) => {
  try {
    const response = await fetch('/.netlify/functions/update-student-percentage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentId, percentage, completedActivities }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update student data');
    }

    return { success: true, message: 'Student data updated successfully!' };
  } catch (error) {
    console.error('Error updating student data:', error);
    return { success: false, message: error.message || 'An unexpected error occurred.' };
  }
};