import { Container, Div, Form, Header, Modal } from "./style";

const ModalEditProfile = () => {
  return (
    <Container>
      <Modal>
        <Header>
          <h2>Editar perfil</h2>
          <button className="buttonExit">X</button>
        </Header>

        <Form>
          <Div>
            <h3>Informações adcionais</h3>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Digite seu nome" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="exemplo@email.com" />

            <label htmlFor="cpf">CPF</label>
            <input type="number" id="cpf" placeholder="000.000.000-00" />

            <label htmlFor="tel">Celular</label>
            <input type="number" id="tel" placeholder="(xx) xxxxx-xxxx" />

            <label htmlFor="date">Data de nascimento</label>
            <input type="text" id="date" placeholder="dd/mm/aaaa" />

            <label htmlFor="description">Descrição</label>
            <textarea name="description" id="description" />
          </Div>
          <div className="cancel-saveEdition">
            <button className="buttonCancel">Cancelar</button>
            <button className="buttonSaveEdition">Salvar alterações</button>
          </div>
        </Form>
      </Modal>
    </Container>
  );
};

export default ModalEditProfile;
