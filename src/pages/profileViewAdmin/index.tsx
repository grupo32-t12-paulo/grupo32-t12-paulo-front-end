import { Container } from "@mui/joy";
import { Box, List, ListItem, Typography } from "@mui/material";
import AppBarComponent from "../../components/AppBar";
import ActionAreaCard from "../../components/CardAuction";
import MediaCard from "../../components/CardComponent";
import CardInfoSeller from "../../components/CardInfoSeller";


export default function ProfileViewAdmin() {

    return (
        <main
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    gap: "18rem",
                }
            }
        >
            <header
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        height: "357px",
                        background: "#4529E6",
                    }
                }
            >
                <AppBarComponent />
                <div
                    style={
                        {
                            position: "relative",
                            top: "150px"
                        }
                    }
                >
                    <CardInfoSeller typeUser="seller" />
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
                <List
                    sx={{
                        display: "flex",
                        gap: 0.1,
                        overflow: "auto",
                        pb: 2,
                    }}
                >
                    {/* {cars.map((car) => {
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
                    })} */}
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
                        {/* {motocycles.map((motocycle) => {
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
                        })} */}
                    </List>
                </Box>
            </Box>
        </main>
    );
};
