import React, { useContext, useState } from 'react';

// components
import {
  Typography,
  Card,
  CardActionArea,
  Box,
  Container,
} from '@mui/material';
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
    },
    card: {
      width: 350,
      margin: theme.spacing(8),
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    cardTitle: {
      opacity: 0.6,
    },
  })
);

const Services = () => {
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
        Services
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        align="center"
        className={classes.subTitle}
      >
        {'What I do & How I can help you'}
      </Typography>

      <Container>
        <div className={classes.cardsContainer}>
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Container>
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
          <Box p={3}>
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
              />
            </div>
            <Typography
              variant="caption"
              component="div"
              align="center"
              color="primary"
              gutterBottom
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
