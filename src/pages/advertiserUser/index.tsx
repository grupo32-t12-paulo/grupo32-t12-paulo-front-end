import AppBarComponent from "../../components/AppBar";
import CardInfoSeller from "../../components/CardInfoSeller";
import MediaCard from "../../components/CardComponent";
import BackToTop from "../../components/Footer";
import { ContainerRoot } from "./style";
import { Container } from "@mui/joy";
import { List, ListItem } from "@mui/material";
import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { UserContext } from "../../contexts/user.context";

const AdvertiserUser = () => {
  const { cars, motorcycles } = useContext(AnnouncementContext);
  const { user } = useContext(UserContext);
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

          {cars.length ? (
            <List
              sx={{
                display: "flex",
                gap: 0.1,
                overflow: "auto",
                pb: 2,
              }}
            >
              {cars.map((car) => (
                <ListItem>
                  <MediaCard
                    title={car.title}
                    image={car.coverImage}
                    description={car.description}
                    seller={car.adType}
                    km={car.mileage}
                    year={car.year}
                    price={car.price}
                  />
                </ListItem>
              ))}
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

          <Box>
            <Typography
              variant="h5"
              style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
            >
              Motos
            </Typography>

            {motorcycles.length ? (
              <List
                sx={{
                  p: 0,
                  display: "flex",
                  overflow: "auto",
                  pb: 2,
                }}
              >
                {motorcycles.map((motorcycle) => (
                  <ListItem>
                    <MediaCard
                      title={motorcycle.title}
                      image={motorcycle.coverImage}
                      description={motorcycle.description}
                      seller={motorcycle.adType}
                      km={motorcycle.mileage}
                      year={motorcycle.year}
                      price={motorcycle.price}
                    />
                  </ListItem>
                ))}
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
