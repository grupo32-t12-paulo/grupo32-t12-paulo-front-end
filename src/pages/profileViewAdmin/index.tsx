import { Container } from "@mui/joy";
import { Box, List, ListItem, Typography } from "@mui/material";
import AppBarComponent from "../../components/AppBar";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ActionAreaCard from "../../components/CardAuction";
import MediaCard from "../../components/CardComponent";
import CardInfoSeller from "../../components/CardInfoSeller";
import { UserContext } from "../../contexts/user.context";
import { title } from "process";

export default function ProfileViewAdmin() {
  // const { annoucementUser, setId, user } = useContext(UserContext);

  // const { id } = useParams()
  // setId(id)


  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "200px",
        // background: "#E9ECEF"
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
            display: "flex",
            justifyContent: "center",
            width: "100%",
            position: "relative",
            top: "150px",
          }}
        >
          <CardInfoSeller />
        </div>
      </header>

      <Box sx={{ ml: { md: 6, xs: 7 }, mt: 6 }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "var(--Heading-2-600)" }}
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

      <Box sx={{ ml: { md: 6, xs: 7, minHeight: 350 } }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "var(--Heading-2-600)" }}
        >
          Carros
        </Typography>
        {/* {user.annoucements?.length !== 0 ? (
          <List
            sx={{
              display: "flex",
              overflow: "auto",
              pb: 2,
            }}
          >
            {user.annoucements?.map((car) => {
              if (car.vehicleType === "car") {
                return (
                  <ListItem sx={{ maxWidth: { md: 305 } }}>
                    <MediaCard
                      title={car.title}
                      image={car.coverImage}
                      description={car.description}
                      seller={user.name}
                      km={car.mileage}
                      year={car.year}
                      price={`${car.price}`}
                      annoucementId={`${car.annoucementId}`}
                      edit={true}
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
        )} */}
      </Box>
      <Box sx={{ ml: { md: 6, xs: 7 }, minHeight: 350 }} >
        <Typography
          variant="h5"
          style={{ fontWeight: "var(--Heading-2-600)" }}
        >
          Motos
        </Typography>
        {/* {user.annoucements?.length !== 0 ? (
          <List
            sx={{
              p: 0,
              display: "flex",
              overflow: "auto",
              pb: 2,
            }}
          >
            {annoucementUser.map((motorcycle) => {
              if (motorcycle.vehicleType === "motocycle") {
                return (
                  <ListItem sx={{ maxWidth: { md: 305 } }}>
                    <MediaCard
                      title={motorcycle.title}
                      image={motorcycle.coverImage}
                      description={motorcycle.description}
                      seller={user.name}
                      km={motorcycle.mileage}
                      year={motorcycle.year}
                      price={motorcycle.price}
                      edit={true}
                      annoucementId={`${motorcycle.annoucementId}`}
                    />
                  </ListItem>
                );
              }
            })}
          </List>
        ) : (
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: "var(--Heading-2-600)",
            }}
          >
            Não há anúncio de motos no momento
          </h2>
        )} */}
      </Box>
    </main >
  );
}
