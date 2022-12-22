import React from 'react';
// import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';

export default function CustomModal({open, setOpen, children, title}) {
  return (
    <div>
      <Modal
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={open}
        onClose={(e) => setOpen(false)}
      >
        {children}
      </Modal>
    </div>
  );
}
