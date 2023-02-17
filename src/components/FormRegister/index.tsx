import { Container, Div, Form } from "./style";

const Register = () => {
  return (
    <Container>
      <Div>
        <Form>
          <h2>Cadastro</h2>
          <h3>Informações Pessoais</h3>

          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite seu nome" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="exemplo@email.com" />

          <label htmlFor="cpf">Nome</label>
          <input type="number" id="cpf" placeholder="000.000.000-00" />

          <label htmlFor="tel">Telefone</label>
          <input type="number" id="tel" placeholder="(xx) xxxxx-xxxx" />

          <label htmlFor="data_nascimento">Data de nascimento</label>
          <input type="date" id="data_nascimento" placeholder="dd/mm/aaaa" />

          <label htmlFor="description">Descrição</label>
          <textarea id="description" placeholder="Digitar descrição" />

          <h3>Informações de Endereço</h3>

          <label htmlFor="cep">CEP</label>
          <input type="number" id="cep" placeholder="00000.000" />

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
              />
            </div>

            <div className="divCity">
              <label htmlFor="city">Cidade</label>
              <input
                className="city"
                type="text"
                id="city"
                placeholder="Digitar cidade"
              />
            </div>
          </div>

          <label htmlFor="road">Rua</label>
          <input type="text" id="road" placeholder="Digitar Rua" />

          <div className="number-complement">
            <div className="divNumber">
              <label htmlFor="number">Número</label>
              <input
                className="number"
                type="number"
                id="number"
                placeholder="Digitar número"
              />
            </div>

            <div className="divComplement">
              <label htmlFor="complement">Complemento</label>
              <input
                className="complement"
                type="text"
                id="complement"
                placeholder="ex: apart 307"
              />
            </div>
          </div>

          <label htmlFor="type">Tipo de Conta</label>

          <div className="button-buyer-advertiser">
            <button className="button-buyer">Comprador</button>
            <button className="button-advertiser">Anunciante</button>
          </div>

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="********" />

          <label htmlFor="verPassword">Confirmar senha</label>
          <input type="password" id="verPassword" placeholder="********" />

          <button className="buttonRegister">Finalizar Cadastro</button>
        </Form>
      </Div>
    </Container>
  );
};

export default Register;
