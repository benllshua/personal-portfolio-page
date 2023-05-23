'use client';

import { FC } from 'react';

// data
import { Projects } from '../../content/projects';

// components
import { Typography } from '@mui/material';
import SlideAndFade from '../animations/SlideAndFade';

import Project from '../Project';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      opacity: '0.6',
      fontWeight: 300,
      marginBottom: theme.spacing(2),
    },
    paper: {
      display: 'inline-block',
    },
    buttonSpacing: {
      padding: 10,
    },
  })
);

const Portfolio: FC = () => {
  const classes = useStyles();

  return (
    <div className="section" id="portfolioSection">
      <Typography variant="h3" component="h3" align="center" gutterBottom className={classes.subTitle}>
        {'Portfolio'}
      </Typography>
      <Typography variant="h5" component="h5" align="center" className={classes.subTitle} gutterBottom>
        {'past work & projects'}
      </Typography>
      {Projects.map((project, index) => (
        <div key={project.title}>
          <SlideAndFade delay={0.3 * index}>
            <Project project={project} />
          </SlideAndFade>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
