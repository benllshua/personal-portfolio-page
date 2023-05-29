'use client';

import { FC, ReactNode } from 'react';
import { motion } from './motion';

interface Props {
  status: 'in' | 'out';
  children?: ReactNode;
}

const AboutPanelsAnimation: FC<Props> = ({ children, status }) => {
  return (
    <motion.div
      variants={{
        out: {
          x: 1000,
          // scale: 0,
          height: 0,
          opacity: 0,
          transition: {
            duration: 0.7,
          },
        },
        in: {
          x: 0,
          opacity: 1,
          // scale: 1,
          height: 'fit-content',
          transition: {
            duration: 0.7,
            delay: 0.4,
          },
        },
      }}
      animate={status}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};

export default AboutPanelsAnimation;
