'use client';

import { Container, useMediaQuery, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import About from '../components/sections/About';
import Landing from '../components/sections/Landing';

const Portfolio = dynamic(() => import('../components/sections/Portfolio'));
const Services = dynamic(() => import('../components/sections/Services'));
const Skills = dynamic(() => import('../components/sections/Skills'));
const ParticalsBackground = dynamic(() => import('../components/ParticalsBackground'));

export default function Page() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container maxWidth={isSmallScreen ? 'xs' : 'lg'}>
        <Landing />
        <Services />
        <About />
        <Skills />
        <Portfolio />
      </Container>
    </>
  );
}
