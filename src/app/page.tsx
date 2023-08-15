'use client';

import Message from '@/components/Message';
import Theme from '@/theme';
import { Container, CssBaseline, NoSsr, useMediaQuery, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ThemeController from '../components/ThemeController';
import About from '../components/sections/About';
import Landing from '../components/sections/Landing';
import { useParticlesStore } from '../context/useParticlesMode';

const Portfolio = dynamic(() => import('../components/sections/Portfolio'));
const Services = dynamic(() => import('../components/sections/Services'));
const Skills = dynamic(() => import('../components/sections/Skills'));
const ParticalsBackground = dynamic(() => import('../components/ParticalsBackground'));

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
      <Message />

      <Footer />
    </Theme>
  );
}
