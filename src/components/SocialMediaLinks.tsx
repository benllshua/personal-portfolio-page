import React from 'react';

// components
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

import { IconButton, Tooltip } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconFab: {
      transition: '0.3s',
      margin: theme.spacing(2),
      '&:hover': {
        transform: 'scale(1.25)',
      },
    },
    icon: {},
    position: {
      position: 'fixed',
      top: '50%',
      right: '0',
      transform: 'translateY(-50%)',
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
      <IconLink icon={<Mail />} href={'#'} text={'email'} />
      <IconLink
        icon={<GitHub />}
        text={'GitHub link'}
        href={'https://github.com/benllshua'}
      />
      <IconLink
        text={'LinkedIn link'}
        icon={<LinkedIn />}
        href={'https://www.linkedin.com/in/ben-shua-08b103198/'}
      />
      <IconLink
        text={'Instagram link'}
        icon={<Instagram />}
        href={'https://www.instagram.com/benllshua/'}
      />
    </div>
  );
};

interface IconLinkProps {
  icon: any;
  href: string;
  text: string;
  onClick?: () => {};
}

const IconLink = ({ icon, href, text, onClick }: IconLinkProps) => {
  const classes = useStyles();

  return (
    <Tooltip title={text} placement="left">
      <IconButton
        className={classes.iconFab}
        href={href}
        color="primary"
        onClick={onClick}
        size={'large'}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default SocialMediaLinks;
