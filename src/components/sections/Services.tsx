import React from 'react';

// components
import { Typography } from '@mui/material';
import AboutCircularAnim from '../AboutCircularAnim';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      opacity: '0.6',
      fontWeight: 300,
    },
    paper: {
      display: 'inline-block',
    },
    buttonSpacing: {
      padding: 10,
    },
  })
);

const Services = () => {
  const classes = useStyles();

  return (
    <div className="section">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        gutterBottom
        className={classes.subTitle}
      >
        Services
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        align="center"
        className={classes.subTitle}
      >
        {'What I do & How I can help you'}
      </Typography>
    </div>
  );
};

export default Services;
