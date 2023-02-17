import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "16px",
  bgcolor: "background.paper",
  borderRadius: "8px",
  '@media (min-width: 375px)': {
    minWidth: "320px",
    maxWidth: "520px",
  },
};

export default function ModalSuccess() {
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "18px",
              paddingBottom: "48px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                textAlign: "justify",
                fontWeight: "500",
                color: "#212529",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              Sucesso
            </Typography>
            <CloseIcon onClick={handleClose} style={{cursor:"pointer"}} />
          </div>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{
              textAlign: "justify",
              fontWeight: "500",
              color: "#000000",
              fontFamily: "Lexend",
              fontSize: "16px",
              paddingBottom: "30px",
            }}
          >
            Seu anúncio foi criado com sucesso!
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              color: "#495057",
              fontFamily: "Inter",
              fontSize: "16px",
              paddingBottom: "38px",
            }}
          >
            Agora você poderá ver seus negócios crescendo em grande escala
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}