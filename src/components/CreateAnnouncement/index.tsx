import { Container, Form, Header, Modal, Div } from "./style";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../ModalDelete";
import React from "react";
import { ReactNode } from "react";
import { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnnouncementDetailsContext } from "../../contexts/announcementDetails.context";
import { AnnouncementContext } from "../../contexts/announcement.context";
import { useContext } from "react";

interface IHandleAnnouncementes {
  title: string,
  adType: string,
  year: number,
  mileage: number,
  price: number,
  description: string,
  vehicleType: string,
  coverImage: string,
}

interface IProps {
  annoucementId?: string;
  edit?: boolean;
}

const CreateAnnouncement = ({ annoucementId, edit }: IProps) => {

  const { handleAnnouncement, handleUpdateAnnouncements } = useContext(AnnouncementDetailsContext)
  const { announcement } = useContext(AnnouncementContext)

  const product: any = announcement.find(e => e.annoucementId === Number(annoucementId))

  const [open, setOpen] = useState(false)
  const [type, setType] = useState(false)
  const [typeVehicle, setTypeVehicle] = useState(false)
  const navigate = useNavigate();

  const schema = yup.object({
    title: yup
      .string()
      .required("Título obrigatório"),
    adType: yup.string(),
    year: yup.string().nullable().required("Ano brigatório"),
    mileage: yup.string().required("Quilometragem obrigatória"),
    price: yup.string().required("Preço obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    vehicleType: yup.string(),
    coverImage: yup.string().required("Imagem de capa obrigatória"),
    firstImage: yup.string().required("Imagem de galeria obrigatória"),
    secondImage: yup.string().required("Imagem de galeria obrigatória")
  });

  interface IForm {
    title: string;
    adType: string;
    year: number;
    mileage: number;
    price: number;
    description: string;
    vehicleType: string;
    coverImage: string;
    firstImage: string;
    secondImage: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const data = (e: IForm) => {
    setOpen(false)

    type ? e.adType = "auction" : e.adType = "sale"
    typeVehicle ? e.vehicleType = "motocycle" : e.vehicleType = "car"

    e.price = Number(e.price)
    e.mileage = Number(e.mileage)
    e.year = Number(e.year)
    !edit ? handleAnnouncement(e) :
      handleUpdateAnnouncements(e, `${annoucementId}`)
  }


  return (
    <>
      {
        open ?
          <Container>
            <Div>
              <Modal>
                <Header>
                  {
                    edit ?
                      <h2>Editar anúncio</h2>
                      :
                      <h2>Criar anúncio</h2>
                  }
                  <button className="buttonExit"
                    onClick={() => setOpen(false)}
                  >X</button>
                </Header>

                <Form onSubmit={handleSubmit(data)}>

                  <h3>Tipo de anúncio</h3>
                  <div className="sale-auction">
                    <button className="buttonSale"
                      type="button"
                      style={
                        {
                          background: `${!type ? "#4529E6" : "#ffffff"}`,
                          color: `${!type ? "#ffffff" : "#4529E6"}`
                        }
                      }
                      onClick={() => {
                        setType(false)
                      }}
                    >
                      Venda
                    </button>
                    <button className="buttonAuction"
                      type="button"
                      style={
                        {
                          background: `${type ? "#4529E6" : "#ffffff"}`,
                          color: `${!type ? "#4529E6" : "#ffffff"}`,
                        }
                      }
                      onClick={() => {
                        setType(true)
                      }}
                    >
                      Leilão
                    </button>
                  </div>

                  <h3>Informações do veículo</h3>

                  <label htmlFor="title">Título</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Digitar título"
                    {...register("title")}
                  />
                  {errors.title && <p>{errors.title.message}</p>}

                  <div className="year-mileage-price">
                    <div className="div-year-mileage">
                      <div className="divYear">
                        <label htmlFor="year">Ano</label>
                        <input
                          className="year"
                          type="number"
                          id="year"
                          placeholder="Digitar ano"
                          {...register("year")}
                        />
                        {errors.year && <p>{errors.year.message}</p>}
                      </div>

                      <div className="divMileage">
                        <label htmlFor="mileage">Quilometragem</label>
                        <input
                          className="mileage"
                          type="number"
                          id="mileage"
                          placeholder="Digitar quilometragem"
                          {...register("mileage")}
                        />
                        {errors.mileage && <p>{errors.mileage.message}</p>}
                      </div>
                    </div>

                    <div className="divPrice">
                      <label htmlFor="price">Preço</label>
                      <input
                        className="price"
                        type="number"
                        id="price"
                        placeholder="Digitar preço"
                        {...register("price")}
                      />
                      {errors.price && <p>{errors.price.message}</p>}
                    </div>
                  </div>

                  <label htmlFor="description">Descrição</label>
                  <textarea id="description"
                    placeholder="Digitar descrição"
                    {...register("description")}
                  />
                  {errors.description && <p>{errors.description.message}</p>}

                  <h3>Tipo de veículo</h3>
                  <div className="car-motorcycle">
                    <button className="buttonCar"
                      type="button"
                      style={
                        {
                          background: `${!typeVehicle ? "#4529E6" : "#ffffff"}`,
                          color: `${!typeVehicle ? "#ffffff" : "#4529E6"}`
                        }
                      }
                      onClick={() => {
                        setTypeVehicle(false)
                      }}
                    >
                      Carro
                    </button>
                    <button className="buttonMotorcycle"
                      type="button"
                      style={
                        {
                          background: `${typeVehicle ? "#4529E6" : "#ffffff"}`,
                          color: `${!typeVehicle ? "#4529E6" : "#ffffff"}`,
                        }
                      }
                      onClick={() => {
                        setTypeVehicle(true)
                      }}
                    >
                      Moto
                    </button>
                  </div>

                  <label htmlFor="coverImage">Imagem da capa</label>
                  <input
                    type="text"
                    id="coverImage"
                    placeholder="https://image.com"
                    {...register("coverImage")}
                  />
                  {errors.coverImage && <p>{errors.coverImage.message}</p>}
                  <label htmlFor="firstImage">1ª imagem da galeria</label>
                  <input type="text" id="firstImage"
                    placeholder="https://image.com"
                    {...register("firstImage")}
                  />
                  {errors.firstImage && <p>{errors.firstImage.message}</p>}
                  <label htmlFor="secondImage">2ª imagem da galeria</label>
                  <input type="text" id="secondImage"
                    placeholder="https://image.com"
                    {...register("secondImage")}
                  />
                  {errors.secondImage && <p>{errors.secondImage.message}</p>}

                  <span>Adicionar campo para imagem da galeria</span>

                  <div className="cancel-createContente">
                    {
                      edit ?
                        <ModalDelete annoucementId={annoucementId} />
                        :
                        <button className="buttonCancel" onClick={() => setOpen(false)}>
                          Cancelar
                        </button>
                    }
                    <button type="submit"
                      className="buttonCreateContente">
                      {
                        edit ?
                          "Salvar alterações"
                          :
                          "Criar anúncio"
                      }
                    </button>
                  </div>
                </Form>
              </Modal>
            </Div>
          </Container>
          : null
      }
      {
        edit ?
          <div style={{ display: "flex", gap: "15px", position: "relative", bottom: "-15px" }}>
            <Button
              sx={
                {
                  textTransform: "none",
                  maxWidth: 80,
                  height: 38,
                  fontFamily: "Inter",
                  fontStyle: "Semi Bold",
                  fontSize: 14,
                  borderRadius: 1,
                  color: "#212529",
                  border: "1.5px solid #212529",
                }
              }
              onClick={() => setOpen(true)}
            >
              Editar
            </Button>
            <Button
              sx={
                {
                  textTransform: "none",
                  fontSize: "16px",
                  maxWidth: "105px",
                  height: "38px",
                  fontFamily: "Inter",
                  fontStyle: "Semi Bold",
                  borderRadius: 1,
                  color: "#212529",
                  border: "1.5px solid #212529",
                }
              }
              onClick={() => navigate(`/announcement/${annoucementId}`)}
            >
              Ver como
            </Button>
          </div>
          :
          !edit ?
            <Button
              sx={
                {
                  textTransform: "none",
                  fontSize: "16px",
                  maxWidth: 160,
                  height: 48,
                  borderRadius: 1,
                  color: "#4529E6",
                  border: "2px solid #4529E6",
                }
              }
              onClick={() => setOpen(true)}
            >
              Criar anúncio
            </Button>
            : null
      }
    </>
  );
};

export default CreateAnnouncement;
