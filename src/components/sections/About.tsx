import React, { useState } from 'react';

// components
import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import StoryPanel from '../StoryPanel';
import EducationPanel from '../EducationPanel';
import WorkPanel from '../WorkPanel';
import PanelController from '../PanelController';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import AboutPanelsAnimation from '../animations/AboutPanelsAnimation';

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
    panelsContainer: {
      width: '100%',
      position: 'relative',
    },
  })
);

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [panel, setPanel] = useState(1);
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="section" id="aboutSection">
      <Typography variant="h3" component="h3" align="center" className={classes.subTitle}>
        About me
      </Typography>
      <Grid container spacing={3} direction={bigScreen ? 'column' : 'row'}>
        <Grid item md={1}>
          <PanelController panel={panel} setPanelTo={setPanel} />
        </Grid>
        <Grid item md={10} sm={12}>
          <div className={classes.panelsContainer}>
            <AboutPanelsAnimation status={panel === 1 ? 'in' : 'out'}>
              <StoryPanel />
            </AboutPanelsAnimation>

            <AboutPanelsAnimation status={panel === 2 ? 'in' : 'out'}>
              <EducationPanel />
            </AboutPanelsAnimation>

            <AboutPanelsAnimation status={panel === 3 ? 'in' : 'out'}>
              <WorkPanel />
            </AboutPanelsAnimation>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
