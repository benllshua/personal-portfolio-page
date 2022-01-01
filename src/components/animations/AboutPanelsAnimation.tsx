import React from 'react';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  status: 'in' | 'out';
}

const AboutPanelsAnimation = ({ children, status }: Props) => {
  return (
    <motion.div
      variants={{
        out: {
          x: 500,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        in: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.4,
          },
        },
      }}
      animate={status}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AboutPanelsAnimation;
