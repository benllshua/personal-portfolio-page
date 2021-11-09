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

    primaryTail: {
      backgroundColor: theme.palette.primary.main,
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
              {hobbies.map((hobbie, index) => (
                <ListItem key={index}>
                  <ListItemIcon>{hobbie.icon}</ListItemIcon>
                  <ListItemText primary={hobbie.title} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <Tilt perspective={500} scale={1.1}>
              <img
                src={`/images/illustrations/${
                  color.getColor()?.folderName
                }/growing.png`}
                width="100%"
              />
            </Tilt>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default StoryPanel;
