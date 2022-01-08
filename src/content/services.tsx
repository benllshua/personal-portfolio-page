export const services = [
  {
    name: 'Front-End Development',
    description:
      'As a front-end developer, I build interactive platforms such as websites, apps, and software using different technologies. And depending on the product, also connect it to an API, a Middleware, or 3rd party technologies.',
    imgSrc: 'FrontEnd.png',
    tags: [
      'UI Development',
      'User Interaction',
      'SEO',
      'Performance',
      'Knowledge in technologies',
      'Accessibility',
      'Deployment',
      'Responsive Design',
    ],
  },
  {
    name: 'Back-End Development',
    description:
      'Back-end Development refers to server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scene activities that occur when performing any action on a website. It can be an account login or purchasing from an online store. Code written by back-end developers helps browsers to communicate with database information. - guru99',
    imgSrc: 'BackEnd.png',
    tags: [
      'API building',
      'Middleweres',
      'Authentication',
      'DB connection',
      'Security',
      'Request Handling',
      'Web Sockets',
      'Web RTC',
      'Cache management',
      'UML design',
    ],
  },
  {
    name: 'UX Design',
    description:
      'User experience (UX) designers focus on the experience that users have while using products like websites, apps, and physical objects. UX designers make those everyday interactions useful, enjoyable, and accessible. The role of an entry-level UX designer might include coming up with ideas to address user problems, conducting research with users, and designing wireframes, mockups, and prototypes. - Google UX Design course',
    imgSrc: 'UX.png',
    tags: [
      'UX Research',
      'Information Architecture',
      'Wireframing',
      'Visual Communication',
      'Prototyping',
      'Usability Testing',
      'Mockups',
    ],
  },
  {
    name: 'Product Management',
    description:
      'Project management is the process of combining systems, techniques, and knowledge to complete a project within the established goals on time, budget, and scope. Every project has to manage four basic constraints; scope, schedule, budget, and quality.',
    imgSrc: 'TeamManagment.png',
    tags: [
      'Effective Communication',
      'Negotiation',
      'Scheduling and Time Management',
      'Leadership',
      'Technical Expertise',
      'Risk Management',
      'Critical Thinking',
      'Problem Solving',
    ],
  },
];

export type serviceType = {
  name: string;
  description: string;
  imgSrc: string;
  tags: string[];
};
