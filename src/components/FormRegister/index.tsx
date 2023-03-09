import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Div, Form } from "./style";
import { useContext } from "react";
import { IHandleRegisterUser, UserContext } from "../../contexts/user.context";
import ModalInfo from "../ModalInfo";

const Register = () => {
  const { handleRegisterUser, setIsAdvertiser, open, setOpen } =
    useContext(UserContext);

  const formRegister = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    email: yup
      .string()
      .email("digite um email válido")
      .required("email obrigatório"),
    password: yup
      .string()
      .required("senha obrigatória")
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
    cpf: yup.string().required("ex: 000.000.000-00"),
    cellPhone: yup.string().required("(00)90000-0000"),
    dateBirth: yup.string().required("ex: dd/mm/aaa"),
    description: yup
      .string()
      .required("campo obrigatório")
      .min(10, "minimo 10 caracteres")
      .max(350, "máximo de 350 caracteres"),
    address: yup.object().shape({
      cep: yup.string().required("campo obrigatório"),
      state: yup.string().required("ex: DF"),
      city: yup.string().required("campo obrigatório"),
      street: yup.string().required("campo obrigatório"),
      number: yup.string().required("campo obrigatório"),
      complement: yup.string().optional(),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHandleRegisterUser>({ resolver: yupResolver(formRegister) });

  return (
    <>
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
            <p>{errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="exemplo@email.com"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <label htmlFor="cpf">CPF</label>
            <input
              type="string"
              id="cpf"
              placeholder="000.000.000-00"
              {...register("cpf")}
            />
            <p>{errors.cpf?.message}</p>

            <label htmlFor="cellphone">Telefone</label>
            <input
              type="text"
              id="cellphone"
              placeholder="(xx) xxxxx-xxxx"
              {...register("cellPhone")}
            />
            <p>{errors.cellPhone?.message}</p>

            <label htmlFor="dateBirth">Data de nascimento</label>
            <input
              type="text"
              id="dateBirth"
              placeholder="dd/mm/aaaa"
              {...register("dateBirth")}
            />
            <p>{errors.dateBirth?.message}</p>

            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Digitar descrição"
              {...register("description")}
            />
            <p>{errors.description?.message}</p>

            <h3>Informações de Endereço</h3>

            <label htmlFor="cep">CEP</label>
            <input
              type="string"
              id="cep"
              placeholder="00000.000"
              {...register("address.cep")}
            />
            <p>{errors.address?.cep?.message}</p>

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
                <p>{errors.address?.state?.message}</p>
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
                <p>{errors.address?.city?.message}</p>
              </div>
            </div>

            <label htmlFor="street">Rua</label>
            <input
              type="text"
              id="street"
              placeholder="Digitar Rua"
              {...register("address.street")}
            />
            <p>{errors.address?.street?.message}</p>

            <div className="number-complement">
              <div className="divNumber">
                <label htmlFor="number">Número</label>
                <input
                  className="number"
                  type="string"
                  id="number"
                  placeholder="Digitar número"
                  {...register("address.number")}
                />
                <p>{errors.address?.number?.message}</p>
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
              <button
                autoFocus={true}
                type="button"
                className="button-buyer"
                onClick={() => setIsAdvertiser(true)}
              >
                Comprador
              </button>
              <button
                type="button"
                className="button-advertiser"
                onClick={() => setIsAdvertiser(true)}
              >
                Anunciante
              </button>
            </div>

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>

            <label htmlFor="verPassword">Confirmar senha</label>
            <input
              type="password"
              id="verPassword"
              placeholder="********"
              {...register("verPassword")}
            />
            <p>{errors.verPassword?.message}</p>

            <button type="submit" className="buttonRegister">
              Finalizar Cadastro
            </button>
          </Form>
        </Div>
      </Container>
      <ModalInfo setOpen={setOpen} open={open} />
    </>
  );
};

export default Register;
