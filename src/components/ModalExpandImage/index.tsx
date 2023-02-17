import { CardMedia, IconButton, Modal, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { CurrentImageGalleryContext } from "../../contexts/gallery.context";
import x from "../../assets/x.svg";

export default function ModalExpandImage() {
  const { open, handleCloseModal, currentImage } = useContext(
    CurrentImageGalleryContext
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              width: { xs: "80%", md: "37%" },
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontFamily: "Lexend, sans-serif",
                }}
              >
                Imagem do veículo
              </Typography>
              <IconButton onClick={() => handleCloseModal()}>
                <img src={x} alt="" />
              </IconButton>
            </Box>
            <CardMedia
              sx={{
                marginTop: "48px",
                overflow: "visible",
                objectFit: "contain",
                pointerEvents: "none",
                userSelect: "none",
                bgcolor: "#E9ECEF",
              }}
              component="img"
              image={currentImage}
            />
          </Box>
        </Container>
      </Modal>
    </>
  );
}
