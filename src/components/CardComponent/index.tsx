import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 312, boxShadow: "unset" }}>
      <CardMedia
        sx={{ height: 152, backgroundColor: "#E9ECEF", paddingTop: "10px" }}
        image="https://i.ibb.co/JBPx8BM/EXTERIOR-front-Side-Pilot-Near-1653845164710-removebg-preview-1.png"
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
            fontSize: "16px"
          }}
        >
          Modelo do carro
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#495057",
            fontFamily: "Inter",
            fontSize: "14px",
            textAlign: "justify",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            gap: "10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Avatar alt="Everton Vieira" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
          <Typography
            variant="body1"
            style={{
              color: "#495057",
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Everton Vieira
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "10px", padding: "0" }}>
            <Button
              variant="contained"
              style={{
                width: "50px",
                height: "32px",
                backgroundColor: "#EDEAFD",
                fontWeight: "500",
                fontSize: "14px",
                color: "#4529E6",
                boxShadow: "unset",
              }}
            >
              KM
            </Button>
            <Button
              variant="contained"
              style={{
                width: "50px",
                height: "32px",
                backgroundColor: "#EDEAFD",
                fontWeight: "500",
                fontSize: "14px",
                color: "#4529E6",
                boxShadow: "unset",
              }}
            >
              2019
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
            }}
          >
            R$ 00.000,00
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
