import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { AnnouncementContext, IAnnouncement } from "./announcement.context";
import { LoginContext } from "./login.context";

interface IUserProps {
  annoucementUser: IAnnouncement[] | [];
  setAnnoucementUser: (annoucementUser: IAnnouncement[] | []) => void;

  listAnnouncementProfile: () => void;

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
  const [annoucementUser, setAnnoucementUser] = useState<IAnnouncement[] | []>(
    []
  );

  const { user } = useContext(LoginContext);
  const navigate = useNavigate();

  const listAnnouncementProfile = () => {
    console.log(user);
    api
      .get(`/users/${user?.id}`)
      .then((res) => {
        console.log("res", res);
        setAnnoucementUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        annoucementUser,
        setAnnoucementUser,
        listAnnouncementProfile,
        handleRegisterUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
