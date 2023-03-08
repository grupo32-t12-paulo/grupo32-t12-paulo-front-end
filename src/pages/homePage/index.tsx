import { Box, List, ListItem, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppBarComponent from "../../components/AppBar";
import ActionAreaCard from "../../components/CardAuction";
import MediaCard from "../../components/CardComponent";
import { CardHeader } from "../../components/CardHeader";
import BackToTop from "../../components/Footer";
import { AnnouncementContext } from "../../contexts/announcement.context";

const HomePage = () => {
  const { cars, motorcycles } = useContext(AnnouncementContext);
  const navigate = useNavigate();

  return (
    <>
      <AppBarComponent />
      <CardHeader />

      <Box id="auction" sx={{ ml: { md: 15, xs: 7 }, mt: 6 }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
        >
          Leilão
        </Typography>
        <List
          sx={{
            display: "flex",
            gap: 0.1,
            overflow: "auto",
            pb: 2,
          }}
        >
          <ListItem sx={{ minWidth: { md: 725, xs: 420 } }}>
            <ActionAreaCard />
          </ListItem>
          <ListItem sx={{ minWidth: { md: 725, xs: 420 } }}>
            <ActionAreaCard />
          </ListItem>
          <ListItem sx={{ minWidth: { md: 725, xs: 420 } }}>
            <ActionAreaCard />
          </ListItem>
        </List>
      </Box>

      <Box id="cars" sx={{ ml: { md: 15, xs: 7 } }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
        >
          <span>Carros</span>
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
              <ListItem
                onClick={() => navigate(`announcement/${car.annoucementId}`)}
                sx={{ ":hover": { cursor: "pointer" } }}
              >
                <MediaCard
                  title={car.title}
                  description={car.description}
                  image={car.coverImage}
                  km={car.mileage}
                  price={car.price}
                  seller={car.adType}
                  year={car.year}
                  key={car.annoucementId}
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
            Não há anúncio de carros no momento
          </h2>
        )}

        <Box id="motorcycle">
          <Typography
            variant="h5"
            style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
          >
            <span>Motos</span>
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
              Não há anúncio de motos no momento
            </h2>
          )}
        </Box>
      </Box>
      <BackToTop />
    </>
  );
};

export default HomePage;
