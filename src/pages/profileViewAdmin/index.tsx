import { Container } from "@mui/joy";
import { Box, List, ListItem, Typography } from "@mui/material";
import AppBarComponent from "../../components/AppBar";
import { useContext } from "react";
import ActionAreaCard from "../../components/CardAuction";
import MediaCard from "../../components/CardComponent";
import CardInfoSeller from "../../components/CardInfoSeller";
import { UserContext } from "../../contexts/user.context";

export default function ProfileViewAdmin() {
  const { annoucementUser } = useContext(UserContext);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18rem",
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "357px",
          background: "#4529E6",
        }}
      >
        <AppBarComponent />
        <div
          style={{
            position: "relative",
            top: "150px",
          }}
        >
          <CardInfoSeller />
        </div>
      </header>

      <Box sx={{ ml: { md: 15, xs: 7 }, mt: 6 }}>
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

      <Box sx={{ ml: { md: 15, xs: 7 } }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
        >
          Carros
        </Typography>
        {annoucementUser.find((e) => e.adType === "car") ? (
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
            Não há anúncio de motos no momento
          </h2>
        )}

        <Box>
          <Typography
            variant="h5"
            style={{ fontWeight: "var(--Heading-2-600)", margin: "20px" }}
          >
            Motos
          </Typography>
          {annoucementUser.find((e) => e.adType === "motocycle") ? (
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
              Não há anúncio de motos no momento
            </h2>
          )}
        </Box>
      </Box>
    </main>
  );
}
