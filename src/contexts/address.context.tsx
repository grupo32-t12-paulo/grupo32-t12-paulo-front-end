import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { LoginContext } from "./login.context";

interface IAddressProps {
  editModalAddress: boolean;
  setEditModalAddress: (editModalAddress: boolean) => void;

  handleEditAddress: (data: IEditForm) => void;
}

interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface IHandleEdit {
  id?: string;
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}

export interface IEditForm {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}

export interface IProviderChildren {
  children: ReactNode;
}
export const AddressContext = createContext<IAddressProps>({} as IAddressProps);

const AddressProvider = ({ children }: IProviderChildren) => {
  const [editModalAddress, setEditModalAddress] = useState<boolean>(false);

  const { setUser } = useContext(LoginContext);

  const handleEditAddress = async (data: IEditForm) => {
    await api
      .patch(`/users/address`, data)
      .then((response) => {
        setUser(response.data);
        setEditModalAddress(false);
        toast.success("informações atualizadas com sucesso");
      })
      .catch((err) => {
        toast.error("erro ao atualizar informações");
      });
  };

  return (
    <AddressContext.Provider
      value={{
        editModalAddress,
        setEditModalAddress,
        handleEditAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
