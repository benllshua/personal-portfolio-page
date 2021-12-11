import React, { useContext } from 'react';

// components
import ParticalsBackground from '../components/ParticalsBackground';
import { ParticalsModeContext } from '../themes/theme';
import { Container } from '@mui/material';

// sections
import Landing from '../components/sections/Landing';
import dynamic from 'next/dynamic';

const SocialMediaLinks = dynamic(
  () => import('../components/SocialMediaLinks')
);
const ThemeController = dynamic(() => import('../components/ThemeController'));

const Services = dynamic(() => import('../components/sections/Services'), {
  loading: () => <p>...</p>,
});
const About = dynamic(() => import('../components/sections/About'), {
  loading: () => <p>...</p>,
});
const Skills = dynamic(() => import('../components/sections/Skills'), {
  loading: () => <p>...</p>,
});
const Portfolio = dynamic(() => import('../components/sections/Portfolio'), {
  loading: () => <p>...</p>,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <p>...</p>,
});

// hooks
import { useMediaQuery } from '../hooks/useMediaQuery';

/**
 * Main page component
 * @return {JSX.Element} : The JSX for the Main page
 */
export default function Index() {
  const particalsMode = useContext(ParticalsModeContext);

  const isBreakpoint = useMediaQuery(900);

  return (
    <>
      {particalsMode.mode && <ParticalsBackground />}
      <ThemeController />
      <SocialMediaLinks />

      <Container maxWidth={isBreakpoint ? 'xs' : 'lg'}>
        <Landing />
        <Services />
        <About />
        <Skills />
        <Portfolio />
      </Container>

      <Footer />
    </>
  );
}
