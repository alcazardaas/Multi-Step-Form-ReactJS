import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ModalComponent = ({ success, message, onClearData, onClose }) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography id="modal-title" variant="h5" component="h2">
          {success ? 'Success' : 'Error'}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>{message}</Typography>
        <Typography sx={{ mt: 2 }}>Do you want to clear the data and enter new information?</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" onClick={onClearData} sx={{ mr: 2 }}>Clear and Enter New Data</Button>
          <Button variant="outlined" onClick={onClose}>Stay Here</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
