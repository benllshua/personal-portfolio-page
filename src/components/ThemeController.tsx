import React, { MouseEvent, useRef, useState, useContext } from 'react';

// components
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

// styles
import { Theme, useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

import {
  Brightness4Outlined,
  Brightness7,
  Close,
  Flare,
  FormatPaint,
  Palette,
  Settings,
} from '@mui/icons-material';

// contexts
import {
  DarkModeContext,
  colors,
  ParticalsModeContext,
  ColorContext,
} from '../themes/theme';
import { Box, Divider, Fab, Popover, Typography } from '@mui/material';

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

  const darkMode = useContext(DarkModeContext);
  const particalsMode = useContext(ParticalsModeContext);
  const colorMode = useContext(ColorContext);
  const theme = useTheme();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openColorMenu, setOpenColorMenu] = useState<undefined | HTMLElement>();

  const handleCloseColorMenu = () => {
    setOpenColorMenu(undefined);
  };
  const handleOpenColorMenu = (e: MouseEvent<HTMLDivElement>) => {
    setOpenColorMenu(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const darkModeToggler = () => {
    darkMode.toggleDarkMode();
    handleClose();
  };
  const particalsModeToggler = () => {
    particalsMode.toggleParticalsMode();
    handleClose();
  };

  const actions = [
    {
      icon: <Palette />,
      name: 'Change Colors',
      onClick: handleOpenColorMenu,
    },
    {
      icon:
        theme.palette.mode === 'light' ? (
          <Brightness4Outlined />
        ) : (
          <Brightness7 />
        ),
      name: theme.palette.mode === 'light' ? 'Dark Mode' : 'Light Mode ',
      onClick: darkModeToggler,
    },
    {
      icon: <Flare />,
      name: 'Toggle Particals Effect',
      onClick: particalsModeToggler,
    },
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
                    colorMode.setColorMode(color);
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
    </>
  );
};
export default ThemeController;
