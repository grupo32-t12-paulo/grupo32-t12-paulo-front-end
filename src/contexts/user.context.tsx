import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { IAnnouncement } from "./announcement.context";

interface IUserProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;

  annoucementUser: IAnnouncement[] | [];
  setAnnoucementUser: (annoucementUser: IAnnouncement[] | []) => void;

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
  dateBirth: string;
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
  const [annoucementUser, setAnnoucementUser] = useState<IAnnouncement[] | []>(
    []
  );
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/users/${user?.userId}`)
      .then((res) => {
        console.log("res", res);
        setAnnoucementUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRegisterUser = (data: IHandleRegisterUser) => {
    console.log(data);
    api
      .post("/users", data)
      .then((res) => {
        console.log(res.data);
        toast.success("usuário cadastrado com sucesso");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        toast.error("erro durante o cadastro. Tente novamente");
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        annoucementUser,
        setAnnoucementUser,
        handleRegisterUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
