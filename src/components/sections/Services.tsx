import React, { useContext, useState } from 'react';

// components
import { Typography, Card, CardActionArea, Box } from '@mui/material';
// import AboutCircularAnim from '../AboutCircularAnim';
import Image from 'next/image';

// data
import { services, serviceType } from '../../content/services';
import { ColorContext } from '../../themes/theme';

// styles
import { Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import ServiceDialog from '../ServiceDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      opacity: 0.6,
      fontWeight: 300,
    },
    paper: {
      display: 'inline-block',
    },
    buttonSpacing: {
      padding: 10,
    },
    cardsContainer: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
    },
    card: {
      transition: '0.3s',
      width: 150,
      margin: theme.spacing(2),
      '&:hover': {
        transform: 'scale(1.1)',
      },
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(8),
        width: 350,
      },
    },
    cardTitle: {
      opacity: 0.6,
    },
    clickLabel: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  })
);

const Services = () => {
  const classes = useStyles();

  return (
    <div className="section" id="servicesSection">
      <title>
        <Typography
          variant="h3"
          component="h3"
          align="center"
          gutterBottom
          className={classes.subTitle}
        >
          Services
        </Typography>
      </title>
      <Typography
        variant="h5"
        component="h5"
        align="center"
        className={classes.subTitle}
      >
        {'What I do & How I can help you'}
      </Typography>
      <div className={classes.cardsContainer}>
        {services.map((service, index) => (
          <div key={index}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

interface ServiceCardProps {
  service: serviceType;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const classes = useStyles();
  const basicPath = '/images/illustrations';
  const color = useContext(ColorContext);

  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card className={classes.card} elevation={8} onClick={onOpen}>
        <CardActionArea>
          <Box p={1}>
            <Typography
              variant="h6"
              align="center"
              className={classes.subTitle}
              gutterBottom
            >
              {service.name}
            </Typography>
            <div className={classes.cardsContainer}>
              <Image
                width={250}
                height={250}
                src={`${basicPath}/${color.getColor()?.folderName}/${
                  service.imgSrc
                }`}
                placeholder="blur"
                blurDataURL={`${basicPath}/${color.getColor()?.folderName}/${
                  service.imgSrc
                }`}
              />
            </div>
            <Typography
              variant="caption"
              component="div"
              align="center"
              color="primary"
              gutterBottom
              className={classes.clickLabel}
            >
              {'click for more information'}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
      {open && (
        <ServiceDialog open={open} onClose={onClose} service={service} />
      )}
    </>
  );
};
