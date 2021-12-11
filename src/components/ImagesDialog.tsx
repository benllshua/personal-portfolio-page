import * as React from 'react';

import { Dialog, DialogTitle } from '@mui/material';
import SwipeableImageViews from './SwipeableImageViews';

interface ImagesDialogProps {
  open: boolean;
  imageList: { label?: string; imgFileName: string }[];
  onClose: () => void;
}

const ImagesDialog = ({ onClose, imageList, open }: ImagesDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open}>
      {imageList.length ? (
        imageList.length === 1 ? (
          <img
            src={imageList[0].imgFileName}
            style={{ maxHeight: '80vh', maxWidth: '80vw' }}
          />
        ) : (
          <SwipeableImageViews imageList={imageList} />
        )
      ) : (
        <DialogTitle>No Images</DialogTitle>
      )}
    </Dialog>
  );
};

export default ImagesDialog;
