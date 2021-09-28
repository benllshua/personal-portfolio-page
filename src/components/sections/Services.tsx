import React from 'react';

// components
import { Typography } from '@material-ui/core';
import AboutCircularAnim from '../AboutCircularAnim';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
