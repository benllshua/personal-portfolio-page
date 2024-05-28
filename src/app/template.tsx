'use client';
import ParticalsBackground from '@/components/ParticalsBackground';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import ThemeController from '@/components/ThemeController';
import { useParticlesStore } from '@/context/useParticlesMode';
import { CssBaseline, NoSsr, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Template({ children }: Props) {
  const theme = useTheme();
  const particalsMode = useParticlesStore((state) => state.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <CssBaseline />
      {particalsMode && <ParticalsBackground />}
      {!isSmallScreen && (
        <NoSsr>
          <SocialMediaLinks />
        </NoSsr>
      )}
      {children}
      <ThemeController />
    </>
  );
}
