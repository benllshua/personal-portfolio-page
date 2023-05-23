'use client';
import { FC, useState } from 'react';

// components
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';

import { ExpandMore } from '@mui/icons-material';
import type {} from '@mui/lab/themeAugmentation';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Paper, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import ImageDialog from './ImagesDialog';
import SlideAndFade from './animations/SlideAndFade';

import Tilt from 'react-parallax-tilt';

// Data
import { EducationInfo, educationPlaces } from '../content/education';

// styles

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
      [theme.breakpoints.down('md')]: {
        fontSize: '0.6rem',
      },
    },
    caption: {
      [theme.breakpoints.down('md')]: {
        fontSize: '0.5rem',
      },
    },
  })
);

// context
import Image from 'next/image';
import { useColorStore } from '../context/useColor';

const EducationPanel: FC = () => {
  const classes = useStyles();
  const color = useColorStore((state) => state.color);

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
                    <Item education={education} last={index === educationPlaces.length - 1} />
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
                    src={`/images/illustrations/${color.folderName}/learningBro.png`}
                    placeholder="blur"
                    blurDataURL={`/images/illustrations/${color.folderName}/learningBro.png`}
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
  education: EducationInfo;
  last: boolean;
}

const Item = ({ education, last }: ItemProps) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body1" color="textSecondary" className={classes.text}>
          {education.type}
        </Typography>

        <Typography variant="caption" color="textSecondary" className={classes.caption}>
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
        <EduAccordion title={education.title} description={education.description} image={education.image} />
      </TimelineContent>
    </TimelineItem>
  );
};

interface EduAccordionProps {
  title: string;
  description: string;
  image: { label: string; src: string };
}

const EduAccordion = ({ title, description, image }: EduAccordionProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
            <Button size={'small'} variant={'outlined'} onClick={() => setOpen(true)}>
              {'VIEW CERTIFICATES'}
            </Button>
          </AccordionDetails>
        </Accordion>
      </Paper>
      <ImageDialog open={open} onClose={() => setOpen(false)} src={image.src} label={image.label} />
    </>
  );
};
