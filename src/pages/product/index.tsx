import { Box, Grid } from "@material-ui/core";
import { Container } from "@mui/joy";
import AppBarComponent from "../../components/AppBar";
import CardDescriptionProduct from "../../components/CardDescriptionProduct";
import CardSellerInfo from "../../components/CardSellerInfo";
import CardTitleProduct from "../../components/CardTitleProduct";
import CurrentImageGallery from "../../components/CurrentImageGallery";
import BackToTop from "../../components/Footer";
import GalleryGrid from "../../components/Gallery";
import InputComment from "../../components/inputComment";
import ListComments from "../../components/ListComments";
import { ContainerRoot } from "./style";

const ProductPage = () => {
  return (
    <>
      <AppBarComponent />
      <ContainerRoot>
        <Container sx={{ display: { md: "flex", xs: "none" } }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <CurrentImageGallery />
                <CardTitleProduct />
                <CardDescriptionProduct />
                <ListComments />
                <InputComment />
              </Grid>
              <Grid item xs={4}>
                <GalleryGrid />
                <CardSellerInfo
                  name="Bruce Wayne"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container sx={{ display: { md: "none", xs: "flex" } }}>
          <Box>
            <CurrentImageGallery />
            <CardTitleProduct />
            <CardDescriptionProduct />
            <GalleryGrid />
            <CardSellerInfo
              name="Bruce Wayne"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            />
            <ListComments />
            <InputComment />
          </Box>
        </Container>
        <BackToTop />
      </ContainerRoot>
    </>
  );
};

export default ProductPage;
