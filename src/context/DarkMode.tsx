import React from 'react';

const DarkModeContext = React.createContext({ toggleDarkMode: () => {} });

interface Props {
  children: React.ReactNode;
}

const DarkModeContextProvider = ({ children }: Props) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const darkMode = React.useMemo(
    () => ({
      toggleDarkMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  return (
    <DarkModeContext.Provider value={darkMode}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
