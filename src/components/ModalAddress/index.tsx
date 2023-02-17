import { Container, Form, Header, Modal } from "./style";

const ModalAddress = () => {
  return (
    <Container>
      <Modal>
        <Header>
          <h2>Editar Endereço</h2>
          <button className="buttonExit">X</button>
        </Header>

        <h3>Informações de endereço</h3>

        <Form>
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" placeholder="00000.000" />

          <div className="state-city">
            <div className="divState">
              <label htmlFor="state">Estado</label>
              <input
                className="state"
                type="text"
                id="state"
                placeholder="Paraná"
              />
            </div>

            <div className="divCity">
              <label htmlFor="city">Cidade</label>
              <input
                className="city"
                type="text"
                id="city"
                placeholder="Curitiba"
              />
            </div>
          </div>

          <label htmlFor="road">Rua</label>
          <input type="text" id="road" placeholder="00000.000" />

          <div className="number-complement">
            <div className="divNumber">
              <label htmlFor="number">Número</label>
              <input
                className="number"
                type="text"
                id="number"
                placeholder="1029"
              />
            </div>

            <div className="divComplement">
              <label htmlFor="complement">Complemento</label>
              <input
                className="complement"
                type="text"
                id="complement"
                placeholder="Curitiba"
              />
            </div>
          </div>

          <div className="button-cancel-save">
            <button className="buttonCancel">Cancelar</button>
            <button className="buttonSave">Salvar Alterações</button>
          </div>
        </Form>
      </Modal>
    </Container>
  );
};

export default ModalAddress;
