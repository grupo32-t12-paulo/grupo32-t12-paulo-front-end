import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import VehicleData from "../VehicleData";

interface IChildren {
  title: string;
  year: number;
  mileage: number;
  price: string;
}

export default function CardTitleProduct({
  title,
  mileage,
  price,
  year,
}: IChildren) {
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
        <h2 style={{ fontSize: "20px", color: "#212529" }}>{title}</h2>
      </CardContent>
      <CardContent
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
      >
        <VehicleData
          backgroundYQ="#EDEAFD"
          colorSpanYQ="#4529E6"
          mileage={mileage}
          price={price}
          year={year}
        />
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
