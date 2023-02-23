import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Div, Form } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

interface IRegister {
  name: string;
  email: string;
  password: string;
  verPassword: string;
  cpf: string;
  cellphone: string;
  dateBirth: Date | string;
  description: string;
  address: IAddress;
}

const Register = () => {
  const { handleRegisterUser } = useContext(UserContext);

  const formRegister = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    email: yup
      .string()
      .email("digite um emmail válido")
      .required("campo obrigatório"),
    password: yup
      .string()
      .required("campo obrigatorio")
      .min(4, "A senha deve conter pelo menos 8 caracteres")
      .matches(
        new RegExp("^(?=.*[a-za-z])(?=.*[0-9])(?=.*[!@#$%^&*])"),
        "A senha deve conter letras, números e simbolos"
      )
      .required("senha obrigatória"),
    verPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .equals([yup.ref("password"), null], "A senha não corresponde"),
    cpf: yup.string().required("campo obrigatório"),
    cellphone: yup.string().required("campo obrigatório"),
    dateBirth: yup.string().required("campo obrigatório"),
    description: yup.string().required("campo obrigatório"),
    cep: yup.string().required("campo obrigatório"),
    state: yup.string().required("campo obrigatório"),
    street: yup.string().required("campo obrigatório"),
    number: yup.string().required("campo obrigatório"),
    complement: yup.string().required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(formRegister) });
  return (
    <Container>
      <Div>
        <Form onSubmit={handleSubmit(handleRegisterUser)}>
          <h2>Cadastro</h2>
          <h3>Informações Pessoais</h3>

          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            {...register("name")}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            {...register("email")}
          />

          <label htmlFor="cpf">CPF</label>
          <input
            type="number"
            id="cpf"
            placeholder="000.000.000-00"
            {...register("cpf")}
          />

          <label htmlFor="cellphone">Telefone</label>
          <input
            type="number"
            id="cellphone"
            placeholder="(xx) xxxxx-xxxx"
            {...register("cellphone")}
          />

          <label htmlFor="dateBirth">Data de nascimento</label>
          <input
            type="text"
            id="dateBirth"
            placeholder="dd/mm/aaaa"
            {...register("dateBirth")}
          />

          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Digitar descrição"
            {...register("description")}
          />

          <h3>Informações de Endereço</h3>

          <label htmlFor="cep">CEP</label>
          <input
            type="number"
            id="cep"
            placeholder="00000.000"
            {...register("address.cep")}
          />

          <div className="state-city">
            <div className="divState">
              <label className="state" htmlFor="state">
                Estado
              </label>
              <input
                className="state"
                type="text"
                id="state"
                placeholder="Digitar Estado"
                {...register("address.state")}
              />
            </div>

            <div className="divCity">
              <label htmlFor="city">Cidade</label>
              <input
                className="city"
                type="text"
                id="city"
                placeholder="Digitar cidade"
                {...register("address.city")}
              />
            </div>
          </div>

          <label htmlFor="street">Rua</label>
          <input
            type="text"
            id="street"
            placeholder="Digitar Rua"
            {...register("address.street")}
          />

          <div className="number-complement">
            <div className="divNumber">
              <label htmlFor="number">Número</label>
              <input
                className="number"
                type="number"
                id="number"
                placeholder="Digitar número"
                {...register("address.number")}
              />
            </div>

            <div className="divComplement">
              <label htmlFor="complement">Complemento</label>
              <input
                className="complement"
                type="text"
                id="complement"
                placeholder="ex: apart 307"
                {...register("address.complement")}
              />
            </div>
          </div>

          <label htmlFor="type">Tipo de Conta</label>

          <div className="button-buyer-advertiser">
            <button className="button-buyer">Comprador</button>
            <button className="button-advertiser">Anunciante</button>
          </div>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            {...register("password")}
          />

          <label htmlFor="verPassword">Confirmar senha</label>
          <input
            type="password"
            id="verPassword"
            placeholder="********"
            {...register("verPassword")}
          />

          <button className="buttonRegister">Finalizar Cadastro</button>
        </Form>
      </Div>
    </Container>
  );
};

export default Register;
