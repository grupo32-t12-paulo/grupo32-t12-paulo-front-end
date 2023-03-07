import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

export default function CardInfoAdvertiser() {
  const { seller } = useContext(UserContext);
  let letters = "";
  if (seller) {
    const arrName = seller.name.split(" ");
    if (arrName.length > 1) {
      const first = arrName[0].split("");
      const final = arrName[arrName.length - 1].split("");
      const letterFirst = first[0];
      const letterFinal = final[0];
      letters = `${letterFirst}${letterFinal}`;
    } else {
      const first = arrName[0].split("");
      const letterFirst = first[0];
      letters = `${letterFirst}`;
    }
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1240px",
        height: "394px",
        backgroundColor: "#FDFDFD",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          paddingTop: "40px",
        }}
      >
        <div style={{ paddingBottom: "24px" }}>
          <Avatar
            alt={letters}
            src="/static/images/avatar/1.jpg"
            sx={{
              width: 104,
              height: 104,
              fontSize: 36,
              backgroundColor: "#4529E6",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "10px", paddingBottom: "24px" }}>
          <Typography
            style={{
              fontFamily: "Lexend",
              fontWeight: "600",
              fontSize: "20px",
              color: "#212529",
            }}
          >
            {seller?.name}{" "}
          </Typography>
          {seller?.isAdvertiser && (
            <Button
              variant="contained"
              style={{
                width: "92px",
                height: "32px",
                color: "#4529E6",
                backgroundColor: "#EDEAFD",
                fontWeight: "500",
                fontSize: "14px",
                fontFamily: "Inter",
                textTransform: "none",
                boxShadow: "unset",
              }}
            >
              Anunciante
            </Button>
          )}
        </div>
        <Typography
          style={{
            color: "#495057",
            fontWeight: "400",
            fontSize: "16px",
            fontFamily: "Inter",
            textAlign: "justify",
          }}
        >
          {seller?.description}
        </Typography>
      </CardContent>
    </div>
  );
}
