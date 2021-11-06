import * as React from 'react';

// components
import {
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';

// data
import { serviceType } from '../content/services';

interface ServiceDialogProps {
  open: boolean;
  service: serviceType;
  onClose: () => void;
}

const ServiceDialog = ({ service, onClose, open }: ServiceDialogProps) => {
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
      <DialogContent>
        <DialogContentText gutterBottom>
          {service?.description}
        </DialogContentText>
        {service?.tags.map((tag, index) => (
          <Chip key={index} label={tag} />
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;
