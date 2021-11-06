import React, { useContext, useState } from 'react';

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
  Zoom,
  Button,
} from '@mui/material';

import { ExpandMore } from '@mui/icons-material';

import Tilt from 'react-parallax-tilt';

// Data
import { educationPlaces, iconDictionary } from '../content/education';

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
      marginBottom: theme.spacing(2),
    },
  })
);

// context
import { ColorContext } from '../themes/theme';
import ImagesDialog from './ImagesDialog';

const EducationPanel = () => {
  const classes = useStyles();
  const color = useContext(ColorContext);

  return (
    <Paper elevation={8}>
      <Box p={3}>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom>
              My Education
            </Typography>
            <Timeline position="right">
              {educationPlaces.map((education, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent>
                    <Typography variant="body1" color="textSecondary">
                      {education.type}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {education.startDate} - {education.endDate}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      {iconDictionary[education.type]}
                    </TimelineDot>
                    {index !== educationPlaces.length - 1 ? (
                      <TimelineConnector className={classes.primaryTail} />
                    ) : (
                      ''
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <EduAccordion
                      title={education.title}
                      description={education.description}
                      imageList={education.imageList}
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
                }/learningBro.png`}
                width="100%"
              />
            </Tilt>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default EducationPanel;

interface Props {
  title: string;
  description: string;
  imageList: { label?: string; imgFileName: string }[];
}

const EduAccordion = ({ title, description, imageList }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Paper>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle2">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" className={classes.bodyText}>
              {description}
            </Typography>
            <Button size={'small'} variant={'outlined'} onClick={onOpen}>
              {'VIEW CERTIFICATES'}
            </Button>
          </AccordionDetails>
        </Accordion>
      </Paper>
      <ImagesDialog open={open} onClose={onClose} imageList={imageList} />
    </>
  );
};
