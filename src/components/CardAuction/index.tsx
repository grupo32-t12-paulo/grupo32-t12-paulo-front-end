import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VehicleData from "../VehicleData";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AvatarComponent } from "../Avatar";

interface IProps {
  annoucementsId?: string;
  edit?: boolean;
}

export default function ActionAreaCard({ annoucementsId, edit }: IProps) {
  return (
    <Card sx={{ maxWidth: 735 }}>
      <CardActionArea
        style={{
          display: "flex",
          minHeight: "326px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.29) 0%, #000000 100%),
                            url("https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960"
                            `,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "326px",
            justifyContent: "space-around",
            boxSizing: "border-box",
            padding: "10 20px",
          }}
        >
          <div
            style={{
              width: "123px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              padding: "0 2px",
              boxSizing: "border-box",
              justifyContent: "space-around",
              borderRadius: "32px",
              background: "#FFFFFF",
            }}
          >
            <AccessTimeIcon style={{ color: "#4529E6" }} />
            <span style={{ fontSize: "16px" }}>01:58:00</span>
          </div>
          <div>
            <Typography>
              <h3
                style={{
                  color: "#FDFDFD",
                  fontSize: "20px",
                }}
              >
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
              </h3>
              <p style={{ color: "#CED4DA", fontSize: "16px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </p>
            </Typography>

            <Typography
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <AvatarComponent backgroundA="#4529E6" colorP="#FFFFFF" />
              <VehicleData
                colorP="#FFFFFF"
                colorSpanYQ="#4529E6"
                backgroundYQ="#EDEAFD"
                mileage={4000}
                price={"8000"}
                year={1999}
              />
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <Button
        variant="contained"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "62px",
          background: "#4529E6",
          fontSize: "16px",
          padding: "0 20px",
          borderTopLeftRadius: "0",
          WebkitBorderTopRightRadius: "0",
        }}
      >
        Acessar página do leilão
        <ArrowForwardIcon />
      </Button>
    </Card>
  );
}
