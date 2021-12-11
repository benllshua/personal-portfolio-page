import React from 'react';
import {
  Description,
  DescriptionOutlined,
  School,
  SchoolOutlined,
} from '@mui/icons-material';
const basicPath = '/images/certificates';
export const educationPlaces = [
  {
    title: 'Meir Shfeia',
    description: 'This page that youre watching right now',
    icon: <SchoolOutlined color="primary" />,
    hoveredIcon: <School color="primary" />,
    type: 'High School',
    imageList: [],
    startDate: '09/2015',
    endDate: '06/2020',
  },
  {
    title: 'Digital Operator',
    description: 'csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf',
    icon: <DescriptionOutlined color="primary" />,
    hoveredIcon: <Description color="primary" />,
    type: 'Certification',
    imageList: [],
    startDate: '09/2020',
    endDate: '12/2020',
  },
  {
    title: 'Google UX Design',
    description: 'csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf',
    icon: <DescriptionOutlined color="primary" />,
    hoveredIcon: <Description color="primary" />,
    type: 'Certification',
    imageList: [],
    startDate: '04/2021',
    endDate: '10/2021',
  },
  {
    title: 'The Open University Of Israel',
    description: 'csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf',
    icon: <SchoolOutlined color="primary" />,
    hoveredIcon: <School color="primary" />,
    type: 'University',
    imageList: [],
    startDate: '10/2021',
    endDate: 'not finished',
  },
  {
    title: 'React App Security',
    description: 'csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf',
    icon: <DescriptionOutlined color="primary" />,
    hoveredIcon: <Description color="primary" />,
    type: 'Certification',

    imageList: [{ imgFileName: `${basicPath}/ReactSecurity.png` }],
    startDate: '11/2021',
    endDate: '12/2021',
  },
];

export type Education = {
  title: string;
  description: string;
  icon: any;
  hoveredIcon: any;
  type: string;
  imageList: { label?: string; imgFileName: string }[];
  startDate: string;
  endDate: string;
};
