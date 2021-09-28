import React from 'react';
import {
  Person,
  PersonOutlined,
  School,
  SchoolOutlined,
  Work,
  WorkOutline,
} from '@material-ui/icons';

import { Button, ButtonGroup, Paper } from '@material-ui/core';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      opacity: '0.6',
      fontWeight: 300,
      marginBottom: theme.spacing(16),
    },
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

  return (
    <Paper className={classes.paper} elevation={4}>
      <ButtonGroup orientation="vertical" variant="text">
        <Button
          color="primary"
          className={classes.buttonSpacing}
          onClick={() => setPanelTo(1)}
        >
          {panel === 1 ? (
            <Person fontSize={'large'} />
          ) : (
            <PersonOutlined fontSize={'large'} />
          )}
        </Button>
        <Button
          color="primary"
          className={classes.buttonSpacing}
          onClick={() => setPanelTo(2)}
        >
          {panel === 2 ? (
            <School fontSize={'large'} />
          ) : (
            <SchoolOutlined fontSize={'large'} />
          )}
        </Button>
        <Button
          color="primary"
          className={classes.buttonSpacing}
          onClick={() => setPanelTo(3)}
        >
          {panel === 3 ? (
            <Work fontSize={'large'} />
          ) : (
            <WorkOutline fontSize={'large'} />
          )}
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default PanelController;
