import { Snackbar } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import { useContext } from 'react';
import { MessageContext } from '../context/MessageContext';

type TransitionProps = Omit<SlideProps, 'direction'>;

const TransitionLeft = (props: TransitionProps) => {
  return <Slide {...props} direction="left" />;
};

const Message = () => {
  const { message, setMessage } = useContext(MessageContext);

  return (
    <Snackbar
      open={Boolean(message)}
      onClose={() => setMessage('')}
      TransitionComponent={TransitionLeft}
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      message={message}
    />
  );
};

export default Message;
