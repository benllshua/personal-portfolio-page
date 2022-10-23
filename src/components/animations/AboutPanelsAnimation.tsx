import { motion } from 'framer-motion';
import { FC } from 'react';

interface Props {
  status: 'in' | 'out';
}

const AboutPanelsAnimation: FC<Props> = ({ children, status }) => {
  return (
    <motion.div
      variants={{
        out: {
          x: 1000,
          // scale: 0,
          height: 0,
          transition: {
            duration: 0.5,
          },
        },
        in: {
          x: 0,
          // scale: 1,
          height: 'fit-content',
          transition: {
            duration: 0.5,
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
