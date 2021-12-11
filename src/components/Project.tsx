import React, { useState } from 'react';

// components
import {
  Typography,
  Grid,
  Chip,
  Box,
  Button,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import Image from 'next/image';
import ImagesDialog from './ImagesDialog';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

import { useMediaQuery } from '../hooks/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'auto',
      marginTop: theme.spacing(6),
      [theme.breakpoints.up('md')]: {
        // width: '70%',
      },
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
  })
);

interface Props {
  project: {
    title: string;
    description: string;
    mainImg: string;
    imageList: { label?: string; imgFileName: string }[];
    tags: string[];
  };
}

const Project = ({ project }: Props) => {
  const { title, description, tags, mainImg, imageList } = project;
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const isSmallScreen = useMediaQuery(900);

  return (
    <Grid container className={classes.root}>
      <Grid item md={6}>
        <ImageListItem className={classes.image}>
          <Image
            layout="fill"
            src={mainImg}
            alt={`${title} project image`}
            placeholder={'blur'}
            blurDataURL={mainImg}
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={title}
            position="bottom"
            actionPosition="left"
          />
        </ImageListItem>
      </Grid>
      <Grid item md={6}>
        <Box p={isSmallScreen ? 0 : 3}>
          {!isSmallScreen && (
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          )}
          <Box marginTop={1} marginBottom={2}>
            <Typography
              variant="body1"
              className={classes.bodyText}
              gutterBottom
            >
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
      {open && (
        <ImagesDialog open={open} onClose={onClose} imageList={imageList} />
      )}
    </Grid>
  );
};

export default Project;
