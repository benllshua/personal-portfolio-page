import React, { useState } from 'react';

// components
import { Typography, Grid, Chip, Box, Button } from '@mui/material';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import ImagesDialog from './ImagesDialog';

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

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <img
          className={classes.image}
          src={mainImg}
          alt={`${title} project image`}
        />
      </Grid>
      <Grid item xs={6}>
        <Box p={3}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.bodyText} gutterBottom>
            {description}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={onOpen}
          >
            {'VIEW MORE'}
          </Button>
        </Box>
      </Grid>
      <div className={classes.tagsContainer}>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} color={'primary'} variant="outlined" />
        ))}
      </div>
      {open && (
        <ImagesDialog open={open} onClose={onClose} imageList={imageList} />
      )}
    </Grid>
  );
};

export default Project;
