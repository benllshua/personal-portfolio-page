const basicPath = '/images/projects';

export type Project = {
  title: string;
  description: string;
  mainImg: string;
  imageList: { imgFileName: string; label: string }[];
  tags: string[];
  githubLink: string;
};

const Projects: Project[] = [
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
    imageList: [{ imgFileName: `${basicPath}/NotFound.png`, label: 'project main screen' }],
    tags: ['HTML', 'CSS (SCSS)', 'Javascript', 'Bootstrap', 'Django', 'Jquery'],
    githubLink: '',
  },
  {
    title: 'Hanabi Helper',
    description:
      'As I\'ve mentioned, I like board games. When I lost pieces of "Hanabi" - a Chinese card game, I made an app that replaces those pieces and helped the game run smoother.',
    mainImg: `${basicPath}/HanabiHelper.png`,
    imageList: [{ imgFileName: `${basicPath}/HanabiHelper.png`, label: 'main poster image' }],
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
      { imgFileName: `${basicPath}/wineSite1.png`, label: 'poster image' },
    ],
    tags: ['HTML', 'CSS (SCSS)', 'JS', 'Fontawesome'],
    githubLink: '',
  },
];

export { Projects };
