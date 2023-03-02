import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@material-ui/core';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "4px"
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Digite o seu email
            </Typography>
            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <Input />
            <Button
              style={{
                backgroundColor: "#4529E6",
                borderRadius: "4px",
                width: "132px",
                height: "38px",
                textTransform: "none",
                color: "#FFFFFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
            Enviar
            </Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}