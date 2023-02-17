import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Photo from "../../assets/photo_example.png";
import Photo2 from "../../assets/photo_example2.png";
import Photo3 from "../../assets/photo_example3.png";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { CurrentImageGalleryContext } from "../../contexts/gallery.context";
import { Container } from "@mui/system";

export default function GalleryGrid() {
  const photos = [Photo, Photo2, Photo3, Photo, Photo2, Photo3];
  const { setCurrentImage, setOpen } = useContext(CurrentImageGalleryContext);

  useEffect(() => {
    setOpen(false);
    setCurrentImage(photos[0]);
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Box
        sx={{
          width: { xs: "100%", md: "440px" },
          height: { md: "377px" },
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
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: "18px 26px", md: "36px 44px" },
          }}
        >
          {photos.map((photo, index) => (
            <Grid key={`photo_${index}`} item xs={4}>
              <CardActionArea
                onClick={() => setCurrentImage(photo)}
                sx={{
                  width: { xs: "100", md: 108 },
                  height: { xs: "100", md: 108 },
                }}
              >
                <Card
                  sx={{
                    width: { xs: "100", md: 108 },
                    height: { xs: "100", md: 108 },
                    backgroundColor: "#E9ECEF",
                    padding: 0,
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
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                    component="img"
                    image={photo}
                  />
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
