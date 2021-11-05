import React, { useState } from 'react';

// components
import { Container, Grid, Typography } from '@mui/material';
import StoryPanel from '../StoryPanel';
import EducationPanel from '../EducationPanel';
import WorkPanel from '../WorkPanel';
import PanelController from '../PanelController';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

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
    <div className="section">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        className={classes.subTitle}
      >
        About me
      </Typography>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={1}>
            <PanelController panel={panel} setPanelTo={setPanelTo} />
          </Grid>
          <Grid item xs={10}>
            <div
              className={`${classes.panel} ${
                panel === 1 ? '' : classes.inactivePanel
              }`}
            >
              <StoryPanel />
            </div>
            <div
              className={`${classes.panel} ${
                panel === 2 ? '' : classes.inactivePanel
              }`}
            >
              <EducationPanel />
            </div>

            <div
              className={`${classes.panel} ${
                panel === 3 ? '' : classes.inactivePanel
              }`}
            >
              <WorkPanel />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
