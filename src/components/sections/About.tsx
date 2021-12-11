import React, { useState } from 'react';

// components
import { Grid, Typography } from '@mui/material';
import StoryPanel from '../StoryPanel';
import EducationPanel from '../EducationPanel';
import WorkPanel from '../WorkPanel';
import PanelController from '../PanelController';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import SlideAndFade from '../animations/SlideAndFade';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      opacity: '0.6',
      fontWeight: 300,
      marginBottom: theme.spacing(16),
    },
    paper: {
      display: 'inline-block',
    },
    buttonSpacing: {
      padding: 10,
    },
    panel: {
      transition: '1s !important',
    },
    inactivePanel: {
      transform: 'translateX(200%) ',
      margin: 0,
      opacity: 0,
      height: 0,
    },
    bodyText: {
      fontStyle: 'italic',
      opacity: '0.7',
      marginBottom: theme.spacing(4),
    },
    eduPaper: {
      padding: '6px 16px',
      '&:not(:hover) p': {
        transform: 'scaleY(0)',

        opacity: 0,
      },
    },
    primaryTail: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

const About = () => {
  const classes = useStyles();
  const [panel, setPanel] = useState(1);

  const setPanelTo = (num: number) => {
    setPanel(num);
  };

  return (
    <div className="section" id="aboutSection">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        className={classes.subTitle}
      >
        About me
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={1}>
          <PanelController panel={panel} setPanelTo={setPanelTo} />
        </Grid>
        <Grid item md={10}>
          {panel === 1 && (
            <SlideAndFade>
              <StoryPanel />
            </SlideAndFade>
          )}
          {panel === 2 && (
            <SlideAndFade>
              <EducationPanel />
            </SlideAndFade>
          )}
          {panel === 3 && (
            <SlideAndFade>
              <WorkPanel />
            </SlideAndFade>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
