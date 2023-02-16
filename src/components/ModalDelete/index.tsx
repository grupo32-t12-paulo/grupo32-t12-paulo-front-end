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
  width: "320px",
  padding: "16px",
  maxWidth: "520px",
  height: "387px",
  bgcolor: "background.paper",
  borderRadius: "8px",
};

export default function ModalDelete() {
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
                paddingTop: "30px",
                paddingBottom: "48px",
              }}
            >
              Excluir anúncio
            </Typography>
            <CloseIcon onClick={handleClose} />
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
            Tem certeza que deseja remover este anúncio?
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              color: "#495057",
              fontFamily: "Inter",
              fontSize: "16px",
              paddingBottom: "30px",
            }}
          >
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "25px",
            }}
          >
            <Button
              onClick={handleClose}
              style={{
                backgroundColor: "#DEE2E6",
                color: "#495057",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "4px",
                textTransform: "none",
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleOpen}
              style={{
                backgroundColor: "#FDD8D8",
                color: "#CD2B31",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "4px",
                textTransform: "none",
              }}
            >
              Sim, excluir anúncio
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
