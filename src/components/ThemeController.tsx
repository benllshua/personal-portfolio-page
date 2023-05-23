'use client';

import { MouseEvent, useRef, useState } from 'react';

// components
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

import { Brightness4Outlined, Brightness7, Close, Flare, FormatPaint, Palette, Settings } from '@mui/icons-material';

// contexts
import { Box, Divider, Fab, Popover, Typography } from '@mui/material';
import { colors, useColorStore } from '../context/useColor';
import { useDarkModeStore } from '../context/useDarkMode';
import { useParticlesStore } from '../context/useParticlesMode';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    radioGroup: {
      margin: theme.spacing(1, 0),
    },
    speedDial: {
      position: 'fixed',
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    },
    colorContainer: {
      display: 'flex',
      width: 'fit-content',
    },
    colorSizeContainer: {
      overflow: 'auto',
      width: 300,

      '&::-webkit-scrollbar': {
        width: 5,
        height: 5,
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#B3AFB3',
        borderRadius: 30,
        border: `1px solid ${theme.palette.background.paper} `,
      },
      '&::-webkit-scrollbar-track': {
        background: theme.palette.background.paper,
        borderRadius: 0,
      },
    },
    colorFab: {
      transition: '0.3s',
      margin: theme.spacing(2),
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  })
);

const ThemeController = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const { mode, toggleDarkMode } = useDarkModeStore();
  const toggleParticlesMode = useParticlesStore((state) => state.toggleParticlesMode);
  const setColor = useColorStore((state) => state.setColor);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openColorMenu, setOpenColorMenu] = useState<undefined | HTMLElement>();
  const [openTranslationsMenu, setOpenTranslationsMenu] = useState<undefined | HTMLElement>();

  const handleCloseColorMenu = () => {
    setOpenColorMenu(undefined);
  };
  const handleOpenColorMenu = (e: MouseEvent<HTMLDivElement>) => {
    setOpenColorMenu(e.currentTarget);
  };

  const handleCloseTranslationsMenu = () => {
    setOpenTranslationsMenu(undefined);
  };
  const handleOpenTranslationsMenu = (e: MouseEvent<HTMLDivElement>) => {
    setOpenTranslationsMenu(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const darkModeToggler = () => {
    toggleDarkMode();
    handleClose();
  };
  const particalsModeToggler = () => {
    toggleParticlesMode();
    handleClose();
  };

  const actions = [
    {
      icon: <Palette />,
      name: 'Change Colors',
      onClick: handleOpenColorMenu,
    },
    {
      icon: mode === 'light' ? <Brightness4Outlined /> : <Brightness7 />,
      name: mode === 'light' ? 'Dark Mode' : 'Light Mode ',
      onClick: darkModeToggler,
    },
    {
      icon: <Flare />,
      name: 'Toggle Particals Effect',
      onClick: particalsModeToggler,
    },
    // {
    //   icon: <Translate />,
    //   name: 'Translations',
    //   onClick: handleOpenTranslationsMenu,
    // },
  ];

  return (
    <>
      <SpeedDial
        ariaLabel="Theme Controller"
        className={classes.speedDial}
        icon={<SpeedDialIcon icon={<Settings />} openIcon={<Close />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={'up'}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            icon={action.icon}
            onClick={action.onClick}
            open={true}
          />
        ))}
      </SpeedDial>
      <Popover
        open={Boolean(openColorMenu)}
        anchorEl={Boolean(openColorMenu) ? openColorMenu : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handleCloseColorMenu}
      >
        <Box p={3}>
          <Typography gutterBottom>Choose your color !</Typography>
          <Divider />
          <div
            ref={scrollContainer}
            className={classes.colorSizeContainer}
            onWheel={(e) => {
              e.preventDefault();
              const container = scrollContainer.current;
              if (container) {
                container.scrollTo({
                  top: 0,
                  left: container.scrollLeft + e.deltaY,
                  behavior: 'smooth', // if you want smooth scrolling
                });
              }
            }}
          >
            <div className={classes.colorContainer}>
              {colors.map((color) => (
                <Fab
                  size="medium"
                  className={classes.colorFab}
                  key={color.primary}
                  style={{ backgroundColor: color.primary }}
                  onClick={() => {
                    setColor(color);
                    handleCloseColorMenu();
                  }}
                >
                  <FormatPaint style={{ color: '#ffffffcc' }} />
                </Fab>
              ))}
            </div>
          </div>
        </Box>
      </Popover>
      {/* <Popover
        open={Boolean(openTranslationsMenu)}
        anchorEl={Boolean(openTranslationsMenu) ? openTranslationsMenu : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handleCloseTranslationsMenu}
      >
        <Box p={3}>
          <Typography gutterBottom>Choose your preferred language</Typography>
          <Divider />
          <Select
            sx={{ mt: 1 }}
            fullWidth
            value={activeLocale}
            onChange={(e) => {
              router.push({ pathname, query }, asPath, {
                locale: e.target.value as string,
              })
              handleCloseTranslationsMenu()
            }}
          >
            {locales?.map((language) => (
              <MenuItem value={language} key={language}>
                {language}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Popover> */}
    </>
  );
};
export default ThemeController;
