import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, Div, Form, Header, Modal } from "./style";
import { LoginContext } from "../../contexts/login.context";
import { useContext } from "react";
import { IEditForm, UserContext } from "../../contexts/user.context";

const ModalEditProfile = () => {
  const { handleEdit, setEditModalUser } = useContext(UserContext);
  const { user } = useContext(LoginContext);

  let dataFormatada = "";
  if (user) {
    let data = new Date(user.dateBirth);
    dataFormatada =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  }

  const formEdit = yup.object().shape({
    name: yup.string().optional(),
    email: yup.string().email("email inválido").optional(),
    cpf: yup.string().optional(),
    cellPhone: yup.string().optional(),
    dateBirth: yup.string().optional(),
    description: yup.string().optional(),
  });

  const { handleSubmit, register } = useForm<IEditForm>({
    resolver: yupResolver(formEdit),
  });

  return (
    <Container>
      <Modal>
        <Header>
          <h2>Editar perfil</h2>
          <button
            className="buttonExit"
            onClick={() => setEditModalUser(false)}
          >
            X
          </button>
        </Header>

        <Form onSubmit={handleSubmit(handleEdit)}>
          <Div>
            <h3>Informações adcionais</h3>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              {...register("name")}
              defaultValue={user?.name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="exemplo@email.com"
              {...register("email")}
              defaultValue={user?.email}
            />

            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              placeholder="000.000.000-00"
              {...register("cpf")}
              defaultValue={user?.cpf}
            />

            <label htmlFor="tel">Celular</label>
            <input
              type="number"
              id="tel"
              placeholder="(xx) xxxxx-xxxx"
              {...register("cellPhone")}
              defaultValue={user?.cellPhone}
            />

            <label htmlFor="date">Data de nascimento</label>
            <input
              type="string"
              id="date"
              placeholder="dd/mm/aaaa"
              {...register("dateBirth")}
              defaultValue={dataFormatada}
            />

            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              {...register("description")}
              defaultValue={user?.description}
            />
          </Div>
          <div className="cancel-saveEdition">
            <button
              type="button"
              className="buttonCancel"
              onClick={() => setEditModalUser(false)}
            >
              Cancelar
            </button>
            <button className="buttonSaveEdition">Salvar alterações</button>
          </div>
        </Form>
      </Modal>
    </Container>
  );
};

export default ModalEditProfile;
