import React from 'react';

// components
import { Chip, Typography, Container, Paper } from '@material-ui/core';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Done } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      opacity: '0.6',
      fontWeight: 300,
    },
    paper: {
      display: 'inline-block',
    },
    buttonSpacing: {
      padding: 10,
    },
    pillContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: theme.spacing(4),
      '&>*': {
        margin: theme.spacing(1),
      },
    },
    root: {
      backgroundColor: theme.palette.background.paper,
      overflow: 'hidden',
    },
  })
);

const skills = [
  'Project management',
  'Web Development',
  'UX Design',
  'UX research',
  'Teamworker',
  'App Development',
  'Software Development',
  'Team management',
];

const Skills = () => {
  const classes = useStyles();

  return (
    <div className="section">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        gutterBottom
        className={classes.subTitle}
      >
        {'Skills'}
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        align="center"
        className={classes.subTitle}
      >
        {'what I`m good at:'}
      </Typography>
      <Container>
        <div className={classes.pillContainer}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} color={'primary'} icon={<Done />} />
          ))}
        </div>
        <Typography
          variant="h5"
          component="h5"
          align="center"
          gutterBottom
          className={classes.subTitle}
        >
          {'Practical Skills'}
        </Typography>
        <Paper>
          <FullWidthTabs />
        </Paper>
      </Container>
    </div>
  );
};

export default Skills;

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

const FullWidthTabs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="full width tabs example"
        >
          <Tab label="UX Design" {...a11yProps(0)} />
          <Tab label="Front End Dev" {...a11yProps(1)} />
          <Tab label="Back End Dev" {...a11yProps(2)} />
          <Tab label="More Tools" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
