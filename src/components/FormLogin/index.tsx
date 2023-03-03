import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/login.context";
import { ContainerRoot, Div, Form } from "./style";
import ForgotPasswordModal from "../Forgot";

const Login = () => {
  const { signIn } = useContext(LoginContext);
  const schema = yup.object({
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("Email incorreto"),
    password: yup.string().required("Senha é obrigatório"),
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  interface IForm {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  return (
    <Box sx={{ mt: { md: 10, xs: 18 }, mb: { md: 0, xs: 10 } }}>
      <ContainerRoot>
        <Div>
          <Form onSubmit={handleSubmit(signIn)}>
            <h2>Login</h2>
            <label htmlFor="user">Usuário</label>
            <input
              {...register("email")}
              type="text"
              id="user"
              placeholder="Digitar usuário"
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label htmlFor="password">Senha</label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Digitar senha"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <Box
              component={"span"}
              sx={{ ":hover": { cursor: "pointer", color: "var(--brand1)" } }}
              onClick={handleOpen}
            >
              Esqueci minha senha
            </Box>

            <button>Entrar</button>

            <h3>Ainda não possui conta?</h3>
            <button className="cadastrar">Cadastrar</button>
          </Form>
        </Div>
      </ContainerRoot>
      <ForgotPasswordModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
    </Box>
  );
};

export default Login;
