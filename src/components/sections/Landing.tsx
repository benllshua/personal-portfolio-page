import React from 'react';

// components
import { Container, Grid, Typography, Fab } from '@mui/material';
import Link from '../Link';
import LandingCircularAnim from '../LandingCircularAnim';

// assets
import { Chat, Description } from '@mui/icons-material';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secon: {
      flexGrow: 1,
    },
    buttonContainer: {
      margin: theme.spacing(2),
      width: '100%',
      display: 'flex',
      '&>*': {
        margin: theme.spacing(2),
      },
    },
    icon: {
      marginLeft: theme.spacing(1),
    },
    divider: {
      height: 2,
      width: '100%',
      backgroundColor: theme.palette.grey[400],
      borderRadius: 1,
      marginRight: theme.spacing(32),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
    },
    mainTitle: {
      opacity: '0.8',
      fontWeight: 100,
      marginLeft: '-6px',
    },
    subTitle: {
      opacity: '0.6',
    },
    fullHeight: {
      height: '100vh',
    },
    verticalCenter1: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    verticalCenter2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    shadow: {
      filter: 'drop-shadow(5px 5px 15px #00000033)',
    },
    paperLike: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const Landing = () => {
  const classes = useStyles();

  return (
    <div className="section">
      <Container maxWidth="lg" className={classes.fullHeight}>
        <Grid container spacing={3} className={classes.fullHeight}>
          <Grid item xs={5} className={classes.verticalCenter1}>
            <Typography variant="h1" className={classes.mainTitle}>
              Ben Shua
            </Typography>
            <Typography variant="h5" className={classes.subTitle}>
              Product Architect
            </Typography>
            <div className={classes.divider} />
            <Typography variant="body1">
              {
                'I can bring your project from 0 to 100. By offering experience in all product build parts, from identifying & designing to development & deployment, including proper management skills.'
              }
            </Typography>

            <div className={classes.buttonContainer}>
              <Link
                href="/documents/BensResume.pdf"
                target="_blank"
                underline="none"
              >
                <Fab
                  variant="extended"
                  color="inherit"
                  className={classes.paperLike}
                >
                  {'resume'}
                  <Description className={classes.icon} />
                </Fab>
              </Link>
              <Link
                href="/documents/BensResume.pdf"
                target="_blank"
                underline="none"
              >
                <Fab
                  variant="extended"
                  color="inherit"
                  className={classes.paperLike}
                >
                  {'get in contact'}
                  <Chat className={classes.icon} />
                </Fab>
              </Link>
            </div>
          </Grid>
          <Grid item xs={7} className={classes.verticalCenter2}>
            <img
              src={'/images/profile5.png'}
              className={classes.shadow}
              width={600}
              height={600}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;
