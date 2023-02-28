import {
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  createContext,
  useEffect,
} from "react";
import api from "../services/api";

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
  user: IUser;
}

interface IComment {
  text: string;
  createAt: string;
  user: IUser;
}

interface IUser {
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

interface IAnnouncementDetailsContext {
  announcement: undefined | IAnnouncement;
  comments: undefined | IComment[];
  setId: Dispatch<SetStateAction<undefined | string>>;
}

export const AnnouncementDetailsContext =
  createContext<IAnnouncementDetailsContext>({} as IAnnouncementDetailsContext);

export function AnnouncementDetailsProvider({ children }: IProviderChildren) {
  const [id, setId] = useState<string | undefined>(undefined);
  const [comments, setComments] = useState<IComment[] | undefined>(undefined);
  const [announcement, setAnnouncement] = useState<undefined | IAnnouncement>(
    undefined
  );

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

  useEffect(() => {
    refreshData();
  }, [id]);

  return (
    <AnnouncementDetailsContext.Provider
      value={{
        announcement,
        comments,
        setId,
      }}
    >
      {children}
    </AnnouncementDetailsContext.Provider>
  );
}
