// section = 'FRONTEND' | 'BSCKEND' | 'UX' | 'MANAGEMENT'
const basicPath = '/images/projects';
const FRONTENDProjects = [
  {
    title: 'Octo - Task',
    description:
      'OctoTask is a web-based system application I built for the IDF to transfer & share crucial data efficiently and understandably. The goal is to reduce work from workers & supervisors and reduce their mistake potential',
    mainImg: `${basicPath}/OctoTask.png`,
    imageList: [
      { label: 'All data is classified as this is a secret project', imgFileName: `${basicPath}/OctoTask.png` },
    ],
    tags: ['React', 'TS', 'GraphQL', 'Apollo Client', 'MUI', 'Socket.io', 'ESLint & Prettier', 'Docker'],
    githubLink: '',
  },

  {
    title: 'Moreshet - Patzan',
    description: 'A public website we build for the North Command',
    mainImg: `${basicPath}/NotFound.png`,
    imageList: [{ imgFileName: `${basicPath}/NotFound.png` }],
    tags: ['HTML', 'CSS (SCSS)', 'Javascript', 'Bootstrap', 'Django', 'Jquery'],
    githubLink: '',
  },
  {
    title: 'Hanabi Helper',
    description:
      'As I\'ve mentioned, I like board games. When I lost pieces of "Hanabi" - a Chinese card game, I made an app that replaces those pieces and helped the game run smoother.',
    mainImg: `${basicPath}/HanabiHelper.png`,
    imageList: [{ imgFileName: `${basicPath}/HanabiHelper.png` }],
    tags: ['Xamarin', 'C#', 'XML'],
    githubLink: '',
  },
  {
    title: 'Wine Site',
    description:
      'One of my earliest projects was creating a wine shopping site, It was a learning project to explore the capabilities of only CSS & HTML with almost no JS',
    mainImg: `${basicPath}/wineSiteThumb.png`,
    imageList: [
      { label: 'string', imgFileName: `${basicPath}/wineSite1.png` },
      { label: 'string2', imgFileName: `${basicPath}/wineSite1.png` },
      { imgFileName: `${basicPath}/wineSite1.png` },
    ],
    tags: ['HTML', 'CSS (SCSS)', 'JS', 'Fontawesome'],
    githubLink: '',
  },
];

const UXProjects = [
  {
    title: 'My portfolio page',
    description: 'This page that youre watching right now',
    mainImg: `${basicPath}/NotFound.png`,
    imageList: [],
    tags: [],
    githubLink: '',
  },
  {
    title: 'The Gaurdian',
    description: 'IDF project - classified',
    mainImg: `${basicPath}/NotFound.png`,
    imageList: [],
    tags: [],
    githubLink: '',
  },
  {
    title: 'Dine',
    description: 'A bill split app Idea, became a personal project - never excuted',
    mainImg: `${basicPath}/Dine.png`,
    imageList: [{ imgFileName: `${basicPath}/Dine.png` }],
    tags: [],
    githubLink: '',
  },
];

export { UXProjects, FRONTENDProjects };
