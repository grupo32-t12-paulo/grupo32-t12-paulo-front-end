import { Textarea, Box, Button, FormControl } from "@mui/joy";
import { Avatar, Chip, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AnnouncementDetailsContext } from "../../contexts/announcementDetails.context";

const InputComment = () => {
  const { postComment } = useContext(AnnouncementDetailsContext);
  const user = {
    // Para ver o comportamento do componente sem usuário logado mude o state de user para false
    state: true,
    name: "Marcos Jorge",
    // para ver o comportamento do componente sem imagem descomente a linha abaixo
    image: "",
    // para ver o comportamento do componente com imagem descomente a linha abaixo
    // image: user_image,
  };

  return (
    <FormControl sx={{ mr: 1.1, mt: 5, borderRadius: 2, bgcolor: "white" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
        }}
      >
        {user.image ? (
          <Avatar
            sx={{
              bgcolor: "#5126EA",
              height: "32px",
              width: "32px",
            }}
            sizes="small"
            src={user.image}
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
            <Typography>JT</Typography>
          </Avatar>
        )}
        <Typography sx={{ ml: 1 }}>Jason Todd</Typography>
      </Box>

      <form onSubmit={(e) => postComment(e)}>
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
              }}
            >
              <Button sx={{ ml: "auto", background: "#4529E6" }} type="submit">
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

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            borderColor: "divider",
            flex: "auto",
            justifyContent: "start",
          }}
        >
          <Button
            sx={{ background: "#4529E6", mt: 1, ml: 2, mb: 1.5 }}
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
