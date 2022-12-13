import { FC, Suspense, useContext } from 'react';

// components
import { Container } from '@mui/material';
import { ParticalsModeContext } from '../themes/theme';
const ParticalsBackground = dynamic(() => import('../components/ParticalsBackground'), {
  suspense: true,
});

// sections
import Landing from '../components/sections/Landing';

import SocialMediaLinks from '../components/SocialMediaLinks';
import ThemeController from '../components/ThemeController';

import Footer from '../components/Footer';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';

// hooks
import dynamic from 'next/dynamic';
import Message from '../components/Message';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Index: FC = () => {
  const particalsMode = useContext(ParticalsModeContext);

  const isBreakpoint = useMediaQuery(900);

  return (
    <>
      {particalsMode.mode && (
        <Suspense fallback={``}>
          <ParticalsBackground />
        </Suspense>
      )}
      {!isBreakpoint && <SocialMediaLinks />}

      <Container maxWidth={isBreakpoint ? 'xs' : 'lg'}>
        <Landing />
        <Services />
        <About />
        <Skills />
        <Portfolio />
      </Container>
      <ThemeController />
      <Message />

      <Footer />
    </>
  );
};

export default Index;
