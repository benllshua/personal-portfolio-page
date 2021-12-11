import React, { useState, useMemo, createContext, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
interface Color {
  primary: string;
  background: string;
  folderName: string;
}
const colors = [
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

const DarkModeContext = createContext({
  toggleDarkMode: () => {},
  mode: 'light',
});
const ParticalsModeContext = createContext({
  toggleParticalsMode: () => {},
  mode: true,
});

const ColorContext = createContext({
  setColorMode: ({ primary, background }: Color) => {},
  getColor: (): Color | null => {
    return null;
  },
});

interface ThemeProps {
  children: React.ReactNode;
}
const Theme = ({ children }: ThemeProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  );
  const [particalsModeState, setParticalsMode] = useState(true);
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const darkMode = useMemo(
    () => ({
      toggleDarkMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode: mode,
    }),
    [mode]
  );

  const particalsMode = useMemo(
    () => ({
      toggleParticalsMode: () => {
        setParticalsMode((prevMode) => !prevMode);
      },
      mode: particalsModeState,
    }),
    [particalsModeState]
  );

  const ColorMode = useMemo(
    () => ({
      setColorMode: ({ primary, background, folderName }: Color) => {
        setColor({
          primary,
          background,
          folderName,
        });
      },
      getColor: (): Color => {
        return color;
      },
    }),
    [color]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,

          primary: {
            main: color.primary,
            contrastText: '#fff',
          },
          secondary: {
            main: '#3F5C77',
          },
          background: {
            default: mode === 'light' ? color.background : '#222',
          },
        },
      }),
    [mode, particalsModeState, color]
  );

  return (
    <DarkModeContext.Provider value={darkMode}>
      <ParticalsModeContext.Provider value={particalsMode}>
        <ColorContext.Provider value={ColorMode}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorContext.Provider>
      </ParticalsModeContext.Provider>
    </DarkModeContext.Provider>
  );
};
export { DarkModeContext, ParticalsModeContext, ColorContext, colors };
export default Theme;
