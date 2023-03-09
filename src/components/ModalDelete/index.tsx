import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { AnnouncementDetailsContext } from "../../contexts/announcementDetails.context";

interface IProps {
  annoucementId?: string;
}

const style = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  padding: "16px",
  maxWidth: "520px",
  minHeight: "331px",
  bgcolor: "background.paper",
  borderRadius: "8px",
};

export default function ModalDelete({ annoucementId }: IProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleDeleteAnnouncements } = useContext(AnnouncementDetailsContext);

  return (
    <>
      <Button
        onClick={handleOpen}
        style={{
          textTransform: "none",
          height: "40px",
          minWidth: "202px",
          background: "#DEE2E6",
          color: "#495057",
          // fontSize: "16px"
        }}
      >
        Excluir anúncio
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
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
                fontWeight: "500",
                color: "#212529",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              Excluir anúncio
            </Typography>
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{
                textAlign: "justify",
                fontWeight: "500",
                color: "#000000",
                fontFamily: "Lexend",
                fontSize: "16px",
                // paddingBottom: "30px",
              }}
            >
              Tem certeza que deseja remover este anúncio?
            </Typography>
            <Typography
              style={{
                // textAlign: "justify",
                color: "#495057",
                fontFamily: "Inter",
                lineHeight: "28px",
                fontSize: "16px",
                paddingBottom: "30px",
              }}
            >
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
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
              onClick={(e) => {
                handleDeleteAnnouncements(annoucementId);
                return handleClose
              }}
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
    </>
  );
}
