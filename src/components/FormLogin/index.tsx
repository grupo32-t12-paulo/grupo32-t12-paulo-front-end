import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";
import { ContainerRoot, Div, Form } from "./style";

const Login = () => {
  const { signIn } = useContext(LoginContext)

  const schema = yup.object({
    email: yup.string().required("O email é obrigatório").email("Email incorreto"),
    password: yup.string().required("Senha é obrigatório")
  });

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
    <Box sx={{mt: {md : 10, xs : 18}, mb: {md: 0, xs: 10}}}>
    <ContainerRoot>
      <Div>
        <Form onSubmit={handleSubmit(signIn)}>
          <h2>Login</h2>
          <label htmlFor="user">Usuário</label>
          <input {...register("email")} type="text" id="user" placeholder="Digitar usuário" />
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="password">Senha</label>
          <input {...register("password")} type="password" id="password" placeholder="Digitar senha" />
          {errors.password && <p>{errors.password.message}</p>}

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
