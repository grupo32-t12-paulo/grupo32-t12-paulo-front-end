import { Textarea, Box, Button, FormControl } from "@mui/joy";
import { Avatar, Chip, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AnnouncementDetailsContext } from "../../contexts/announcementDetails.context";
import { LoginContext } from "../../contexts/login.context";

const InputComment = () => {
  const { postComment } = useContext(AnnouncementDetailsContext);
  const { user } = useContext(LoginContext);
  const image = false;
  let letters = "";
  if (user) {
    const arrName = user.name.split(" ");
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
    <FormControl sx={{ mr: 1.1, mt: 5, borderRadius: 2, bgcolor: "white" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
        }}
      >
        {user ? (
          image ? (
            <Avatar
              sx={{
                bgcolor: "#5126EA",
                height: "32px",
                width: "32px",
              }}
              sizes="small"
              src={image}
            />
          ) : (
            <Avatar
              sx={{
                bgcolor: "#5126EA",
                height: "32px",
                width: "32px",
              }}
              sizes="small"
            >
              <Typography>{letters}</Typography>
            </Avatar>
          )
        ) : (
          <></>
        )}
        <Typography sx={{ ml: 1 }}>{" " + user?.name}</Typography>
      </Box>

      <form onSubmit={(e) => postComment(e)}>
        {user ? (
          <Textarea
            placeholder="Digitar Comentário"
            style={{ margin: 15 }}
            minRows={3}
            endDecorator={
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "var(--Textarea-paddingBlock)",
                  pt: "var(--Textarea-paddingBlock)",
                  borderColor: "divider",
                  flex: "auto",
                  userSelect: "none",
                }}
              >
                <Button
                  sx={{
                    ml: "auto",
                    background: "var(--brand1)",
                    ":hover": { background: "var(--brand3)" },
                  }}
                  type="submit"
                >
                  <Typography
                    color="#FFFF"
                    ml={"2px"}
                    mr={"2px"}
                    mt={"1px"}
                    mb={"1px"}
                  >
                    Comentar
                  </Typography>
                </Button>
              </Box>
            }
            sx={{
              minWidth: 300,
            }}
          />
        ) : (
          <Textarea
            placeholder="Digitar Comentário"
            style={{ margin: 15 }}
            disabled
            minRows={3}
            endDecorator={
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "var(--Textarea-paddingBlock)",
                  pt: "var(--Textarea-paddingBlock)",
                  borderColor: "divider",
                  flex: "auto",
                }}
              >
                <Button
                  sx={{ ml: "auto", background: "var(--grey5)" }}
                  type="submit"
                >
                  <Typography
                    color="#FFFF"
                    ml={"2px"}
                    mr={"2px"}
                    mt={"1px"}
                    mb={"1px"}
                  >
                    Comentar
                  </Typography>
                </Button>
              </Box>
            }
            sx={{
              minWidth: 300,
            }}
          />
        )}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            borderColor: "divider",
            flex: "auto",
            justifyContent: "start",
          }}
        >
          {user ? (
            <Button
              sx={{
                background: "var(--brand1)",
                mt: 1,
                ml: 2,
                mb: 1.5,
                ":hover": { background: "var(--brand3)" },
              }}
              type="submit"
            >
              <Typography
                color="white"
                ml={"2px"}
                mr={"2px"}
                mt={"1px"}
                mb={"1px"}
              >
                Comentar
              </Typography>
            </Button>
          ) : (
            <Button
              sx={{
                background: "var(--grey5)",
                mt: 1,
                ml: 2,
                mb: 1.5,
                ":hover": { background: "var(--grey5)", cursor: "default" },
              }}
            >
              <Typography
                color="white"
                ml={"2px"}
                mr={"2px"}
                mt={"1px"}
                mb={"1px"}
              >
                Comentar
              </Typography>
            </Button>
          )}
        </Box>
      </form>
      <Box sx={{ m: 1 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "flex", flexWrap: "wrap", ml: 0.8 }}
        >
          <Chip sx={{ marginBottom: "6px" }} label="Gostei muito!" />
          <Chip label="Incrível" />
          <Chip label="Vou indicar para meus amigos" />
        </Stack>
      </Box>
    </FormControl>
  );
};

export default InputComment;
