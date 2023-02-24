import { Box } from "@mui/material";
import { ContainerRoot, Div, Form } from "./style";

const Login = () => {
  return (
    <Box sx={{mt: {md : 10, xs : 18}, mb: {md: 0, xs: 10}}}>
    <ContainerRoot>
      <Div>
        <Form>
          <h2>Login</h2>
          <label htmlFor="user">Usuário</label>
          <input type="text" id="user" placeholder="Digitar usuário" />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digitar senha" />

          <span>Esqueci minha senha</span>

          <button>Entrar</button>

          <h3>Ainda não possui conta?</h3>
          <button className="cadastrar">Cadastrar</button>
        </Form>
      </Div>
    </ContainerRoot>
    </Box>
  );
};

export default Login;
