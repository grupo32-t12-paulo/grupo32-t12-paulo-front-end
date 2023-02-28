import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IUserProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  handleRegisterUser: (data: IHandleRegisterUser) => void;
}

interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface IUser {
  userId: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
  dateBirth: Date | string;
  description: string;
  isActive?: boolean;
  isAdvertiser?: boolean;
  address: IAddress;
}

export interface IHandleRegisterUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
  dateBirth: Date | string;
  description: string;
  address: IAddress;
}

export interface IProviderChildren {
  children: ReactNode;
}
export const UserContext = createContext<IUserProps>({} as IUserProps);
const UserProvider = ({ children }: IProviderChildren) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const handleRegisterUser = (data: IHandleRegisterUser) => {
    api
      .post("/users", data)
      .then((res) => {
        toast.success("usuário cadastrado com sucesso");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        toast.error("erro durante o cadastro. Tente novamente");
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleRegisterUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
