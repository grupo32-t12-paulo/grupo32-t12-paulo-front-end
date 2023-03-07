import {
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  createContext,
  useEffect,
  useContext
} from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./user.context";

interface IProviderChildren {
  children: ReactNode;
}

interface IAnnouncement {
  title: string;
  isActive: boolean;
  adType: string;
  year: number;
  mileage: number;
  price: string;
  description: string;
  vehicleType: string;
  coverImage: string;
  images: string[];
  user: IUser;
}

interface IComment {
  text: string;
  createAt: string;
  user: IUser;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellPhone: string;
  dateBirth: Date | string | number;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  idAdvertiser: boolean;
  image: string;
  letters: string;
}

interface IHandleAnnouncementes {
  title?: string,
  adType?: string,
  year?: number,
  mileage?: number,
  price?: number,
  description?: string,
  vehicleType?: string,
  coverImage?: string,
}

interface IAnnouncementDetailsContext {
  handleAnnouncement: (data: IHandleAnnouncementes) => Promise<void>;
  handleDeleteAnnouncements: (annoucementId: any) => void;
  handleUpdateAnnouncements: (data: IHandleAnnouncementes, announcementsId: string) => Promise<void>;
  announcement: undefined | IAnnouncement;
  comments: undefined | IComment[];
  setId: Dispatch<SetStateAction<undefined | string>>;
  postComment(e: React.BaseSyntheticEvent): Promise<void>;
  setComments: Dispatch<SetStateAction<IComment[] | undefined>>;
}

export const AnnouncementDetailsContext =
  createContext<IAnnouncementDetailsContext>({} as IAnnouncementDetailsContext);

export function AnnouncementDetailsProvider({ children }: IProviderChildren) {
  const [id, setId] = useState<string | undefined>(undefined);
  const [comments, setComments] = useState<IComment[] | undefined>(undefined);
  const [announcement, setAnnouncement] = useState<undefined | IAnnouncement>(
    undefined
  );

  const { listAnnouncementProfile } = useContext(UserContext);

  const token = localStorage.getItem("@motorshop:token");

  async function handleAnnouncement(data: IHandleAnnouncementes) {
    console.log(data)
    api.post(
      "/announcements", data
      , {
        headers:
        {
          Authorization: `Bearer ${token}`
        },
      }
    ).then(() => {
      listAnnouncementProfile()
      toast.success("anuncio criado com sucesso!");
    }).catch(() => {
      toast.error("algo inesperado aconteceu");
    });
  };

  async function refreshData() {
    if (id) {
      await api
        .get(`/announcements/${id}`)
        .then((response) => setAnnouncement(response.data))
        .catch((error) => console.error(error));
      await api
        .get(`/announcements/${id}/comments`)
        .then((response) => setComments(response.data))
        .catch((error) => console.error(error));
    } else {
      setAnnouncement(undefined);
      setComments(undefined);
    }
  }

  async function postComment(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    let arrayComments;
    if (comments) {
      arrayComments = comments;
    }

    if (!comments) {
      arrayComments = [];
    }
    await api
      .post(`/announcements/${id}/comments`, { text: e.target[0].value })
      .then((response) => {
        arrayComments.push(response.data);
        e.target[0].value = "";
        refreshListComments();
      })
      .catch((err) => console.error(err));
  }



  async function refreshListComments() {
    await api
      .get(`/announcements/${id}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error(error));
  }

  async function handleUpdateAnnouncements(data: IHandleAnnouncementes, announcementsId: string) {
    // const obj = Object.keys(data).forEach((e) => { if (data[e] === "") { delete data.e } })
    // console.log(obj)
    api.patch(
      `/announcements/${announcementsId}`
      ,
      data
      ,
      {
        headers:
        {
          Authorization: `Bearer ${token}`
        },
      }
    ).then((res) => {
      listAnnouncementProfile()
      toast.success("anuncio atualizado!")
    }).catch(() => {
      toast.error("algo inesperado aconteceu");
    });
  };

  async function handleDeleteAnnouncements(announcementsId: string) {
    api.delete(
      `/announcements/${announcementsId}`
      ,
      {
        headers:
        {
          Authorization: `Bearer ${token}`
        },
      }
    ).then((res) => {
      listAnnouncementProfile()
      toast.success("anuncio deletado!")
    }).catch(() => {
      toast.error("algo inesperado aconteceu");
    });
  };

  useEffect(() => {
    refreshData();
  }, [id]);

  // useEffect(() => {
  //   if (refleshUser) {
  //     listAnnouncementProfile()
  //     setRefleshUser(false)
  //   }
  // })

  useEffect(() => {
    setTimeout(() => {
      refreshListComments();
    }, 15000);
  }, [comments]);

  return (
    <AnnouncementDetailsContext.Provider
      value={{
        handleAnnouncement,
        handleDeleteAnnouncements,
        handleUpdateAnnouncements,
        announcement,
        comments,
        setComments,
        setId,
        postComment,
      }}
    >
      {children}
    </AnnouncementDetailsContext.Provider>
  );
}
