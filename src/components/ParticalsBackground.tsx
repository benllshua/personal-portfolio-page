import { useTheme } from '@mui/material';
import React from 'react';
import Particals from 'react-tsparticles';
import { useMediaQuery } from '../hooks/useMediaQuery';

const ParticalsBackground = () => {
  const theme = useTheme();
  const color = theme.palette.mode === 'light' ? '#aaa' : theme.palette.primary.main;
  const isBreakpoint = useMediaQuery(900);

  return (
    <Particals
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
