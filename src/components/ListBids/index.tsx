import {
  Avatar,
  Button,
  Icon,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Moment from "react-moment";
import "moment/locale/pt-br";
import Ellipse from "../../assets/ellipse.svg";

export default function ListBids() {
  const isAdminAnnouncement = false;

  let users = [
    {
      // Para ver o comportamento do componente sem usuário logado mude o state de user para false
      state: true,
      name: "Marcos Jorge",
      letters: "",
      // para ver o comportamento do componente sem imagem descomente a linha abaixo
      image: "",
      bid: 8000,
      created_at: "2023-02-17T21:58:01Z",
      elapsedTime: "",
      // para ver o comportamento do componente com imagem descomente a linha abaixo
      // image: user_image,
    },
    {
      // Para ver o comportamento do componente sem usuário logado mude o state de user para false
      state: true,
      name: "Marcos Jorge",
      letters: "",
      // para ver o comportamento do componente sem imagem descomente a linha abaixo
      image: "",
      bid: 8000,
      created_at: "2023-02-18T01:12:00Z",
      elapsedTime: "",
      // para ver o comportamento do componente com imagem descomente a linha abaixo
      // image: user_image,
    },
    {
      // Para ver o comportamento do componente sem usuário logado mude o state de user para false
      state: true,
      name: "Marcos Jorge",
      letters: "",
      // para ver o comportamento do componente sem imagem descomente a linha abaixo
      image: "",
      bid: 8000,
      created_at: "2023-02-17T21:58:01Z",
      elapsedTime: "",
      // para ver o comportamento do componente com imagem descomente a linha abaixo
      // image: user_image,
    },
  ];

  users.map((user) => {
    const arrName = user.name.split(" ");
    const first = arrName[0].split("");
    const final = arrName[arrName.length - 1].split("");
    const letterFirst = first[0];
    const letterFinal = final[0];
    const letters = `${letterFirst}${letterFinal}`;
    return (user.letters = letters);
  });

  return (
    <Box sx={{ p: 5 }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Typography
          variant="h5"
          sx={{
            ml: 2,
            mb: 2,
            color: "var(--grey1)",
            fontFamily: "Lexend, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          Lances
        </Typography>
        {users.map((user) => (
          <ListItem
            alignItems="flex-start"
            sx={{ display: "flex", flexDirection: "column", mb: 4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 2,
              }}
            >
              {user.image ? (
                <Avatar
                  sx={{
                    height: "32px",
                    width: "32px",
                  }}
                  sizes="small"
                  src={user.image}
                />
              ) : (
                <Avatar
                  sx={{
                    bgcolor: "var(--brand1)",
                    height: "32px",
                    width: "32px",
                  }}
                  sizes="small"
                >
                  <Typography fontSize={14} fontFamily="Inter, sans-serif">
                    {user.letters}
                  </Typography>
                </Avatar>
              )}
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--grey1)",
                }}
              >
                {user.name}
              </Typography>
              <Icon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Ellipse} alt="" />
              </Icon>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--grey3)",
                }}
              >
                <Moment fromNow>{user.created_at}</Moment>
              </Typography>
            </Box>
            <ListItemText
              sx={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "24px",
                textAlign: "left",
                color: "#495057",
                mb: 2,
              }}
              primary={user.bid.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            />
            {isAdminAnnouncement && (
              <Button
                sx={{
                  color: "var(--brand1)",
                  bgcolor: "var(--brand4)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                  fontSize: "14px",
                  ":hover": {
                    bgcolor: "var(--brand1)",
                    color: "var(--brand4)",
                  },
                }}
                variant="text"
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  Vender
                </Typography>
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
