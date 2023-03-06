import { Container, Form, Header, Modal, Div } from "./style";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../ModalDelete";

interface IProps {
  annoucementId?: string;
  edit?: boolean;
  create?: boolean;
}

const CreateAnnouncement = ({ annoucementId }: IProps) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <>
      {
        open ?
          <Container>
            <Div>
              <Modal>
                <Header>
                  <h2>Editar anúncio</h2>
                  <button className="buttonExit"
                    onClick={() => setOpen(false)}
                  >X</button>
                </Header>

                <Form>
                  <h3>Tipo de anúncio</h3>
                  <div className="sale-auction">
                    <button className="buttonSale">Venda</button>
                    <button className="buttonAuction">Leilão</button>
                  </div>

                  <h3>Informações do veículo</h3>

                  <label htmlFor="title">Título</label>
                  <input type="text" id="title" placeholder="Digitar título" />

                  <div className="year-mileage-price">
                    <div className="div-year-mileage">
                      <div className="divYear">
                        <label htmlFor="year">Ano</label>
                        <input
                          className="year"
                          type="number"
                          id="year"
                          placeholder="Digitar ano"
                        />
                      </div>

                      <div className="divMileage">
                        <label htmlFor="mileage">Quilometragem</label>
                        <input
                          className="mileage"
                          type="number"
                          id="mileage"
                          placeholder="Digitar quilometragem"
                        />
                      </div>
                    </div>

                    <div className="divPrice">
                      <label htmlFor="price">Preço</label>
                      <input
                        className="price"
                        type="number"
                        id="price"
                        placeholder="Digitar preço"
                      />
                    </div>
                  </div>

                  <label htmlFor="description">Descrição</label>
                  <textarea id="description" placeholder="Digitar descrição" />

                  <h3>Tipo de veículo</h3>
                  <div className="car-motorcycle">
                    <button className="buttonCar">Carro</button>
                    <button className="buttonMotorcycle">Moto</button>
                  </div>

                  <label htmlFor="coverImage">Imagem da capa</label>
                  <input type="text" id="coverImage" placeholder="https://image.com" />

                  <label htmlFor="firstImage">1ª imagem da galeria</label>
                  <input type="text" id="firstImage" placeholder="https://image.com" />

                  <label htmlFor="secondImage">2ª imagem da galeria</label>
                  <input type="text" id="secondImage" placeholder="https://image.com" />

                  <span>Adicionar campo para imagem da galeria</span>

                  <div className="cancel-createContente">
                    <ModalDelete annoucementId={annoucementId} />
                    {/* <button className="buttonCancel" onClick={() => ""}>
                      Excluir anúncios
                    </button> */}
                    <button className="buttonCreateContente">Salvar alterações</button>
                  </div>
                </Form>
              </Modal>
            </Div>
          </Container>
          : null
      }
      <div style={{ display: "flex", gap: "15px", position: "relative", bottom: "-15px" }}>
        <Button
          sx={
            {
              maxWidth: 80,
              height: 38,
              borderRadius: 1,
              color: "#212529",
              border: "2px solid #212529",
            }
          }
          onClick={() => setOpen(true)}
        >
          Editar
        </Button>
        <Button
          sx={
            {
              maxWidth: 105,
              height: 38,
              fontFamily: "Inter",
              fontStyle: "Semi Bold",
              fontSize: 14,
              borderRadius: 1,
              color: "#212529",
              border: "2px solid #212529",
            }
          }
          onClick={() => navigate(`/announcement/${annoucementId}`)}
        >
          Ver como
        </Button>
      </div>
    </>
  );
};

export default CreateAnnouncement;
