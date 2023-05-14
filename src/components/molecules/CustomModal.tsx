import React from 'react';
// import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import {
  Box,
  Typography,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';

type CustomModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactElement;
    title: string;
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: {
        xs: '40vh',
        md: '50vh',
        lg: '50vh',
    },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 5,
};

export default function CustomModal({
  open,
  setOpen,
  children,
  title,
}: CustomModalProps) {
    return (
      <Modal
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={open}
        onClose={(e) => setOpen(false)}
      >
        <Box sx={style}>
          <Typography
            variant="h3"
            gutterBottom
            textAlign="center"
            component="h1"
          >
            {title}
          </Typography>
          {children}
        </Box>
      </Modal>
    );
}
