import React from 'react';

// data
import { UXProjects, FRONTENDProjects } from '../../content/projects';

// components
import { Typography, Container } from '@mui/material';
import Project from '../Project';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      opacity: '0.6',
      fontWeight: 300,
      marginBottom: theme.spacing(2),
    },
    paper: {
      display: 'inline-block',
    },
    buttonSpacing: {
      padding: 10,
    },
  })
);

const Portfolio = () => {
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
        {'Portfolio'}
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        align="center"
        className={classes.subTitle}
        gutterBottom
      >
        {'past work & projects'}
      </Typography>
      <Container>
        <FullWidthTabs />
      </Container>
    </div>
  );
};

export default Portfolio;

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <>{children}</>}
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
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          centered
          aria-label="full width tabs example"
        >
          <Tab label="UX Design" {...a11yProps(0)} />
          <Tab label="Front End Dev" {...a11yProps(1)} />
          <Tab label="Back End Dev" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {UXProjects.map((project, index) => (
            <div key={`${project.title} ${index}`}>
              <Project project={project} />
            </div>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {FRONTENDProjects.map((project, index) => (
            <div key={`${project.title} ${index}`}>
              <Project project={project} />
            </div>
          ))}
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
