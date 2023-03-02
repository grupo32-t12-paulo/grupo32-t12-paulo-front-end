import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

interface IChildren {
  title: string;
  image: string;
  description: string;
  seller: string;
  km: number;
  year: number;
  price: string;
  id: number
}

export default function MediaCard({
  title,
  image,
  description,
  seller,
  km,
  year,
  price,
  id
}: IChildren) {
  return (
    <Card sx={{ width: "302px", boxShadow: "unset" }}>
      <CardMedia
        sx={{ height: 152, backgroundColor: "#E9ECEF", paddingTop: "10px" }}
        image={image}
        title="green iguana"
      />
      <CardContent sx={{ padding: "0" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            paddingTop: "5px",
            fontFamily: "Lexend",
            fontWeight: "600",
            fontSize: "16px",
            margin: 4,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#495057",
            fontFamily: "Inter",
            fontSize: "14px",
            textAlign: "justify",
            margin: 4,
          }}
        >
          {description}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            gap: "10px",
            marginTop: "14px",
            marginBottom: "10px",
            marginLeft: 4,
          }}
        >
          <Avatar
            alt={seller}
            src="/static/images/avatar/1.jpg"
            sx={{ width: 32, height: 32 }}
          />
          <Typography
            variant="body1"
            style={{
              color: "#495057",
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            {seller}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 4,
            marginTop: 15,
          }}
        >
          <div style={{ display: "flex", gap: "7px", padding: "0" }}>
            <Button
              variant="contained"
              style={{
                width: "85px",
                flexWrap: "nowrap",
                backgroundColor: "#EDEAFD",
                fontWeight: "500",
                fontSize: "14px",
                color: "#4529E6",
                boxShadow: "unset",
              }}
            >
              KM {km}
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#EDEAFD",
                fontWeight: "500",
                fontSize: "14px",
                color: "#4529E6",
                boxShadow: "unset",
              }}
            >
              {year}
            </Button>
          </div>
          <Typography
            variant="body2"
            style={{
              color: "#212529",
              fontFamily: "Lexend",
              fontSize: "16px",
              textAlign: "justify",
              lineHeight: "20px",
              marginRight: "10px",
            }}
          >
            R$ {price}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
