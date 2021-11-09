import React, { useContext } from 'react';

// components
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';

import {
  Grid,
  Paper,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { ExpandMore, Work } from '@mui/icons-material';

import Tilt from 'react-parallax-tilt';

// Data
import { workPlaces } from '../content/workPlaces';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    primaryTail: {
      backgroundColor: theme.palette.primary.main,
    },
    blob: {
      transformStyle: 'preserve-3d',
      transform: 'perspective(1000px)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
    innerTiltElement: {
      transform: 'translateZ(40px) scale(0.8)',
      width: '70%',
      marginLeft: '25%',
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bodyText: {
      fontStyle: 'italic',
      opacity: '0.7',
    },
    eduAccordion: {
      '&:hover': {
        marginRight: theme.spacing(-2),
      },
    },
  })
);

// context
import { ColorContext } from '../themes/theme';

const WorkPanel = () => {
  const classes = useStyles();
  const color = useContext(ColorContext);

  return (
    <Paper elevation={8}>
      <Box p={3}>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom>
              Work Places
            </Typography>
            <Timeline position="right">
              {workPlaces.map((work, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent>
                    <Typography variant="body1" color="textSecondary">
                      {work.type}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {work.startDate} - {work.endDate}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <Work color="primary" />
                    </TimelineDot>
                    {index !== workPlaces.length - 1 ? (
                      <TimelineConnector className={classes.primaryTail} />
                    ) : (
                      ''
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <WorkAccordion
                      title={work.title}
                      description={work.description}
                    />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
          <Grid item xs={4} className={classes.flexCenter}>
            <Tilt perspective={500} scale={1.25}>
              <img
                src={`/images/illustrations/${
                  color.getColor()?.folderName
                }/working.png`}
                width="100%"
              />
            </Tilt>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default WorkPanel;

interface Props {
  title: string;
  description: string;
}

const WorkAccordion = ({ title, description }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.eduAccordion}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle2">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" className={classes.bodyText}>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
