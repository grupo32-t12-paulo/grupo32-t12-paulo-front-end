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
import decode from "jwt-decode";
import BackToTop from "../../components/Footer/index";
import CardInfoAdvertiser from "../../components/CardInfoAdvertiser";


interface IToken {
  id: string;
  isActive: boolean;
  isAdvertiser: boolean;
}

export default function ProfileViewAdmin() {
  const { annoucementUser, setUserId, userAll } = useContext(UserContext);
  const token = localStorage.getItem("@motorshop:token");
  const resJWT: IToken = decode(`${token}`);
  setUserId(`${resJWT.id}`)

  return (
    <>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15rem",
          background: "#F1F3F5",
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
            <CardInfoAdvertiser />
          </div>
        </header>

        <Box sx={
          {
            ml: { md: 6, xs: 7 },
            mt: 6,
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }
        }
        >
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
              <ActionAreaCard edit={true} />
            </ListItem>
            <ListItem sx={{ minWidth: { md: 725, xs: 420 } }}>
              <ActionAreaCard edit={true} />
            </ListItem>
            <ListItem sx={{ minWidth: { md: 725, xs: 420 } }}>
              <ActionAreaCard edit={true} />
            </ListItem>
          </List>
        </Box>

        <Box sx={
          {
            ml: { md: 6, xs: 7 },
            minHeight: 350,
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }
        }>
          <Typography
            variant="h5"
            style={{ fontWeight: "var(--Heading-2-600)" }}
          >
            Carros
          </Typography>
          {userAll.annoucements?.find(e => e.vehicleType === "car") ? (
            <List
              sx={{
                display: "flex",
                overflow: "auto",
                pb: 2,
              }}
            >
              {userAll.annoucements?.map((car) => {
                if (car.vehicleType === "car") {
                  return (
                    <ListItem sx={{ maxWidth: { md: 312 } }}>
                      <MediaCard
                        title={car.title}
                        image={car.coverImage}
                        description={car.description}
                        seller={userAll.name}
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
                width: "100%",
                height: "356px",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "var(--grey2)",
              }}
            >
              Não há anúncio de carros no momento
            </h2>
          )}
        </Box>
        <Box sx={
          {
            ml: { md: 6, xs: 7 }, minHeight: 350,
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }
        } >
          <Typography
            variant="h5"
            style={{ fontWeight: "var(--Heading-2-600)" }}
          >
            Motos
          </Typography>
          {userAll.annoucements?.find(e => e.vehicleType === "motocycle") ? (
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
                        seller={userAll.name}
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
                width: "100%",
                height: "356px",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "var(--grey2)",
              }}
            >
              Não há anúncio de motos no momento
            </h2>
          )}
        </Box>
      </main >
      <BackToTop />
    </>
  );
}
