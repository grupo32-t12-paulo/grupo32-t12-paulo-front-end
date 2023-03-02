import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";

export default function CardInfoSeller() {
  const { user } = useContext(LoginContext);
  return (
    <Card
      style={{
        minWidth: "343px",
        maxWidth: "1240px",
        height: "394px",
        backgroundColor: "#FDFDFD",
        marginLeft: "16px",
        marginRight: "16px",
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
            alt="Everton Vieira"
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
            {user?.name}{" "}
          </Typography>
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
          {user?.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
