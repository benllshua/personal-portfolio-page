import React from 'react';

// components
import Link from './Link';
import {
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
} from '@material-ui/icons';

// styles
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconPaper: {
      borderRadius: '50%',
      width: 48,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
      zIndex: theme.zIndex.drawer
    },
  })
);

const SocialMediaLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.position}>
      <IconLink icon={<Mail color="primary" />} href={'#'} />
      <IconLink icon={<GitHub color="primary" />} href={'#'} />
      <IconLink icon={<LinkedIn color="primary" />} href={'#'} />
      <IconLink icon={<Instagram color="primary" />} href={'#'} />
    </div>
  );
};

interface IconLinkProps {
  icon: any;
  href: string;
}

const IconLink = ({ icon, href }: IconLinkProps) => {
  const classes = useStyles();

  return (
    <Link href={href} underline="none">
      <Paper elevation={4} className={classes.iconPaper}>
        {icon}
      </Paper>
    </Link>
  );
};

export default SocialMediaLinks;
