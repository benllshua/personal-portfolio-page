import React from 'react';

// components
import { Grid, Typography, Button } from '@mui/material';
import Link from '../Link';
import SlideAndFade from '../animations/SlideAndFade';

// assets
import { Chat, Description } from '@mui/icons-material';
import { useMediaQuery } from '../../hooks/useMediaQuery';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secon: {
      flexGrow: 1,
    },
    buttonContainer: {
      marginTop: theme.spacing(2),
      width: '100%',
      display: 'flex',
      '&>*': {
        marginRight: theme.spacing(2),
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
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
    },
    mainTitle: {
      opacity: '0.8',
      fontWeight: 100,
      marginLeft: '-6px',
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.h3.fontSize,
        textAlign: 'center',
        width: '100%',
      },
    },
    subTitle: {
      opacity: '0.6',
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.h6.fontSize,
        textAlign: 'center',
        width: '100%',
      },
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
      alignItems: 'center',
      width: '100%',
    },
    image: {
      filter: 'drop-shadow(5px 5px 15px #00000033)',
      width: 300,
      height: 300,
      display: 'block',
      marginRight: 'auto',
      marginLeft: 'auto',
      [theme.breakpoints.up('md')]: {
        width: 600,
        height: 600,
      },
    },
    paperLike: {
      backgroundColor: theme.palette.background.paper,
    },
    fullWidth: {
      width: '100%',
    },
    imgFlexWrapper: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '50%',
    },
  })
);

const Landing = () => {
  const classes = useStyles();
  const isBreakpoint = useMediaQuery(900);

  return (
    <div className="section">
      <Grid
        container
        spacing={3}
        className={isBreakpoint ? '' : classes.fullHeight}
        direction={isBreakpoint ? 'column-reverse' : 'row'}
      >
        <Grid item md={5} className={classes.verticalCenter1}>
          <div className={classes.fullWidth}>
            <SlideAndFade>
              <Typography variant="h1" className={classes.mainTitle}>
                Ben Shua
              </Typography>
            </SlideAndFade>
          </div>
          <div className={classes.fullWidth}>
            <SlideAndFade delay={0.5}>
              <Typography variant="h5" className={classes.subTitle}>
                Product Architect
              </Typography>
            </SlideAndFade>
          </div>
          <div className={classes.fullWidth}>
            <SlideAndFade delay={0.75}>
              <div className={classes.divider} />
            </SlideAndFade>
          </div>
          <SlideAndFade delay={1}>
            <Typography variant="body1">
              {
                'I can bring your project from 0 to 100. By offering experience in all product build parts, from identifying & designing to development & deployment, including proper management skills.'
              }
            </Typography>
          </SlideAndFade>

          <div className={classes.buttonContainer}>
            <SlideAndFade delay={2}>
              <Link
                href="/documents/BensResume.pdf"
                target="_blank"
                underline="none"
              >
                <Button variant="contained" color="primary">
                  {'resume'}
                  <Description className={classes.icon} />
                </Button>
              </Link>
            </SlideAndFade>
            <SlideAndFade delay={2.5}>
              <Link
                href="/documents/BensResume.pdf"
                target="_blank"
                underline="none"
              >
                <Button variant="contained" color="primary">
                  {'get in contact'}
                  <Chat className={classes.icon} />
                </Button>
              </Link>
            </SlideAndFade>
          </div>
        </Grid>
        <Grid item md={7} className={classes.verticalCenter2}>
          <div className={classes.imgFlexWrapper}>
            <Image
              src={'/images/profile5.png'}
              alt="profileImg"
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL={'/images/profile5.png'}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
