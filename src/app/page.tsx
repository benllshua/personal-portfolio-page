'use client';

import Theme from '@/theme';
import { Container, CssBaseline, NoSsr, useMediaQuery, useTheme } from '@mui/material';
import Footer from '../components/Footer';
import ParticalsBackground from '../components/ParticalsBackground';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ThemeController from '../components/ThemeController';
import About from '../components/sections/About';
import Landing from '../components/sections/Landing';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import { useParticlesStore } from '../context/useParticlesMode';

export default function Page() {
  const particalsMode = useParticlesStore((state) => state.mode);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Theme>
      <CssBaseline />
      {particalsMode && <ParticalsBackground />}
      {!isSmallScreen && (
        <NoSsr>
          <SocialMediaLinks />
        </NoSsr>
      )}

      <Container maxWidth={isSmallScreen ? 'xs' : 'lg'}>
        <Landing />
        <Services />
        <About />
        <Skills />
        <Portfolio />
      </Container>
      <ThemeController />

      <Footer />
    </Theme>
  );
}
