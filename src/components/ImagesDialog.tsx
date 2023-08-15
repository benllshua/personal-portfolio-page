'use client';

import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  open: boolean;
  src: string;
  label: string;
  description?: string;
  onClose: () => void;
}

const ImagesDialog: FC<Props> = ({ onClose, label, src, open, description }) => {
  return (
    <Dialog onClose={onClose} open={open} maxWidth="lg">
      <DialogTitle>{label}</DialogTitle>
      <DialogContent>
        <Image layout="fill" src={src} alt={label} />
      </DialogContent>
      {description && <DialogActions>{description}</DialogActions>}
    </Dialog>
  );
};

export default ImagesDialog;
