import React from 'react';

// data
import { UXProjects, FRONTENDProjects } from '../../content/projects';

// components
import { Typography } from '@mui/material';
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
    <div className="section" id="portfolioSection">
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
      <FullWidthTabs />
    </div>
  );
};

export default Portfolio;

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SlideAndFade from '../animations/SlideAndFade';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} style={{ overflowX: 'hidden' }} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
};

const FullWidthTabs = () => {
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
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="UX Design" />
        <Tab label="Development Projects" />
        <Tab label="Management " />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {UXProjects.map((project, index) => (
            <div key={`${project.title} ${index}`}>
              <SlideAndFade delay={0.3 * index}>
                <Project project={project} />
              </SlideAndFade>
            </div>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {FRONTENDProjects.map((project, index) => (
            <div key={`${project.title} ${index}`}>
              <SlideAndFade delay={0.3 * index}>
                <Project project={project} />
              </SlideAndFade>
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
