'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import Particals from 'react-tsparticles';

const ParticalsBackground = () => {
  const theme = useTheme();
  const color = theme.palette.mode === 'light' ? '#aaa' : theme.palette.primary.main;
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));

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
            value: bigScreen ? 70 : 10,
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
