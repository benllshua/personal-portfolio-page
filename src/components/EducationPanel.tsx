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
  Button,
} from '@mui/material';

import { ExpandMore } from '@mui/icons-material';
import ImagesDialog from './ImagesDialog';
import SlideAndFade from './animations/SlideAndFade';

import Tilt from 'react-parallax-tilt';

// Data
import { educationPlaces, Education } from '../content/education';

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
    eduAccordion: {
      transition: '0.3s',
      '&:hover': {
        marginRight: theme.spacing(-2),
      },
    },
    text: {
      fontSize: '0.6rem',
    },
    caption: {
      fontSize: '0.5rem',
    },
  })
);

// context
import { ColorContext } from '../themes/theme';
import Image from 'next/image';

const EducationPanel = () => {
  const classes = useStyles();
  const color = useContext(ColorContext);

  return (
    <Paper elevation={8}>
      <Box p={3}>
        <Grid container>
          <Grid item md={8}>
            <Typography variant="h4" gutterBottom>
              My Education
            </Typography>
            <Timeline position="right">
              {educationPlaces.map((education, index) => (
                <div key={index}>
                  <SlideAndFade delay={0.3 + 0.1 * index}>
                    <Item
                      education={education}
                      last={index === educationPlaces.length - 1}
                    />
                  </SlideAndFade>
                </div>
              ))}
            </Timeline>
          </Grid>
          <Grid item md={4} className={classes.flexCenter}>
            <SlideAndFade delay={1}>
              <Tilt perspective={500} scale={1.1}>
                <div style={{ width: '100%', position: 'relative' }}>
                  <Image
                    width={350}
                    height={350}
                    alt="illustration"
                    src={`/images/illustrations/${
                      color.getColor()?.folderName
                    }/learningBro.png`}
                    placeholder="blur"
                    blurDataURL={`/images/illustrations/${
                      color.getColor()?.folderName
                    }/learningBro.png`}
                  />
                </div>
              </Tilt>
            </SlideAndFade>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default EducationPanel;

interface ItemProps {
  education: Education;
  last: boolean;
}

const Item = ({ education, last }: ItemProps) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.text}
        >
          {education.type}
        </Typography>

        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.caption}
        >
          {education.startDate} - {education.endDate}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined">
          {education.icon}
        </TimelineDot>
        {!last && <TimelineConnector className={classes.primaryTail} />}
      </TimelineSeparator>
      <TimelineContent>
        <EduAccordion
          title={education.title}
          description={education.description}
          imageList={education.imageList}
        />
      </TimelineContent>
    </TimelineItem>
  );
};

interface EduAccordionProps {
  title: string;
  description: string;
  imageList: { label?: string; imgFileName: string }[];
}

const EduAccordion = ({ title, description, imageList }: EduAccordionProps) => {
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
      <Paper className={classes.eduAccordion}>
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
