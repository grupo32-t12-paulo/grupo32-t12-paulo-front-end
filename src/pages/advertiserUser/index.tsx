import AppBarComponent from "../../components/AppBar";
import MediaCard from "../../components/CardComponent";
import BackToTop from "../../components/Footer";
import { ContainerRoot } from "./style";
import { Container, Stack } from "@mui/joy";
import { CardMedia, Chip, List, ListItem } from "@mui/material";
import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { IAnnouncement } from "../../contexts/announcement.context";
import { useNavigate, useParams } from "react-router-dom";
import CardInfoAdvertiser from "../../components/CardInfoAdvertiser";

const AdvertiserUser = () => {
  const { annoucementUser, setUserId, seller } = useContext(UserContext);
  const { idAdvertiser } = useParams();
  setUserId(idAdvertiser);
  const cars: IAnnouncement[] = [];
  const motorcycles: IAnnouncement[] = [];

  annoucementUser.map((vehicle) => {
    if (vehicle.vehicleType === "car") {
      cars.push(vehicle);
    } else {
      motorcycles.push(vehicle);
    }
  });

  const navigate = useNavigate();

  return (
    <>
      <AppBarComponent />

      <ContainerRoot>
        <Container>
          <Box style={{ marginTop: "60px", paddingTop: "60px" }}>
            <CardInfoAdvertiser />
          </Box>
          <Typography
            variant="h5"
            style={{
              fontWeight: "var(--Heading-2-600)",
              marginTop: "80px",
              marginLeft: "20px",
            }}
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
            {cars.length > 0 ? (
              cars.map((car) => {
                return (
                  <ListItem
                    sx={{ ":hover": { cursor: "pointer" } }}
                    onClick={() =>
                      navigate(`/announcement/${car.annoucementId}`)
                    }
                  >
                    <Container>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {car.isActive === true ? (
                          <Stack
                            direction="row"
                            sx={{
                              display: "flex",
                              position: "absolute",
                              backgroundColor: "var(--brand1)",
                              color: "var(--whiteFixed)",
                              margin: "10px",
                              padding: "3px 6px",
                              zIndex: "1",
                              fontSize: "0.8rem",
                            }}
                            spacing={1}
                          >
                            Ativo
                          </Stack>
                        ) : (
                          <Stack
                            direction="row"
                            sx={{
                              display: "flex",
                              position: "absolute",
                              backgroundColor: "var(--grey4)",
                              color: "var(--whiteFixed)",
                              margin: "10px",
                              padding: "3px 6px",
                              zIndex: "1",
                              fontSize: "0.8rem",
                            }}
                            spacing={1}
                          >
                            Inativo
                          </Stack>
                        )}
                      </Box>

                      <MediaCard
                        title={car.title}
                        image={car.coverImage}
                        description={car.description}
                        seller={seller?.name}
                        km={car.mileage}
                        year={car.year}
                        price={car.price}
                      />
                    </Container>
                  </ListItem>
                );
              })
            ) : (
              <ListItem>
                <Typography>
                  Esse anunciante não possui anúncio de carros.
                </Typography>
              </ListItem>
            )}
          </List>

          <Box>
            <Typography
              variant="h5"
              style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
            >
              Motos
            </Typography>
            <List
              sx={{
                p: 0,
                display: "flex",
                overflow: "auto",
                pb: 2,
              }}
            >
              {motorcycles.length > 0 ? (
                motorcycles.map((motorcycle) => {
                  return (
                    <ListItem
                      sx={{ ":hover": { cursor: "pointer" } }}
                      onClick={() =>
                        navigate(`/announcement/${motorcycle.annoucementId}`)
                      }
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {motorcycle.isActive === true ? (
                          <Stack
                            direction="row"
                            sx={{
                              display: "flex",
                              position: "absolute",
                              backgroundColor: "var(--brand1)",
                              color: "var(--whiteFixed)",
                              margin: "10px",
                              padding: "3px 6px",
                              zIndex: "1",
                              fontSize: "0.8rem",
                            }}
                            spacing={1}
                          >
                            Ativo
                          </Stack>
                        ) : (
                          <Stack
                            direction="row"
                            sx={{
                              display: "flex",
                              position: "absolute",
                              backgroundColor: "var(--grey4)",
                              color: "var(--whiteFixed)",
                              margin: "10px",
                              padding: "3px 6px",
                              zIndex: "1",
                              fontSize: "0.8rem",
                            }}
                            spacing={1}
                          >
                            Inativo
                          </Stack>
                        )}
                      </Box>

                      <MediaCard
                        title={motorcycle.title}
                        image={motorcycle.coverImage}
                        description={motorcycle.description}
                        seller={seller?.name}
                        km={motorcycle.mileage}
                        year={motorcycle.year}
                        price={motorcycle.price}
                      />
                    </ListItem>
                  );
                })
              ) : (
                <ListItem>
                  <Typography>
                    Esse anunciante não possui anúncio de motos.
                  </Typography>
                </ListItem>
              )}
            </List>
          </Box>
        </Container>
      </ContainerRoot>
      <BackToTop />
    </>
  );
};

export default AdvertiserUser;
