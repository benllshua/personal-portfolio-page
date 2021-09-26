import React from 'react';

/* illustrations : 
https://storyset.com/illustration/kids-studying-from-home/bro

*/

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
interface Color {
  primary: string;
  background: string;
  lightGradient: string;
  darkGradient: string;
}
const colors = [
  {
    primary: '#58BFBF',
    background: '#F1FcFc',
    lightGradient: '#fff',
    darkGradient: '#000',
  },
  {
    primary: '#BA68C8',
    background: '#FCF2FF',
    lightGradient: '#fff',
    darkGradient: '#000',
  },
  {
    primary: '#039be5',
    background: '#e3f2fd',
    lightGradient: '#fff',
    darkGradient: '#000',
  },
  {
    primary: '#d81b60',
    background: '#fce4ec',
    lightGradient: '#fff',
    darkGradient: '#000',
  },
  {
    primary: '#FF725E',
    background: '#FFECE9',
    lightGradient: '#fff',
    darkGradient: '#000',
  },
  {
    primary: '#fdd835',
    background: '#fffde7',
    lightGradient: '#fffde7',
    darkGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%) !importent',
  },
];

const DarkModeContext = React.createContext({ toggleDarkMode: () => {} });
const GlassModeContext = React.createContext({ toggleGlassMode: () => {} });

const ColorContext = React.createContext({
  setColorMode: ({
    primary,
    background,
    lightGradient,
    darkGradient,
  }: Color) => {},
});

interface ThemeProps {
  children: React.ReactNode;
}
const Theme = ({ children }: ThemeProps) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [glassModeState, setGlassMode] = React.useState(false);
  const [color, setColor] = React.useState({
    primary: '#58BFBF',
    background: '#F1FcFc',
    lightGradient: '#fff',
    darkGradient: '#000',
  });

  const darkMode = React.useMemo(
    () => ({
      toggleDarkMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const glassMode = React.useMemo(
    () => ({
      toggleGlassMode: () => {
        setGlassMode((prevMode) => !prevMode);
      },
    }),
    []
  );

  const ColorMode = React.useMemo(
    () => ({
      setColorMode: ({
        primary,
        background,
        lightGradient,
        darkGradient,
      }: Color) => {
        setColor({
          primary,
          background,
          lightGradient,
          darkGradient,
        });
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,

          primary: {
            main: color.primary,
            contrastText: '#fff',
          },
          secondary: {
            main: '#3F5C77',
          },
          background: {
            default:
              mode === 'light'
                ? glassModeState
                  ? color.lightGradient
                  : color.background
                : glassModeState
                ? color.darkGradient
                : '#303030',
          },
        },
      }),
    [mode, glassModeState, color]
  );

  return (
    <DarkModeContext.Provider value={darkMode}>
      <GlassModeContext.Provider value={glassMode}>
        <ColorContext.Provider value={ColorMode}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorContext.Provider>
      </GlassModeContext.Provider>
    </DarkModeContext.Provider>
  );
};
export { DarkModeContext, GlassModeContext, ColorContext, colors };
export default Theme;
