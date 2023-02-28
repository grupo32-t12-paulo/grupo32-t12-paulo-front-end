import { Box, CircularProgress, Grid } from "@material-ui/core";
import { Container } from "@mui/joy";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppBarComponent from "../../components/AppBar";
import CardDescriptionProduct from "../../components/CardDescriptionProduct";
import CardSellerInfo from "../../components/CardSellerInfo";
import CardTitleProduct from "../../components/CardTitleProduct";
import CurrentImageGallery from "../../components/CurrentImageGallery";
import BackToTop from "../../components/Footer";
import GalleryGrid from "../../components/Gallery";
import InputComment from "../../components/inputComment";
import ListComments from "../../components/ListComments";
import { AnnouncementDetailsContext } from "../../contexts/announcementDetails.context";
import { ContainerRoot } from "./style";

const ProductPage = () => {
  const { setId, announcement, comments } = useContext(
    AnnouncementDetailsContext
  );
  const { id } = useParams();
  setId(id);

  if (announcement && comments) {
    return (
      <>
        <AppBarComponent />
        <ContainerRoot>
          <Container sx={{ display: { md: "flex", xs: "none" } }}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <CurrentImageGallery />
                  <CardTitleProduct
                    title={announcement.title}
                    year={announcement.year}
                    mileage={announcement.mileage}
                    price={announcement.price}
                  />
                  <CardDescriptionProduct
                    description={announcement.description}
                  />
                  <ListComments comments={comments} />
                  <InputComment />
                </Grid>
                <Grid item xs={4}>
                  <GalleryGrid />
                  <CardSellerInfo
                    name={announcement.user.name}
                    description={announcement.user.description}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Container sx={{ display: { md: "none", xs: "flex" } }}>
            <Box>
              <CurrentImageGallery />
              <CardTitleProduct
                title={announcement.title}
                year={announcement.year}
                mileage={announcement.mileage}
                price={announcement.price}
              />
              <CardDescriptionProduct description={announcement.description} />
              <GalleryGrid />
              <CardSellerInfo
                name={announcement.user.name}
                description={announcement.user.description}
              />
              <ListComments comments={comments} />
              <InputComment />
            </Box>
          </Container>
          <BackToTop />
        </ContainerRoot>
      </>
    );
  } else {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }
};

export default ProductPage;