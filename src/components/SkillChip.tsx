import React from 'react';

// components
import { Chip, Popover, Typography } from '@mui/material';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

// icons
import { Info } from '@mui/icons-material';

// data
import { Skill } from '../content/skills';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      '&:hover': {
        transform: 'scale(1.25)',
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

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Chip
        label={skill.name}
        color={'primary'}
        deleteIcon={<Info />}
        onDelete={handlePopoverOpen}
        className={classes.chip}
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box p={3}>
          <Typography
            gutterBottom
          >{`What does ${skill.name} mean:`}</Typography>
          <Typography>{skill.description}</Typography>
        </Box>
      </Popover>
    </>
  );
};
export default SkillChip;
