import { FC } from 'react';

import { motion } from 'framer-motion';

interface Props {
  delay?: number;
}

const SlideAndFade: FC<Props> = ({ children, delay = 0, ...other }) => {
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
