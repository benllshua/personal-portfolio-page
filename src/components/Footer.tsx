import React from 'react';

// components
import { Grid, Container, Typography } from '@mui/material';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

// icons
import { Info } from '@mui/icons-material';
import Link from './Link';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      width: '100vw',
      minHeight: 600,
      marginTop: 80,
    },
    text: {
      display: 'block',
      color: '#ffffffaa',
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid md={4}>
            <Box p={3}>
              <Typography variant="h4" gutterBottom color={'white'}>
                Navigation
              </Typography>
              <Link href={'#servicesSection'} className={classes.text}>
                Services
              </Link>
              <Link href={'#aboutSection'} className={classes.text}>
                About
              </Link>
              <Link href={'#skillsSection'} className={classes.text}>
                Skills
              </Link>
              <Link href={'#portfolioSection'} className={classes.text}>
                Portfolio
              </Link>
            </Box>
          </Grid>
          <Grid md={4}>
            <Box p={3}>
              <Typography variant="h4" gutterBottom color={'white'}>
                Navigation
              </Typography>
              <Link href={'#servicesSection'} className={classes.text}>
                Services
              </Link>
              <Link href={'#aboutSection'} className={classes.text}>
                About
              </Link>
              <Link href={'#skillsSection'} className={classes.text}>
                Skills
              </Link>
              <Link href={'#portfolioSection'} className={classes.text}>
                Portfolio
              </Link>
            </Box>
          </Grid>
          <Grid md={4}>ghi</Grid>
        </Grid>
      </Container>
    </footer>
  );
}
