import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@material-ui/core";
import { Divider } from "@mui/material";
import api from "../../services/api";
import { toast } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
};

interface IChildren {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
}

export default function ForgotPasswordModal({
  handleOpen,
  handleClose,
  open,
}: IChildren) {
  async function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    api
      .post("/forgot-password", { email: e.target[0].value })
      .then((response) => {
        e.target[0].value = "";
        handleClose();
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response.data.error);
      });
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Esqueci minha senha
          </Typography>
          <Divider />
          <Typography variant="body1" mt={2} mb={4} color={"var(--grey3)"}>
            Esqueceu sua senha? Sem problema, é só digitar seu e-mail e se você
            estiver cadatrado vamos lhe enviar um link para redefinição de
            senha. Atenção esse link é válido por somente 10 minutos.
          </Typography>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Input placeholder="Digite seu e-mail" required />
              <Button
                type="submit"
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
          </form>
        </Box>
      </Modal>
    </div>
  );
}
