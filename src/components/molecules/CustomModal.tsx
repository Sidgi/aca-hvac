import React from 'react';
// import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';

export default function CustomModal({open, setOpen, children, title}) {
  return (
      <Modal
        style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={open}
        onClose={(e) => setOpen(false)}
      >
        {children}
      </Modal>
  );
}