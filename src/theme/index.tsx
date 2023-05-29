'use client';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FC, useEffect, useMemo } from 'react';
import { useColorStore } from '../context/useColor';
import { useDarkModeStore } from '../context/useDarkMode';

type Props = {
  children?: React.ReactNode;
};

const Theme: FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const color = useColorStore((state) => state.color);
  const { mode, setMode } = useDarkModeStore();
  const rtl = false;

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode, setMode]);

  const theme = useMemo(
    () =>
      createTheme({
        direction: rtl ? 'rtl' : 'ltr',
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
    [mode, color, rtl]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
