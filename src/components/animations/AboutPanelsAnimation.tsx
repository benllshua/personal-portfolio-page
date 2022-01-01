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
        out: { x: 500, opacity: 0, zIndex: -1 },
        in: { x: 0, opacity: 1, zIndex: 0 },
      }}
      animate={status}
      transition={{ duration: 0.5 }}
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
