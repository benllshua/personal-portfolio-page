'use client';

import { email } from '../content/email';
import { copyToClipBoard } from '../functions/copyToClipBoard';

// components
import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

// styles
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useMessageStore } from '../context/useMessage';

// icons

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
      width: '100vw',
      minHeight: 600,
      marginTop: 80,
      zIndex: 1000,
    },
    text: {
      transition: '0.3s',
      marginTop: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      color: '#ffffffaa',
      textDecoration: 'none',
      background: 'none',
      cursor: 'pointer',
      border: 'none',
      padding: 0,
      width: '100%',
      '&:hover': {
        border: 'none',
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
  const setMessage = useMessageStore((state) => state.setMessage);

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid md={4} item>
            <Box p={3}>
              <Typography variant="h4" gutterBottom color={'white'}>
                Navigation
              </Typography>

              {/* @ts-ignore */}
              <Link href="#servicesSection" className={classes.text}>
                Services
              </Link>

              {/* @ts-ignore */}
              <Link href="#aboutSection" className={classes.text}>
                About
              </Link>

              {/* @ts-ignore */}
              <Link href="#skillsSection" className={classes.text}>
                Skills
              </Link>

              {/* @ts-ignore */}
              <Link href="#portfolioSection" className={classes.text}>
                Portfolio
              </Link>
            </Box>
          </Grid>
          <Grid md={4} item>
            <Box p={3}>
              <Typography variant="h4" gutterBottom color={'white'}>
                Assets
              </Typography>

              {/* @ts-ignore */}
              <Link href="https://storyset.com/web" className={classes.text}>
                Web illustrations by Storyset
              </Link>

              {/* @ts-ignore */}
              <Link href="https://storyset.com/people" className={classes.text}>
                People illustrations by Storyset
              </Link>

              {/* @ts-ignore */}
              <Link href="https://storyset.com/work" className={classes.text}>
                Work illustrations by Storyset
              </Link>

              {/* @ts-ignore */}
              <Link href="https://storyset.com/app" className={classes.text}>
                App illustrations by Storyset
              </Link>

              {/* @ts-ignore */}
              <Link href="https://storyset.com/education" className={classes.text}>
                Education illustrations by Storyset
              </Link>
            </Box>
          </Grid>
          <Grid md={4} item>
            <Box p={3}>
              <Typography variant="h4" gutterBottom color={'white'}>
                Contact & Social
              </Typography>
              <button
                className={classes.text}
                onClick={() => {
                  copyToClipBoard(email);
                  setMessage(`copied "${email}" to clipboard 🙂`);
                }}
              >
                <Mail className={classes.icon} />
                Mail
              </button>
              {/* @ts-ignore */}
              <Link href="https://github.com/benllshua" className={classes.text}>
                <GitHub className={classes.icon} />
                GitHub
              </Link>
              {/* @ts-ignore */}
              <Link href="https://www.linkedin.com/in/ben-shua-08b103198/" className={classes.text}>
                <LinkedIn className={classes.icon} />
                LinkedIn
              </Link>
              {/* @ts-ignore */}
              <Link href="https://www.instagram.com/benllshua/" className={classes.text}>
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
