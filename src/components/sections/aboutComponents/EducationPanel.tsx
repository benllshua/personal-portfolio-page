import React from 'react';

// components
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';

import {
  Grid,
  Paper,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

import { Description, School } from '@material-ui/icons';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    primaryTail: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

const EducationPanel = () => {
  const classes = useStyles();

  return (
    <Paper elevation={8}>
      <Box p={3}>
        <Grid container >
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom>
              My Education
            </Typography>
            <Timeline align="left">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body1" color="textSecondary">
                    High school
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    09/2015 - 06/2020
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <School color="primary" />
                  </TimelineDot>
                  <TimelineConnector className={classes.primaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <EduAccordion
                    title="Meir Shfeia"
                    description="csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf"
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body1" color="textSecondary">
                    Certification
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    04/2021 - 10/2021
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <Description color="primary" />
                  </TimelineDot>
                  <TimelineConnector className={classes.primaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <EduAccordion
                    title="Google UX Design"
                    description="csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf"
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body1" color="textSecondary">
                    High school
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    09/2015 - 06/2020
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <School color="primary" />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <EduAccordion
                    title="Meir Shfeia"
                    description="csakldjsfkajls dhfkjl dsklajhf asdkfjh ksjdahf"
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default EducationPanel;

interface Props {
  title: string;
  description: string;
}

const EduAccordion = ({ title, description }: Props) => {
  return (
    <Paper>
      <Accordion>
        <AccordionSummary>
          <Typography variant="subtitle2">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
