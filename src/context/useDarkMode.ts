'use client';

import { create } from 'zustand';

type Mode = 'dark' | 'light';

interface DarkModeStore {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  mode: 'light',
  setMode: (mode) => {
    set(() => ({ mode }));
  },
  toggleDarkMode: () => {
    set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' }));
  },
}));
