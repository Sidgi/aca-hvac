import React, {useEffect} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

type CustomDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactElement;
  title: string;
};

export default function CustomDialog({ open, setOpen, children, title }: CustomDialogProps) {
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  });

  return (
    <div>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
        scroll="paper"
        fullWidth
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {children}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
