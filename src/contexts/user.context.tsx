import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { IAnnouncement } from "./announcement.context";
import { LoginContext } from "./login.context";

interface IUserProps {
  annoucementUser: IAnnouncement[] | [];
  setAnnoucementUser: (annoucementUser: IAnnouncement[] | []) => void;

  setUserId: Dispatch<SetStateAction<string | undefined>>;

  isAdvertiser: boolean;
  setIsAdvertiser: (isAdvertiser: boolean) => void;

  editModalUser: boolean;
  setEditModalUser: (editModalUser: boolean) => void;

  deleteModalUser: boolean;
  setDeleteModalUser: (deleteModalUser: boolean) => void;

  listAnnouncementProfile: () => void;

  handleRegisterUser: SubmitHandler<FieldValues>;

  handleEdit: (data: IEditForm) => void;

  handleDelete: () => void;

  seller: IUser | undefined;

  open: boolean;

  setOpen: Dispatch<SetStateAction<boolean>>;

  userAll: IUser;
}

interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface IUser {
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
}

export interface IHandleEdit {
  id?: string;
  name?: string;
  email?: string;
  cpf?: string;
  cellPhone?: string;
  dateBirth?: string;
  description?: string;
}

export interface IEditForm {
  name?: string;
  email?: string;
  cpf?: string;
  cellPhone?: string;
  dateBirth?: string;
  description?: string;
}

export interface IProviderChildren {
  children: ReactNode;
}
export const UserContext = createContext<IUserProps>({} as IUserProps);

const UserProvider = ({ children }: IProviderChildren) => {
  const [open, setOpen] = useState(false);
  const [annoucementUser, setAnnoucementUser] = useState<IAnnouncement[] | []>(
    []
  );
  const [userAll, setUserAll] = useState<IUser>({} as IUser)
  const [seller, setSeller] = useState<IUser | undefined>();

  const [isAdvertiser, setIsAdvertiser] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | undefined>();
  const [editModalUser, setEditModalUser] = useState<boolean>(false);
  const [deleteModalUser, setDeleteModalUser] = useState<boolean>(false);

  const { user, setUser } = useContext(LoginContext);

  const navigate = useNavigate();

  const listAnnouncementProfile = () => {
    api
      .get(`/users/${userId}`)
      .then((res) => {
        setUserAll(res.data)
        setSeller(res.data);
        setAnnoucementUser(res.data.annoucements);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (userId !== undefined) {
      listAnnouncementProfile();
    }
  }, [userId]);

  const handleRegisterUser = async (data: FieldValues) => {
    await api
      .post("/users", data)
      .then((res) => {
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("erro durante o cadastro. Tente novamente");
      });
  };

  const handleEdit = async (data: IEditForm) => {
    await api
      .patch(`/users`, data)
      .then((response) => {
        setUser(response.data);
        setEditModalUser(false);
        toast.success("informa????es atualizadas com sucesso");
      })
      .catch((err) => {
        toast.error("erro ao atualizar informa????es");
      });
  };

  const handleDelete = async () => {
    await api
      .delete(`/user/${userId}`)
      .then((response) => {
        setDeleteModalUser(false);
        window.localStorage.removeItem("@motorshop:token");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        toast.error("erro ao excluir usu??rio");
      });
  };

  return (
    <UserContext.Provider
      value={{
        annoucementUser,
        setAnnoucementUser,
        isAdvertiser,
        setIsAdvertiser,
        setUserId,
        editModalUser,
        setEditModalUser,
        deleteModalUser,
        setDeleteModalUser,
        listAnnouncementProfile,
        handleRegisterUser,
        handleEdit,
        handleDelete,
        seller,
        open,
        setOpen,
        userAll
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
