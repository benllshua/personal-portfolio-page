import React from 'react';

// components
import { Typography, Grid, Chip, Box } from '@material-ui/core';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'auto',
      width: '70%',
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
      width: '100%',
      height: 'auto',
      boxShadow: '1px 1px 15px rgba(0,0,0,0.4)',
      borderRadius: theme.shape.borderRadius,
    },
    bodyText: {
      fontStyle: 'italic',
      opacity: '0.7',
    },
  })
);

interface Props {
  project: {
    title: string;
    description: string;
    mainImg: string;
    images: string[];
    tags: string[];
  };
}

export default function Project({ project }: Props) {
  const { title, description, tags, mainImg } = project;
  const basicImgPath = '/images/projects';

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <img
          className={classes.image}
          src={`${basicImgPath}/${mainImg}`}
          alt={`${title} project image`}
        />
      </Grid>
      <Grid item xs={6}>
        <Box p={3}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.bodyText}>
            {description}
          </Typography>
        </Box>
      </Grid>
      <div className={classes.tagsContainer}>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} color={'primary'} variant="outlined" />
        ))}
      </div>
    </Grid>
  );
}
