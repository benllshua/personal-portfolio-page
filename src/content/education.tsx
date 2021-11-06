import React from 'react';
import { Description, School, Verified } from '@mui/icons-material';
const basicPath = '/images/certificates';
const educationPlaces = [
  {
    title: 'Meir Shfeia',
    description: 'This page that youre watching right now',
    type: 'High School',
    imageList: [],
    startDate: '09/2015',
    endDate: '06/2020',
  },
  {
    title: 'Digital Operator',
    description: 'csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf',
    type: 'Certification',
    imageList: [],
    startDate: '09/2020',
    endDate: '12/2020',
  },
  {
    title: 'Google UX Design',
    description: 'csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf',
    type: 'Certification',
    imageList: [],
    startDate: '04/2021',
    endDate: '10/2021',
  },
  {
    title: 'The Open University Of Israel',
    description: 'csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf',
    type: 'University',
    imageList: [],
    startDate: '10/2021',
    endDate: 'not finished',
  },
  {
    title: 'React App Security',
    description: 'csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf',
    type: 'Certification',
    imageList: [{ imgFileName: `${basicPath}/ReactSecurity.png` }],
    startDate: '11/2021',
    endDate: '12/2021',
  },
];

const iconDictionary = {
  Certification: <Description color="primary" />,
  'High School': <School color="primary" />,
  University: <School color="primary" />,
  Verification: <Verified color="primary" />,
};

export { educationPlaces, iconDictionary };
