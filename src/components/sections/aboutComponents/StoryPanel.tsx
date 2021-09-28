import React from 'react';

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
} from '@material-ui/core';

import {
  BorderOuter,
  FitnessCenter,
  Inbox,
  Keyboard,
  MusicNote,
  SportsEsports,
} from '@material-ui/icons';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

const StoryPanel = () => {
  const classes = useStyles();

  return (
    <Paper elevation={8}>
      <Box p={3}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" gutterBottom>
              My Story
            </Typography>
            <Typography variant="body2" className={classes.bodyText}>
              {`
              Hi! my name is Ben Shua, Born in 2001 and I'm from Israel!`}
              <br />
              {`
              Since a young age, I'm working on design and programming projects
              as my mom is a graphic designer and my dad is a cyber-security
              specialist.`}
              <br />
              {`I love it, I like exploring ideas, try to achieve them throw
              hard work and teamwork.`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              More things I like:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <BorderOuter color="primary" />
                </ListItemIcon>
                <ListItemText primary="Chess" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FitnessCenter color="primary" />
                </ListItemIcon>
                <ListItemText primary="Gym training" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SportsEsports color="primary" />
                </ListItemIcon>
                <ListItemText primary="TFT (an online strategy game)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MusicNote color="primary" />
                </ListItemIcon>
                <ListItemText primary="Listen to Music" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Inbox color="primary" />
                </ListItemIcon>
                <ListItemText primary="Board games" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Keyboard color="primary" />
                </ListItemIcon>
                <ListItemText primary="Coding games & competetive coding" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default StoryPanel;
