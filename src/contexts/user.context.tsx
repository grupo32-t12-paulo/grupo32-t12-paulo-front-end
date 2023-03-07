import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { IAnnouncement } from "./announcement.context";

interface IUserProps {
  annoucementUser: IAnnouncement[] | [];
  setAnnoucementUser: (annoucementUser: IAnnouncement[] | []) => void;

  setId: Dispatch<SetStateAction<string | undefined>>;

  isAdvertiser: boolean;
  setIsAdvertiser: (isAdvertiser: boolean) => void;

  listAnnouncementProfile: () => void;

  handleRegisterUser: SubmitHandler<FieldValues>;

  user: IUser;
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
  id: string;
  userId: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellPhone: string;
  dateBirth: string;
  description: string;
  isActive?: boolean;
  isAdvertiser?: boolean;
  annoucements?: IAnnouncement[];
}

export interface IHandleRegisterUser {
  name: string;
  email: string;
  password: string;
  verPassword: string;
  cpf: string;
  cellPhone: string;
  dateBirth: string;
  description: string;
  address: IAddress;

  // cep: string;
  // state: string;
  // city: string;
  // street: string;
  // number: string;
  // complement: string;
}

export interface IProviderChildren {
  children: ReactNode;
}
export const UserContext = createContext<IUserProps>({} as IUserProps);

const UserProvider = ({ children }: IProviderChildren) => {
  const [annoucementUser, setAnnoucementUser] = useState<IAnnouncement[] | []>(
    []
  );
  const [user, setUser] = useState<IUser>({} as IUser);

  const [isAdvertiser, setIsAdvertiser] = useState<boolean>(false);
  const [id, setId] = useState<string | undefined>();

  const navigate = useNavigate();

  const listAnnouncementProfile = () => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setAnnoucementUser(res.data.annoucements);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (id !== undefined) {
      listAnnouncementProfile();
    }
  }, [id]);

  const handleRegisterUser = async (data: FieldValues) => {
    await api
      .post("/users", data)
      .then((res) => {
        console.log(res.data);
        toast.success("usuário cadastrado com sucesso");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("erro durante o cadastro. Tente novamente");
      });
  };

  return (
    <UserContext.Provider
      value={{
        annoucementUser,
        setAnnoucementUser,
        isAdvertiser,
        setIsAdvertiser,
        setId,
        listAnnouncementProfile,
        handleRegisterUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
