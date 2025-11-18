// src/utils/studentUtils.js

// This function would ideally fetch and parse markdown files from content/alunos
// In a real-world scenario with Netlify CMS, these files would be processed
// by a build step (e.g., Gatsby, Next.js, or a custom script) into a format
// that can be easily imported or fetched by the React app.

export const getStudents = async () => {
  // Simulate fetching data from markdown files
  // Each object in this array represents a student's data parsed from a .md file's front matter
  return [
    {
      id: 'joao-silva', // Corresponds to the slug in Netlify CMS
      name: 'João Silva',
      class: '1',
      grade: 85, // New field: grade
      activities: ['Post no Blog', 'Projeto de Agrofloresta'], // New field: activities
      proofs: [
        { type: 'image', url: '/uploads-provas/foto-projeto-joao.png', name: 'Foto do Projeto' },
        { type: 'pdf', url: '/uploads-provas/relatorio-joao.pdf', name: 'Relatório Final' },
      ],
    },
    {
      id: 'maria-oliveira',
      name: 'Maria Oliveira',
      class: '2',
      grade: 92,
      activities: ['Análise de Qualidade do Solo', 'Apresentação sobre Sustentabilidade'],
      proofs: [
        { type: 'image', url: '/uploads-provas/analise-solo-maria.png', name: 'Foto da Análise' },
      ],
    },
    {
      id: 'pedro-souza',
      name: 'Pedro Souza',
      class: '1',
      grade: 70,
      activities: ['Estudo sobre Agrotóxicos'],
      proofs: [
        { type: 'image', url: '/uploads-provas/artigo-agrotóxicos-pedro.png', name: 'Artigo Agrotóxicos' },
      ],
    },
    {
      id: 'ana-costa',
      name: 'Ana Costa',
      class: '3',
      grade: 95,
      activities: ['Desenvolvimento Sustentável', 'Participação em Evento'],
      proofs: [
        { type: 'image', url: '/uploads-provas/apresentacao-ana.png', name: 'Apresentação' },
      ],
    },
    {
      id: 'carlos-santos',
      name: 'Carlos Santos',
      class: '2',
      grade: 78,
      activities: ['Manejo de Pragas', 'Relatório de Campo'],
      proofs: [
        { type: 'image', url: '/uploads-provas/relatorio-campo-carlos.png', name: 'Relatório de Campo' },
      ],
    },
  ];
};
