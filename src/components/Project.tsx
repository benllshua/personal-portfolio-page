'use client';

import { FC, useState } from 'react';

// components
import {
  Box,
  Button,
  Chip,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

import type { Project } from '../content/projects';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'auto',
      marginTop: theme.spacing(6),
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    image: {
      boxShadow: '1px 1px 15px rgba(0,0,0,0.4)',
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
    },
    bodyText: {
      fontStyle: 'italic',
      opacity: '0.7',
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(1),
    },
    projectBox: {
      backdropFilter: 'blur(2px)',
      backgroundColor: '#ffffff33',
    },
    imgFlexWrapper: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '50%',
    },
  })
);

interface Props {
  project: Project;
}

const Project: FC<Props> = ({ project }) => {
  const { title, description, tags, mainImg } = project;
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container className={classes.root}>
      <Grid item md={5} lg={4}>
        <ImageListItem className={classes.image}>
          <Image
            width={400}
            height={225}
            src={mainImg}
            alt={`${title} project image`}
            placeholder={'blur'}
            blurDataURL={mainImg}
          />
          <ImageListItemBar
            sx={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={title}
            position="bottom"
            actionPosition="left"
          />
        </ImageListItem>
      </Grid>
      <Grid item md={6} lg={8}>
        <Box p={isSmallScreen ? 0 : 3}>
          {!isSmallScreen && (
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          )}
          <Box marginTop={1} marginBottom={2}>
            <Typography variant="body1" className={classes.bodyText} gutterBottom>
              {description}
            </Typography>
          </Box>
          {!isSmallScreen && (
            <Button color="primary" variant="contained" onClick={onOpen}>
              {'VIEW MORE'}
            </Button>
          )}
        </Box>
      </Grid>
      <div className={classes.tagsContainer}>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} color={'primary'} variant="outlined" />
        ))}
      </div>
      {isSmallScreen && (
        <div className={classes.flexCenter}>
          <Button color="primary" variant="contained" onClick={onOpen}>
            {'VIEW MORE'}
          </Button>
        </div>
      )}
    </Grid>
  );
};

export default Project;
