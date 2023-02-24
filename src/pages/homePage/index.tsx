import { Container } from "@mui/joy";
import { Box, List, ListItem, Typography } from "@mui/material";
import AppBarComponent from "../../components/AppBar";
import ActionAreaCard from "../../components/CardAuction";
import MediaCard from "../../components/CardComponent";
import { CardHeader } from "../../components/CardHeader";
import BackToTop from "../../components/Footer";

const HomePage = () => {
  const cars = [
    {
      title: "Chevrolet Vectra",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Hugo Strange",
      km: "650",
      year: 2012,
      price: "30.000,00",
    },
    {
      title: "Ford Mustang",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Bruce Wayne",
      km: "100",
      year: 2022,
      price: "150.000,00",
    },
    {
      title: "Ford Intercept",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Barbara Gordon",
      km: "200",
      year: 2021,
      price: "120.000,00",
    },
    {
      title: "Volkswagen Virtus",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Alfred Pennyworth",
      km: "10",
      year: 2020,
      price: "60.000,00",
    },
    {
      title: "Renault Captur",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Selina Kyle",
      km: "40",
      year: 2021,
      price: "70.000,00",
    },
  ];

  const motocycles = [
    {
      title: "Chevrolet Vectra",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Hugo Strange",
      km: "650",
      year: 2012,
      price: "30.000,00",
    },
    {
      title: "Ford Mustang",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Bruce Wayne",
      km: "100",
      year: 2022,
      price: "150.000,00",
    },
    {
      title: "Ford Intercept",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Barbara Gordon",
      km: "200",
      year: 2021,
      price: "120.000,00",
    },
    {
      title: "Volkswagen Virtus",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Alfred Pennyworth",
      km: "10",
      year: 2020,
      price: "60.000,00",
    },
    {
      title: "Renault Captur",
      image:
        "https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      seller: "Selina Kyle",
      km: "40",
      year: 2021,
      price: "70.000,00",
    },
  ];
  return (
    <>
      <AppBarComponent />
      <CardHeader />

      <Box>
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

      <Container>
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
          {cars.map((car) => {
            return (
              <ListItem>
                <MediaCard
                  title={car.title}
                  image={car.image}
                  description={car.description}
                  seller={car.seller}
                  km={car.km}
                  year={car.year}
                  price={car.price}
                />
              </ListItem>
            );
          })}
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
            {motocycles.map((motocycle) => {
              return (
                <ListItem>
                  <MediaCard
                    title={motocycle.title}
                    image={motocycle.image}
                    description={motocycle.description}
                    seller={motocycle.seller}
                    km={motocycle.km}
                    year={motocycle.year}
                    price={motocycle.price}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Container>
      <BackToTop />
    </>
  );
};

export default HomePage;
