import { Description, DescriptionOutlined, School, SchoolOutlined } from '@mui/icons-material';

const basicPath = '/images/certificates';

export type EducationInfo = {
  title: string;
  description: string;
  icon: JSX.Element;
  hoveredIcon: JSX.Element;
  type: string;
  image: {
    src: string;
    label: string;
  };
  startDate: string;
  endDate: string;
};

export const educationPlaces: EducationInfo[] = [
  {
    title: 'Meir Shfeia',
    description:
      'A quality and inspiring educational institution, which directs its students to be valued and educated human beings, citizens who contribute to the state and are involved in Israeli society',
    icon: <SchoolOutlined color="primary" />,
    hoveredIcon: <School color="primary" />,
    type: 'High School',
    image: {
      src: `${basicPath}/`,
      label: '',
    },
    startDate: '09/2015',
    endDate: '06/2020',
  },
  {
    title: 'Digital Operator',
    description: 'A challenging, innovative role that requires independence, solidity, and fieldwork',
    icon: <DescriptionOutlined color="primary" />,
    hoveredIcon: <Description color="primary" />,
    type: 'Certification',
    image: {
      src: `${basicPath}/`,
      label: '',
    },
    startDate: '09/2020',
    endDate: '12/2020',
  },
  {
    title: 'Google UX Design',
    description:
      'User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.',
    icon: <DescriptionOutlined color="primary" />,
    hoveredIcon: <Description color="primary" />,
    type: 'Certification',
    image: {
      src: `${basicPath}/`,
      label: '',
    },
    startDate: '04/2021',
    endDate: '10/2021',
  },
  {
    title: 'The Open University Of Israel',
    description:
      'The Open University combines studies at a high and meticulous academic level with the pursuit of scientific and research excellence, all while giving all those who wish to study there without any admission requirements.',
    icon: <SchoolOutlined color="primary" />,
    hoveredIcon: <School color="primary" />,
    type: 'University',
    image: {
      src: `${basicPath}/`,
      label: '',
    },
    startDate: '10/2021',
    endDate: 'not finished',
  },
  {
    title: 'React App Security',
    description: 'Application Security and Secure Coding Trainig',
    icon: <DescriptionOutlined color="primary" />,
    hoveredIcon: <Description color="primary" />,
    type: 'Certification',

    image: { src: `${basicPath}/ReactSecurity.png`, label: 'react security certificate' },
    startDate: '11/2021',
    endDate: '12/2021',
  },
];
