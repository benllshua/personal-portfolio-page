import React from 'react';

// components
import { Grid, Container, Typography, Box } from '@mui/material';
import Link from './Link';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';

// icons

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      width: '100vw',
      minHeight: 600,
      marginTop: 80,
    },
    text: {
      transition: '0.3s',
      marginTop: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      color: '#ffffffaa',
      '&:hover': {
        color: '#ffffffee',
      },
    },
    icon: {
      margin: theme.spacing(1),
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid md={4} item>
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
          <Grid md={4} item>
            <Box p={3}>
              <Typography variant="h4" gutterBottom color={'white'}>
                Assets
              </Typography>
              <Link href={'https://storyset.com/web'} className={classes.text}>
                Web illustrations by Storyset
              </Link>
              <Link
                href={'https://storyset.com/people'}
                className={classes.text}
              >
                People illustrations by Storyset
              </Link>
              <Link href={'https://storyset.com/work'} className={classes.text}>
                Work illustrations by Storyset
              </Link>
              <Link href={'https://storyset.com/app'} className={classes.text}>
                App illustrations by Storyset
              </Link>
              <Link
                href={'https://storyset.com/education'}
                className={classes.text}
              >
                Education illustrations by Storyset
              </Link>
            </Box>
          </Grid>
          <Grid md={4} item>
            <Box p={3}>
              <Typography variant="h4" gutterBottom color={'white'}>
                Contact & Social
              </Typography>
              <Link
                href={'https://github.com/benllshua'}
                className={classes.text}
              >
                <Mail className={classes.icon} />
                Mail
              </Link>
              <Link
                href={'https://github.com/benllshua'}
                className={classes.text}
              >
                <GitHub className={classes.icon} />
                GitHub
              </Link>
              <Link
                href={'https://www.linkedin.com/in/ben-shua-08b103198/'}
                className={classes.text}
              >
                <LinkedIn className={classes.icon} />
                LinkedIn
              </Link>

              <Link
                href={'https://www.instagram.com/benllshua/'}
                className={classes.text}
              >
                <Instagram className={classes.icon} />
                Instagram
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
