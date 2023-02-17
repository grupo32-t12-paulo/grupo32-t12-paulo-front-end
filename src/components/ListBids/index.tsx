import {
  Avatar,
  Breadcrumbs,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import { useEffect } from "react";

export default function ListBids() {
  let users = [
    {
      // Para ver o comportamento do componente sem usuário logado mude o state de user para false
      state: true,
      name: "Marcos Jorge",
      letters: "",
      // para ver o comportamento do componente sem imagem descomente a linha abaixo
      image: "",
      bid: 8000,
      created_at: "2016-05-03T20:15:01Z",
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

  function verifyElapsedTime() {
    users.map((user) => {
      const time = moment(user.created_at);
      console.log(`${time.startOf("minute").fromNow()}`);
      return (user.elapsedTime = `${time.startOf("minute").fromNow()}`);
    });
  }

  useEffect(() => verifyElapsedTime(), []);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {users.map((user) => (
        <ListItem
          alignItems="flex-start"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: 3,
            }}
          >
            {user.image ? (
              <Avatar
                sx={{
                  bgcolor: "var(--brand2)",
                  height: "32px",
                  width: "32px",
                }}
                sizes="small"
                src={user.image}
              />
            ) : (
              <Avatar
                sx={{
                  bgcolor: "var(--brand2)",
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
            <Breadcrumbs>
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
              {user.elapsedTime}
            </Breadcrumbs>
          </Box>
          <ListItemText
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
              color: "#495057",
            }}
            primary={user.bid.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          />
        </ListItem>
      ))}
    </List>
  );
}
