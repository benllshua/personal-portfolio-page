import React from 'react';

// components
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';

// styles
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import {
  Brightness4Outlined,
  Brightness7,
  Close,
  InvertColors,
  Palette,
  StyleOutlined,
} from '@material-ui/icons';

// contexts
import {
  DarkModeContext,
  colors,
  GlassModeContext,
  ColorContext,
} from '../themes/theme';
import { Button, Divider, Popover, Typography } from '@material-ui/core';

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
      margin: theme.spacing(2),
      minHeight: 40,
    },
  })
);

const ThemeController = () => {
  const darkMode = React.useContext(DarkModeContext);
  const glassMode = React.useContext(GlassModeContext);
  const colorMode = React.useContext(ColorContext);
  const theme = useTheme();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openColorMenu, setOpenColorMenu] = React.useState<
    undefined | null | HTMLElement
  >(null);

  const handleCloseColorMenu = () => {
    setOpenColorMenu(null);
  };
  const handleOpenColorMenu = (e: React.MouseEvent<HTMLDivElement>) => {
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
  const glassModeToggler = () => {
    glassMode.toggleGlassMode();
    handleClose();
  };

  const actions = [
    {
      icon: <StyleOutlined />,
      name: 'Change Colors',
      onClick: handleOpenColorMenu,
    },
    {
      icon:
        theme.palette.type === 'light' ? (
          <Brightness4Outlined />
        ) : (
          <Brightness7 />
        ),
      name: theme.palette.type === 'light' ? 'Dark Mode' : 'Light Mode ',
      onClick: darkModeToggler,
    },
    {
      icon: <InvertColors />,
      name: 'Glass Effect',
      onClick: glassModeToggler,
    },
  ];

  return (
    <>
      <SpeedDial
        ariaLabel="Theme Controller"
        className={classes.speedDial}
        icon={<SpeedDialIcon icon={<Palette />} openIcon={<Close />} />}
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
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handleCloseColorMenu}
      >
        <Typography className={classes.colorFab}>
          Choose your color !
        </Typography>
        <Divider />
        <div className={classes.colorSizeContainer}>
          <div className={classes.colorContainer}>
            {colors.map((color) => (
              <Button
                className={classes.colorFab}
                key={color.primary}
                style={{ backgroundColor: color.primary }}
                onClick={() => {
                  colorMode.setColorMode(color);
                  handleCloseColorMenu();
                }}
              />
            ))}
          </div>
        </div>
      </Popover>
    </>
  );
};
export default ThemeController;
