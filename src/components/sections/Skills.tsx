import React, { FC } from 'react';

import { Box, Divider, Fade, Paper, Tab, Tabs, Typography, useTheme } from '@mui/material';
import SlideAndFade from '../animations/SlideAndFade';
import SkillChip from '../SkillChip';

import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

import { BackEndSkills, FrontEndSkills, skills, UXSkills } from '../../content/skills';

import { Api, DesignServices, DeveloperMode } from '@mui/icons-material';
import Image from 'next/image';
import SwipeableViews from 'react-swipeable-views';

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
    chip: {
      '&:hover': {
        transform: 'scale(1.25)',
        boxShadow: '1px 1px 5px #00000055',
      },
    },
    skillRoot: {
      margin: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    skillsContainer: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  })
);

const Skills: FC = () => {
  const classes = useStyles();

  return (
    <div className="section" id="skillsSection">
      <Typography variant="h3" component="h3" align="center" gutterBottom className={classes.subTitle}>
        {'Skills'}
      </Typography>
      <Typography variant="h5" component="h5" align="center" className={classes.subTitle}>
        {'what I`m good at:'}
      </Typography>
      <div className={classes.pillContainer}>
        {skills.map((skill, index) => (
          <div key={index}>
            <SkillChip skill={skill} />
          </div>
        ))}
      </div>
      <Typography variant="h5" component="h5" align="center" gutterBottom className={classes.subTitle}>
        {'Practical Skills'}
      </Typography>
      <Paper>
        <FullWidthTabs />
      </Paper>
    </div>
  );
};

export default Skills;

interface TabPanelProps {
  dir?: string;
  index: any;
  value: any;
}

const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other} style={{ width: '90%', margin: '16px auto' }}>
      <Fade in={value === index}>
        <Box p={6}>{children}</Box>
      </Fade>
    </div>
  );
};

const FullWidthTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Paper elevation={8}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        scrollButtons="auto"
      >
        <Tab label="UX Design" icon={<DesignServices />} />
        <Tab label="Front End Dev" icon={<DeveloperMode />} />
        <Tab label="Back End Dev" icon={<Api />} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {value === 0 && (
          <TabPanel value={value} index={0} dir={theme.direction}>
            <SkillSection skills={UXSkills} />
          </TabPanel>
        )}
        {value === 1 && (
          <TabPanel value={value} index={1} dir={theme.direction}>
            <SkillSection skills={FrontEndSkills} />
          </TabPanel>
        )}
        {value === 2 && (
          <TabPanel value={value} index={2} dir={theme.direction}>
            <SkillSection skills={BackEndSkills} />
          </TabPanel>
        )}
      </SwipeableViews>
    </Paper>
  );
};

interface SkillProps {
  skills: {
    languages?: SkillType[];
    librarys?: SkillType[];
    moreRelated?: SkillType[];
    tools?: SkillType[];
    notes?: string;
  };
}
type SkillType = {
  name: string;
  imgDir: string;
};

const SkillSection = ({ skills }: SkillProps) => {
  const classes = useStyles();
  return (
    <>
      {skills.languages?.length && (
        <>
          <Typography variant={'h5'} align={'center'} gutterBottom>
            {'Languages'}
          </Typography>
          <Divider />
          <div className={classes.skillsContainer}>
            {skills.languages.map((skill, index) => (
              <div key={skill.name}>
                <SlideAndFade delay={0.1 * index}>
                  <Skill imgDir={skill.imgDir} name={skill.name} />
                </SlideAndFade>
              </div>
            ))}
          </div>
        </>
      )}
      {skills.librarys?.length && (
        <>
          <Typography variant={'h5'} align={'center'} gutterBottom>
            {'Librarys / Frameworks'}
          </Typography>
          <Divider />
          <div className={classes.skillsContainer}>
            {skills.librarys.map((skill, index) => (
              <div key={skill.name}>
                <SlideAndFade delay={0.1 * index}>
                  <Skill imgDir={skill.imgDir} name={skill.name} />
                </SlideAndFade>
              </div>
            ))}
          </div>
        </>
      )}
      {skills.moreRelated?.length && (
        <>
          <Typography variant={'h5'} align={'center'} gutterBottom>
            {'Other'}
          </Typography>
          <Divider />
          <div className={classes.skillsContainer}>
            {skills.moreRelated.map((skill, index) => (
              <div key={skill.name}>
                <SlideAndFade delay={0.1 * index}>
                  <Skill imgDir={skill.imgDir} name={skill.name} />
                </SlideAndFade>
              </div>
            ))}
          </div>
        </>
      )}
      {skills.tools?.length && (
        <>
          <Typography variant={'h5'} align={'center'} gutterBottom>
            {'Tools'}
          </Typography>
          <Divider />
          <div className={classes.skillsContainer}>
            {skills.tools.map((skill, index) => (
              <div key={skill.name}>
                <SlideAndFade delay={0.1 * index}>
                  <Skill imgDir={skill.imgDir} name={skill.name} />
                </SlideAndFade>
              </div>
            ))}
          </div>
        </>
      )}
      <Typography variant={'body2'}>{skills.notes}</Typography>
    </>
  );
};

const Skill = ({ imgDir, name }: SkillType) => {
  const basicPath = '/svgs/skills';
  const classes = useStyles();

  return (
    <div className={classes.skillRoot}>
      <Image src={`${basicPath}/${imgDir}.svg`} alt={`${name} illustration`} width={50} height={50} />
      <Typography variant={'caption'}>{name}</Typography>
    </div>
  );
};
