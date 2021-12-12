import React, { useContext } from 'react';

// components
import {
  Grid,
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Tilt from 'react-parallax-tilt';

// data
import { hobbies } from '../content/hobbies';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { ColorContext } from '../themes/theme';
import SlideAndFade from './animations/SlideAndFade';
import Image from 'next/image';

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
      // fontStyle: 'italic',
      opacity: '0.7',
      marginBottom: theme.spacing(4),
    },

    primaryTail: {
      backgroundColor: theme.palette.primary.main,
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const StoryPanel = () => {
  const classes = useStyles();
  const color = useContext(ColorContext);

  return (
    <Paper elevation={8}>
      <Box p={3}>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h4" gutterBottom>
              {'My Story'}
            </Typography>
            <Typography
              variant="body2"
              className={classes.bodyText}
              component="div"
            >
              <SlideAndFade>
                {`
              Hi! my name is Ben Shua, Born in 2001 and I'm from Israel!`}
                <br />
                {`
              Since a young age, I'm working on design and programming projects
              as my mom is a graphic designer and my dad is a cyber-security
              specialist.`}
              </SlideAndFade>
              <SlideAndFade delay={0.1}>
                <br />
                {`I love it, I like exploring ideas, try to achieve them throw
              hard work (and teamwork 😉 ). maybe someday even with you...`}
              </SlideAndFade>
            </Typography>

            <SlideAndFade delay={0.6}>
              <Typography variant="subtitle1" gutterBottom>
                {'More things I like:'}
              </Typography>
            </SlideAndFade>
            <List dense>
              {hobbies.map((hobbie, index) => (
                <div key={index}>
                  <SlideAndFade delay={0.7 + index * 0.1}>
                    <ListItem>
                      <ListItemIcon>{hobbie.icon}</ListItemIcon>
                      <ListItemText primary={hobbie.title} />
                    </ListItem>
                  </SlideAndFade>
                </div>
              ))}
            </List>
          </Grid>
          <Grid item md={6} className={classes.flexCenter}>
            <SlideAndFade delay={1}>
              <Tilt perspective={500} scale={1.1}>
                <div style={{ width: '100%', position: 'relative' }}>
                  <Image
                    width={350}
                    height={350}
                    alt="illustration"
                    src={`/images/illustrations/${
                      color.getColor()?.folderName
                    }/growing.png`}
                    placeholder="blur"
                    blurDataURL={`/images/illustrations/${
                      color.getColor()?.folderName
                    }/growing.png`}
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

export default StoryPanel;
