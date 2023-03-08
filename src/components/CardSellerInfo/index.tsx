import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";

interface IChildren {
  name: string;
  description: string;
  userId: string;
  image?: string;
}

export default function CardSellerInfo({
  name,
  description,
  image,
  userId,
}: IChildren) {
  const { user } = useContext(LoginContext);
  const arrName = name.split(" ");
  let letters = "";
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
  const navigate = useNavigate();

  function handleRedirect() {
    if (user?.id === userId) {
      navigate(`/profileAdmin`);
    } else {
      navigate(`/advertiser-profile/${userId}`);
    }
  }

  return (
    <Card
      sx={{
        height: "394px",
        backgroundColor: "#FDFDFD",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Box sx={{ pb: "15px" }}>
          {image ? (
            <Avatar
              alt={name}
              src={image}
              sx={{
                width: 104,
                height: 104,
                fontSize: 36,
                backgroundColor: "#4529E6",
              }}
            />
          ) : (
            <Avatar
              sx={{
                width: 104,
                height: 104,
                fontSize: 42,
                backgroundColor: "#4529E6",
              }}
            >
              <Typography sx={{ fontSize: 32 }}>{letters}</Typography>
            </Avatar>
          )}
        </Box>
        <div style={{ display: "flex", gap: "10px", paddingBottom: "24px" }}>
          <Typography
            sx={{
              fontFamily: "Lexend",
              fontWeight: "600",
              fontSize: "20px",
              mt: 1.5,
              mb: -1,
              color: "#212529",
            }}
          >
            {name}
          </Typography>
        </div>
        <Typography
          sx={{
            color: "#495057",
            fontWeight: "400",
            fontSize: "16px",
            fontFamily: "Inter",
            textAlign: "justify",
          }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            bgcolor: "black",
            mt: 2,
            pt: 1.2,
            pb: 1.2,
            pr: 4,
            pl: 4,
          }}
          onClick={() => handleRedirect()}
        >
          Ver todos anuncios
        </Button>
      </CardContent>
    </Card>
  );
}
