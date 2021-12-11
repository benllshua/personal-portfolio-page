import React from 'react';
import {
  Person,
  PersonOutlined,
  School,
  SchoolOutlined,
  Work,
  WorkOutline,
} from '@mui/icons-material';

import { Button, ButtonGroup, Paper, Zoom } from '@mui/material';

// styles
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

import { useMediaQuery } from '../hooks/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'inline-block',
    },
    buttonSpacing: {
      padding: 10,
    },
    panel: {
      transition: '1s !important',
    },
    inactivePanel: {
      transform: 'translateX(200%) ',
      margin: 0,
      opacity: 0,
      height: 0,
    },
    bodyText: {
      fontStyle: 'italic',
      opacity: '0.7',
      marginBottom: theme.spacing(4),
    },
    eduPaper: {
      padding: '6px 16px',
      '&:not(:hover) p': {
        transform: 'scaleY(0)',

        opacity: 0,
      },
    },
    primaryTail: {
      backgroundColor: theme.palette.primary.main,
    },
  })
);

interface PanelControllerProps {
  panel: number;
  setPanelTo: (num: number) => void;
}
const PanelController = ({ panel, setPanelTo }: PanelControllerProps) => {
  const classes = useStyles();
  const isBreakpoint = useMediaQuery(900);

  return (
    <Paper className={classes.paper} elevation={4}>
      <ButtonGroup
        orientation={isBreakpoint ? 'horizontal' : 'vertical'}
        variant="text"
      >
        <Button
          color="primary"
          className={classes.buttonSpacing}
          onClick={() => setPanelTo(1)}
        >
          {panel === 1 && (
            <Zoom in={panel === 1}>
              <Person fontSize={'large'} />
            </Zoom>
          )}
          {panel !== 1 && (
            <Zoom in={panel !== 1}>
              <PersonOutlined fontSize={'large'} />
            </Zoom>
          )}
        </Button>
        <Button
          color="primary"
          className={classes.buttonSpacing}
          onClick={() => setPanelTo(2)}
        >
          {panel === 2 && (
            <Zoom in={panel === 2}>
              <School fontSize={'large'} />
            </Zoom>
          )}
          {panel !== 2 && (
            <Zoom in={panel !== 2}>
              <SchoolOutlined fontSize={'large'} />
            </Zoom>
          )}
        </Button>
        <Button
          color="primary"
          className={classes.buttonSpacing}
          onClick={() => setPanelTo(3)}
        >
          {panel === 3 && (
            <Zoom in={panel === 3}>
              <Work fontSize={'large'} />
            </Zoom>
          )}
          {panel !== 3 && (
            <Zoom in={panel !== 3}>
              <WorkOutline fontSize={'large'} />
            </Zoom>
          )}
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default PanelController;
