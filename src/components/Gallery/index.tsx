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

interface IChildren {
  arrImages: string[] | undefined;
}

export default function GalleryGrid({ arrImages }: IChildren) {
  if (arrImages) {
    if (arrImages.length < 6) {
      let acc = arrImages.length;
      arrImages.map((image, index) => {
        if (index === arrImages.length - 1) {
          while (acc < 6) {
            arrImages.push(image);

            acc = acc + 1;
          }
        }
      });
    }
  }
  const photos = arrImages;

  const { setCurrentImage, setOpen, handleImageError } = useContext(
    CurrentImageGalleryContext
  );

  useEffect(() => {
    setOpen(false);
    if (photos) {
      setCurrentImage(photos[0]);
    }
  }, []);

  return (
    <Container
      sx={{
        mt: 12,
        mb: 5,
        p: 4,
        borderRadius: 1,
        background: "white",
      }}
    >
      <Typography
        variant="h5"
        style={{
          color: "#212529",
          fontWeight: 600,
          fontSize: "20px",
          fontFamily: "Lexend, sans-serif",
          marginBottom: "30px",
        }}
      >
        Fotos
      </Typography>
      <Grid
        container
        spacing={0.99}
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        {photos?.map((photo, index) => (
          <Grid key={`photo_${index}`} item xs={4}>
            <CardActionArea onClick={() => setCurrentImage(photo)}>
              <Card
                sx={{
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
                    p: 0.5,
                  }}
                  component="img"
                  image={photo}
                  onError={handleImageError}
                />
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
