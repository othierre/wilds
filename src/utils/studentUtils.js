// src/utils/studentUtils.js

// This function provides hardcoded student data for demonstration purposes.
// In a production environment with Netlify CMS, this data would typically be
// generated during a build process (e.g., by a static site generator)
// from markdown files in 'content/alunos' and then imported or fetched.

export const getStudents = async () => {
  return [
    {
      id: 'joao-silva',
      name: 'João Silva',
      class: '1', // Added class field
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
      class: '2', // Added class field
      grade: 92,
      activities: ['Análise de Qualidade do Solo', 'Apresentação sobre Sustentabilidade'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/analise-solo-maria.png', name: 'Foto da Análise' },
      ],
    },
    {
      id: 'pedro-souza',
      name: 'Pedro Souza',
      class: '1', // Added class field
      grade: 70,
      activities: ['Estudo sobre Agrotóxicos'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/artigo-agrotóxicos-pedro.png', name: 'Artigo Agrotóxicos' },
      ],
    },
    {
      id: 'ana-costa',
      name: 'Ana Costa',
      class: '3', // Added class field
      grade: 95,
      activities: ['Desenvolvimento Sustentável', 'Participação em Evento'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/apresentacao-ana.png', name: 'Apresentação' },
      ],
    },
    {
      id: 'carlos-santos',
      name: 'Carlos Santos',
      class: '2', // Added class field
      grade: 78,
      activities: ['Manejo de Pragas', 'Relatório de Campo'],
      proofs: [
        { type: 'image', url: '/uploads/uploads-provas/relatorio-campo-carlos.png', name: 'Relatório de Campo' },
      ],
    },
  ];
};