'use client';

// components
import { Beenhere, Close } from '@mui/icons-material';
import {
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import Image from 'next/image';

// data
import { serviceType } from '../content/services';
import { useColorStore } from '../context/useColor';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(1),
    },
    divider: {
      marginBottom: theme.spacing(2),
    },
    miniTitle: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
      '&>span': {
        marginRight: theme.spacing(1),
      },
    },
    imageWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: theme.spacing(2),
    },
  })
);

interface ServiceDialogProps {
  open: boolean;
  service: serviceType;
  onClose: () => void;
}

const ServiceDialog = ({ service, onClose, open }: ServiceDialogProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const color = useColorStore((state) => state.color);

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{service?.name}</DialogTitle>
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      )}
      <Divider />
      <DialogContent>
        <div className={classes.imageWrapper}>
          <Image
            src={`/images/illustrations/${color.folderName}/${service.imgSrc}`}
            alt={`${service.imgSrc} illustartion`}
            width={150}
            height={150}
          />
        </div>
        <Typography variant="subtitle1">So what is {service.name} ?</Typography>
        <DialogContentText gutterBottom>{service?.description}</DialogContentText>
        <div className={classes.miniTitle}>
          <Icon>
            <Beenhere color="primary" />
          </Icon>
          <Typography variant="subtitle1">More Knowledge Provided</Typography>
        </div>
        <Divider className={classes.divider} />
        {service?.tags.map((tag, index) => (
          <Chip key={index} label={tag} className={classes.chip} size={isSmallScreen ? 'small' : 'medium'} />
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;
