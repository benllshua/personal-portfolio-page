import { create } from 'zustand';

interface Color {
  primary: string;
  background: string;
  folderName: string;
}

export const colors: Color[] = [
  {
    primary: '#58BFBF',
    background: '#F1FcFc',
    folderName: 'till',
  },
  {
    primary: '#039be5',
    background: '#e3f2fd',
    folderName: 'blue',
  },
  {
    primary: '#BA68C8',
    background: '#FCF2FF',
    folderName: 'purple',
  },
  {
    primary: '#f83b80',
    background: '#fce4ec',
    folderName: 'pink',
  },
  {
    primary: '#FF725E',
    background: '#FFECE9',
    folderName: 'orange',
  },
  {
    primary: '#FDD212',
    background: '#fffde7',
    folderName: 'yellow',
  },
  {
    primary: '#aaa',
    background: '#fff',
    folderName: 'grey',
  },
];

interface ColorStore {
  color: Color;
  setColor: (color: Color) => void;
}

export const useColorStore = create<ColorStore>((set) => ({
  color: colors[0],
  setColor: (color) => {
    set(() => ({ color }));
  },
}));
