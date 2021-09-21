import React from 'react';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paint: {
      backgroundColor: theme.palette.primary.main,
      width: '30%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      right: 0,
    },
  })
);

const ColoredSection = () => {
  const classes = useStyles();

  return <Paper square elevation={16} className={classes.paint}></Paper>;
};

export default ColoredSection;
