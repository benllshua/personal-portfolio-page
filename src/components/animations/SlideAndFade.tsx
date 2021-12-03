import React from 'react';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

const SlideAndFade = ({ children, delay = 0 }: Props) => {
  const baseDelay = 0.3;
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay + baseDelay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideAndFade;
