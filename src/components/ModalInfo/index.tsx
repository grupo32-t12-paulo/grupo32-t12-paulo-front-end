import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "16px",
  bgcolor: "background.paper",
  borderRadius: "8px",
  "@media (min-width: 375px)": {
    minWidth: "320px",
    maxWidth: "520px",
  },
};

interface IChildren {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalInfo({ open, setOpen }: IChildren) {
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "10",
              paddingBottom: "15",
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
              Sucesso!
            </Typography>
            <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
          </Box>
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
            Sua conta foi criada com sucesso!
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
            onClick={() => {
              navigate("/login");
              setOpen(false);
            }}
          >
            Ir para o login
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
