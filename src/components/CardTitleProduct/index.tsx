import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import VehicleData from "../VehicleData";

export default function CardTitleProduct() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        mr: 1.2,
      }}
    >
      <CardContent>
        <h2 style={{ fontSize: "20px", color: "#212529" }}>
          Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
        </h2>
      </CardContent>
      <CardContent
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
      >
        <VehicleData backgroundYQ="#EDEAFD" colorSpanYQ="#4529E6" />
        <Button
          variant="contained"
          component="label"
          style={{
            width: "100px",
            height: "38px",
            background: "#4529E6",
          }}
        >
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
}
