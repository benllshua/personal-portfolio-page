import React, { useState } from 'react';

// components
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  Person,
  PersonOutlined,
  School,
  SchoolOutlined,
  Work,
  WorkOutline,
} from '@material-ui/icons';

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
  })
);

const About = () => {
  const classes = useStyles();
  const [panel, setPanel] = useState(1);

  const setPanelTo = (num: number) => {
    setPanel(num);
  };

  return (
    <div className="section">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        className={classes.subTitle}
      >
        About me
      </Typography>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={1}>
            <PanelController panel={panel} setPanelTo={setPanelTo} />
          </Grid>
          <Grid item xs={10}>
            <Paper>
              <Typography variant="h6">My Story</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;

interface PanelControllerProps {
  panel: number;
  setPanelTo: (num: number) => void;
}
const PanelController = ({ panel, setPanelTo }: PanelControllerProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
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
