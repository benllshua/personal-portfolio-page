import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

type MessageContextType = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};

const MessageContext = createContext<MessageContextType>({ message: '', setMessage: () => {} });

const MessageContextProvider: FC = ({ children }) => {
  const [message, setMessage] = useState('');

  return <MessageContext.Provider value={{ message, setMessage }}>{children}</MessageContext.Provider>;
};
export { MessageContext };
export default MessageContextProvider;
