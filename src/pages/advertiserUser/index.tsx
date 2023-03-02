import AppBarComponent from "../../components/AppBar";
import CardInfoSeller from "../../components/CardInfoSeller";
import MediaCard from "../../components/CardComponent";
import BackToTop from "../../components/Footer";
import { ContainerRoot } from "./style";
import { Container } from "@mui/joy";
import { List, ListItem } from "@mui/material";
import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const AdvertiserUser = () => {
  const { annoucementUser, listAnnouncementProfile } = useContext(UserContext);
  listAnnouncementProfile();
  console.log("oi", annoucementUser);
  return (
    <>
      <AppBarComponent />

      <ContainerRoot>
        <Container>
          <CardInfoSeller />
          <Typography
            variant="h5"
            style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
          >
            Carros
          </Typography>

          <List
            sx={{
              display: "flex",
              gap: 0.1,
              overflow: "auto",
              pb: 2,
            }}
          >
            {annoucementUser.map((car) => {
              if (car.adType === "car") {
                return (
                  <ListItem>
                    <MediaCard
                      title={car.title}
                      image={car.coverImage}
                      description={car.description}
                      seller={car.adType}
                      km={car.mileage}
                      year={car.year}
                      price={car.price}
                      id={car.annoucementId}
                    />
                  </ListItem>
                );
              }
            })}
          </List>

          <Box>
            <Typography
              variant="h5"
              style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
            >
              Motos
            </Typography>

            {annoucementUser.length ? (
              <List
                sx={{
                  p: 0,
                  display: "flex",
                  overflow: "auto",
                  pb: 2,
                }}
              >
                {annoucementUser.map((motorcycle) => {
                  if (motorcycle.adType === "motocycle") {
                    return (
                      <ListItem>
                        <MediaCard
                          title={motorcycle.title}
                          image={motorcycle.coverImage}
                          description={motorcycle.description}
                          seller={motorcycle.adType}
                          km={motorcycle.mileage}
                          year={motorcycle.year}
                          price={motorcycle.price}
                          id={motorcycle.annoucementId}
                        />
                      </ListItem>
                    );
                  }
                })}
              </List>
            ) : (
              <h2
                style={{
                  margin: "20px",
                  fontSize: "1rem",
                  fontWeight: "var(--Heading-2-600)",
                }}
              >
                Não possui anúncio de carros no momento
              </h2>
            )}
          </Box>
        </Container>
      </ContainerRoot>
      <BackToTop />
    </>
  );
};

export default AdvertiserUser;
