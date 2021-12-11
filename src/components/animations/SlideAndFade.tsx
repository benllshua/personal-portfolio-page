import React from 'react';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

const SlideAndFade = ({ children, delay = 0, ...other }: Props) => {
  const baseDelay = 0.3;
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 200, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: delay + baseDelay,
        bounce: 0.3,
        type: 'spring',
      }}
      {...other}
    >
      {children}
    </motion.div>
  );
};

export default SlideAndFade;
