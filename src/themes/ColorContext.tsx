import React from 'react';

interface Color {
  primary: string;
  background: string;
  lightGradient: string;
  darkGradient: string;
  folderName: string;
}
const colors = [
  {
    primary: '#58BFBF',
    background: '#F1FcFc',
    lightGradient: '#fff',
    darkGradient: '#000',
    folderName: 'till',
  },
  {
    primary: '#039be5',
    background: '#e3f2fd',
    lightGradient: '#fff',
    darkGradient: '#000',
    folderName: 'blue',
  },
  {
    primary: '#BA68C8',
    background: '#FCF2FF',
    lightGradient: '#fff',
    darkGradient: '#000',
    folderName: 'purple',
  },
  {
    primary: '#f83b80',
    background: '#fce4ec',
    lightGradient: '#fff',
    darkGradient: '#000',
    folderName: 'pink',
  },
  {
    primary: '#FF725E',
    background: '#FFECE9',
    lightGradient: '#fff',
    darkGradient: '#000',
    folderName: 'orange',
  },
  {
    primary: '#fdd835',
    background: '#fffde7',
    lightGradient: '#fffde7',
    darkGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%) !importent',
    folderName: 'yellow',
  },
  {
    primary: '#aaa',
    background: '#fff',
    lightGradient: '#fff',
    darkGradient: '#000',
    folderName: 'grey',
  },
];

const ColorContext = React.createContext({
  setColorMode: ({
    primary,
    background,
    lightGradient,
    darkGradient,
  }: Color) => {},
  getColor: (): Color | null => {
    return null;
  },
});

interface ColorContextProps {
  children: React.ReactNode;
}

function ColorContextProvider({ children }: ColorContextProps) {
  const [color, setColor] = React.useState(colors[0]);

  const ColorMode = React.useMemo(
    () => ({
      setColorMode: ({
        primary,
        background,
        lightGradient,
        darkGradient,
        folderName,
      }: Color) => {
        setColor({
          primary,
          background,
          lightGradient,
          darkGradient,
          folderName,
        });
      },
      getColor: (): Color => {
        return color;
      },
    }),
    [color]
  );

  return <ColorContext.Provider value={ColorMode}></ColorContext.Provider>;
}

export default ColorContextProvider;
export { ColorContext };
