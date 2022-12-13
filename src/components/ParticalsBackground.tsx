import { useTheme } from '@mui/material';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { useMediaQuery } from '../hooks/useMediaQuery';

const ParticalsBackground = () => {
  const theme = useTheme();
  const color = theme.palette.mode === 'light' ? '#aaa' : theme.palette.primary.main;
  const isBreakpoint = useMediaQuery(900);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      // @ts-ignore
      loaded={particlesLoaded}
      // @ts-ignore
      init={particlesInit}
      options={{
        background: {
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        backgroundMask: {
          cover: {
            color: {
              value: color,
            },
            opacity: 0.4,
          },
        },

        fullScreen: {
          zIndex: -1,
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repolse',
            },
          },
        },
        particles: {
          opacity: { value: 0.4 },
          number: {
            value: isBreakpoint ? 10 : 70,
          },
          color: {
            value: color,
          },
          links: {
            opacity: 0.4,

            color: {
              value: color,
            },
            distance: 150,
            enable: true,
          },
          move: {
            enable: true,
          },
          size: {
            value: 1,
          },
        },
      }}
    />
  );
};

export default ParticalsBackground;
