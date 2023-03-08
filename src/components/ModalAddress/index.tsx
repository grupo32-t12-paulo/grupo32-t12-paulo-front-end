import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AddressContext, IEditForm } from "../../contexts/address.context";
import { Container, Form, Header, Modal } from "./style";
import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";

const ModalAddress = () => {
  const { handleEditAddress, setEditModalAddress } = useContext(AddressContext);
  const { user } = useContext(LoginContext);
  console.log("address", user?.address);

  const formEdit = yup.object().shape({
    cep: yup.string().optional(),
    state: yup.string().optional(),
    city: yup.string().optional(),
    street: yup.string().optional(),
    number: yup.string().optional(),
    complement: yup.string().optional(),
  });
  const { handleSubmit, register } = useForm<IEditForm>({
    resolver: yupResolver(formEdit),
  });

  return (
    <Container>
      <Modal>
        <Header>
          <h2>Editar Endereço</h2>
          <button
            className="buttonExit"
            onClick={() => setEditModalAddress(false)}
          >
            X
          </button>
        </Header>

        <h3>Informações de endereço</h3>

        <Form onSubmit={handleSubmit(handleEditAddress)}>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            {...register("cep")}
            defaultValue={user?.address.cep}
          />

          <div className="state-city">
            <div className="divState">
              <label htmlFor="state">Estado</label>
              <input
                className="state"
                type="text"
                id="state"
                {...register("state")}
                defaultValue={user?.address.state}
              />
            </div>

            <div className="divCity">
              <label htmlFor="city">Cidade</label>
              <input
                className="city"
                type="text"
                id="city"
                {...register("city")}
                defaultValue={user?.address.city}
              />
            </div>
          </div>

          <label htmlFor="road">Rua</label>
          <input
            type="text"
            id="road"
            {...register("street")}
            defaultValue={user?.address.street}
          />

          <div className="number-complement">
            <div className="divNumber">
              <label htmlFor="number">Número</label>
              <input
                className="number"
                type="text"
                id="number"
                {...register("number")}
                defaultValue={user?.address.number}
              />
            </div>

            <div className="divComplement">
              <label htmlFor="complement">Complemento</label>
              <input
                className="complement"
                type="text"
                id="complement"
                {...register("complement")}
                defaultValue={user?.address.complement}
              />
            </div>
          </div>

          <div className="button-cancel-save">
            <button
              className="buttonCancel"
              onClick={() => setEditModalAddress(false)}
            >
              Cancelar
            </button>
            <button className="buttonSave">Salvar Alterações</button>
          </div>
        </Form>
      </Modal>
    </Container>
  );
};

export default ModalAddress;
