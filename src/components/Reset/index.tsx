import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input } from "@material-ui/core";
import { Container } from "@mui/system";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export default function Reset() {
  const { token, id } = useParams();
  const navigate = useNavigate();
  async function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    api
      .post(`forgot-password/${id}/${token}`, {
        password: e.target[0].value,
        password2: e.target[1].value,
      })
      .then((response) => {
        e.target[0].value = "";
        e.target[1].value = "";
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response.data.message);
      });
  }

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
          height: 350,
          mt: 20,
          mb: -10,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "4px",
          flex: "display",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            textAlign: "justify",
            fontWeight: "500",
            color: "#212529",
            fontFamily: "Lexend",
            fontSize: "20px",
            marginBottom: "25px",
          }}
        >
          Altere a sua senha
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              style={{
                textAlign: "justify",
                fontWeight: "500",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              Digite a senha
            </Typography>
            <Input
              type="password"
              placeholder="Insira sua nova senha"
              required
            />
            <Typography
              variant="h6"
              component="h2"
              style={{
                textAlign: "justify",
                fontWeight: "500",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              Digite a confirmação da senha
            </Typography>
            <Input type="password" placeholder="Confirme sua senha" required />

            <Button
              type="submit"
              sx={{
                mt: 2,
                backgroundColor: "#4529E6",
                borderRadius: "4px",
                width: "132px",
                height: "38px",
                textTransform: "none",
                color: "#FFFFFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "600",
                ":hover": { background: "var(--brand3)" },
              }}
            >
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
