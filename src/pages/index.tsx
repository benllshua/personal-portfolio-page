import React from 'react';

// components
import { Container, Grid, Typography, Fab } from '@material-ui/core';
// import Link from '../components/Link';

// icons
import { Description } from '@material-ui/icons';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    buttonContainer: {
      margin: theme.spacing(2),
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    icon: {
      marginLeft: theme.spacing(1),
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  })
);

/**
 * Main page component
 * @return {JSX.Element} : The JSX for the Main page
 */
export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Hi there, my name is</Typography>
          <Typography variant="h1">Ben Shua</Typography>
          <Typography variant="h5">Product Architect</Typography>
          <Typography variant="body1">
            {
              'I can bring your project from 0 to 100. By offering experience in all product build parts, from identifying & designing to development & deployment, including proper management skills.'
            }
          </Typography>

          <div className={classes.buttonContainer}>
            <Fab
              variant="extended"
              color="primary"
              href="../assets/documents/BensResume.pdf"
            >
              {'download resume '}
              <Description className={classes.icon} />
            </Fab>
            <Fab variant="extended" color="primary">
              {'contact me'}
            </Fab>
          </div>
        </Grid>
        <Grid item xs={6}>
            
        </Grid>
      </Grid>
    </Container>
  );
}
