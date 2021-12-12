import * as React from 'react';

import { Dialog, DialogTitle } from '@mui/material';
import SwipeableImageViews from './SwipeableImageViews';
import Image from 'next/image';

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
          <div style={{ maxHeight: '80vh', maxWidth: '80vw' }}>
            <Image
              src={imageList[0].imgFileName}
              layout="fill"
              alt={imageList[0].imgFileName}
            />
          </div>
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
