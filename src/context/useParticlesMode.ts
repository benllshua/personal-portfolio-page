'use client';

import { create } from 'zustand';

interface ParticlesStore {
  mode: boolean;
  setMode: (mode: boolean) => void;
  toggleParticlesMode: () => void;
}

export const useParticlesStore = create<ParticlesStore>((set) => ({
  mode: true,
  setMode: (mode) => {
    set(() => ({ mode }));
  },
  toggleParticlesMode: () => {
    set((state) => ({ mode: !state.mode }));
  },
}));
