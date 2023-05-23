import { create } from 'zustand';

interface MessageStore {
  message: string;
  setMessage: (message: string) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  message: '',
  setMessage: (message) => {
    set(() => ({ message }));
  },
}));
