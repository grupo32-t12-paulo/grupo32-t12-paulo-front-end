import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Photo from "../../assets/photo_example.png";
import { Card, CardMedia } from "@mui/material";
import { Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function GalleryGrid() {
  const photos = [Photo, Photo, Photo, Photo, Photo, Photo];

  const [currentImage, setCurrentImage] = useState(photos[0]);
  return (
    <Box
      sx={{
        width: "440px",
        height: "377px",
        padding: "36px 44px",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Typography
        variant="h5"
        style={{
          color: "#212529",
          fontWeight: 600,
          fontSize: "20px",
          fontFamily: "Lexend, sans-serif",
        }}
      >
        Fotos
      </Typography>
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item xs={4}>
            <Button onClick={() => setCurrentImage(photo)}>
              <Card
                sx={{
                  width: 108,
                  maxWidth: 108,
                  height: 108,
                  maxHeight: 108,
                  backgroundColor: "#E9ECEF",
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  userSelect: "none",
                }}
              >
                <CardMedia
                  sx={{
                    overflow: "visible",
                    objectFit: "contain",
                    minWidth: "100",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                  component="img"
                  image={photo}
                />
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
