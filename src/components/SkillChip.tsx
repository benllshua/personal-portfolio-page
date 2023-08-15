'use client';

import { useState } from 'react';

// components
import { Chip, Dialog, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material';

// styles
import { createStyles, makeStyles } from '@mui/styles';

// icons
import { Info } from '@mui/icons-material';

// data
import { Box } from '@mui/system';
import { Skill } from '../content/skills';

const useStyles = makeStyles(() =>
  createStyles({
    chip: {
      transition: '0.3s',
      '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '1px 1px 5px #00000055',
      },
    },
  })
);

interface SkillChip {
  skill: Skill;
}

const SkillChip = ({ skill }: SkillChip) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Chip label={skill.name} color={'primary'} deleteIcon={<Info />} onDelete={onOpen} className={classes.chip} />
      <Dialog open={open} onClose={onClose}>
        <Box p={1}>
          <DialogTitle>
            {`What does`}
            <b> {skill.name} </b> {`mean:`}
            <Divider />
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{skill.description}</DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};
export default SkillChip;
