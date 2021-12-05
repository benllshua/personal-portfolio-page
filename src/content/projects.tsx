// section = 'FRONTEND' | 'BSCKEND' | 'UX' | 'MANAGEMENT'
const basicPath = '/images/projects';
const FRONTENDProjects = [
  {
    title: 'Wine Site',
    description:
      'One of my earliest projects was creating a wine shopping site, It was a learning project to explore the capabilities of only CSS & HTML with almost no JS',
    mainImg: `${basicPath}/wineSite1.png`,
    imageList: [
      { label: 'string', imgFileName: `${basicPath}/wineSite1.png` },
      { label: 'string2', imgFileName: `${basicPath}/wineSite1.png` },
      { imgFileName: `${basicPath}/wineSite1.png` },
    ],
    tags: ['HTML', 'CSS (SCSS)', 'JS', 'Fontawesome'],
    githubLink: '',
  },
  {
    title: 'Octo - Task',
    description:
      'OctoTask is a web-based system application I built for the IDF to transfer & share crucial data efficiently and understandably. The goal is to reduce work from workers & supervisors and reduce their mistake potential',
    mainImg: `${basicPath}/wineSite1.png`,
    imageList: [],
    tags: [
      'React',
      'TS',
      'GraphQL',
      'Apollo Client',
      'MUI',
      'Socket.io',
      'ESLint & Prettier',
      'Docker',
    ],
    githubLink: '',
  },
  {
    title: 'My portfolio page',
    description: 'This page that youre watching right now',
    mainImg: `${basicPath}/wineSite1.png`,
    imageList: [],
    tags: ['React', 'Next.js', 'TS', 'MUI', 'ESLint, Linter & Prettier'],
    githubLink: '',
  },
];

const UXProjects = [
  {
    title: 'My portfolio page',
    description: 'This page that youre watching right now',
    mainImg: `${basicPath}/wineSite1.png`,
    imageList: [],
    tags: ['React', 'Next.js', 'TS', 'MUI', 'ESLint, Linter & Prettier'],
    githubLink: '',
  },
];

export { UXProjects, FRONTENDProjects };
