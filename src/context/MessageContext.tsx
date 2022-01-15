import React, { useState, createContext, Dispatch, SetStateAction, ReactNode } from 'react';

type MessageContextType = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};

const MessageContext = createContext<MessageContextType>({ message: '', setMessage: () => {} });

interface MessageContextProviderProps {
  children: ReactNode;
}
const MessageContextProvider = ({ children }: MessageContextProviderProps) => {
  const [message, setMessage] = useState('');

  return <MessageContext.Provider value={{ message, setMessage }}>{children}</MessageContext.Provider>;
};
export { MessageContext };
export default MessageContextProvider;
