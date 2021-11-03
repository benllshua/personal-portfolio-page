import React from 'react';

// components
import Link from './Link';
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

import { Fab, Paper } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconFab: {
      margin: theme.spacing(2),
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    icon: {},
    position: {
      position: 'fixed',
      top: '50%',
      right: '0',
      transform: 'translate(-50%, -50%)',
      zIndex: theme.zIndex.drawer,
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

const SocialMediaLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.position}>
      <IconLink icon={<Mail />} href={'#'} />
      <IconLink icon={<GitHub />} href={'https://github.com/benllshua'} />
      <IconLink
        icon={<LinkedIn />}
        href={'https://www.linkedin.com/in/ben-shua-08b103198/'}
      />
      <IconLink
        icon={<Instagram />}
        href={'https://www.instagram.com/benllshua/'}
      />
    </div>
  );
};

interface IconLinkProps {
  icon: any;
  href?: string;
  onClick?: () => {};
}

const IconLink = ({ icon, href, onClick }: IconLinkProps) => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.iconFab}
      href={href}
      color="primary"
      onClick={onClick}
    >
      {icon}
    </Fab>
  );
};

export default SocialMediaLinks;
