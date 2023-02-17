import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { CurrentImageGalleryContext } from "../../contexts/gallery.context";

export default function CurrentImageGallery() {
  const { currentImage, handleOpenModal } = useContext(
    CurrentImageGalleryContext
  );

  return (
    <Container>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          maxWidth: { xs: "100vw", md: 752 },
          height: { xs: "auto", md: 355 },
          backgroundColor: "#E9ECEF",
          userSelect: "none",
        }}
      >
        {currentImage && (
          <CardActionArea
            sx={{ display: "flex" }}
            onClick={() => handleOpenModal()}
          >
            <CardMedia
              sx={{
                display: "flex",
                objectFit: "contain",
                width: { xs: "none", md: 441 },
                padding: { xs: "auto", md: "61px 156px 41px 155px" },
                pointerEvents: "none",
                userSelect: "none",
              }}
              component="img"
              image={currentImage}
            />
          </CardActionArea>
        )}
      </Card>
    </Container>
  );
}
