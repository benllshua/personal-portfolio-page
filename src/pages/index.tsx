import React, { useContext } from 'react';

// components
import Landing from '../components/sections/Landing';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ThemeController from '../components/ThemeController';
import Portfolio from '../components/sections/Portfolio';
import Footer from '../components/Footer';
import ParticalsBackground from '../components/ParticalsBackground';
import { ParticalsModeContext } from '../themes/theme';
import { Container } from '@mui/material';

/**
 * Main page component
 * @return {JSX.Element} : The JSX for the Main page
 */
export default function Index() {
  const particalsMode = useContext(ParticalsModeContext);
  return (
    <>
      {particalsMode.mode && <ParticalsBackground />}
      <ThemeController />
      <SocialMediaLinks />

      <Container>
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
