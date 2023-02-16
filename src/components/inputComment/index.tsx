import { Textarea, Box, Button, FormControl } from "@mui/joy";
import { Avatar, Chip, Stack, Typography } from "@mui/material";

const InputComment = () => {
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
    <FormControl sx={{ margin: "20px", padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
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
            <Typography>SL</Typography>
          </Avatar>
        )}
      </Box>

      <Textarea
        placeholder="Digitar Comentário"
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
            <Button sx={{ ml: "auto", background: "#4529E6" }}>
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
        <Button sx={{ background: "#4529E6", mt: 2 }}>
          <Typography color="white" ml={"2px"} mr={"2px"} mt={"1px"} mb={"1px"}>
            Comentar
          </Typography>
        </Button>
      </Box>
      <Box sx={{ m: 1 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "flex", flexWrap: "wrap" }}
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
