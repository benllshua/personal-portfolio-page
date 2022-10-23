import { Dialog, DialogTitle } from '@mui/material';
import SwipeableImageViews from './SwipeableImageViews';

interface ImagesDialogProps {
  open: boolean;
  imageList: { label?: string; imgFileName: string }[];
  onClose: () => void;
}

const ImagesDialog = ({ onClose, imageList, open }: ImagesDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open} maxWidth="lg">
      {imageList.length ? (
        imageList.length === 1 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageList[0].imgFileName} alt={imageList[0].imgFileName} />
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
