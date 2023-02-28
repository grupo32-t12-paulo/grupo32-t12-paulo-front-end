import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

export interface IAnnouncementProps {
  announcement: IAnnouncement[] | [];
  setAnnouncement: React.Dispatch<React.SetStateAction<IAnnouncement[] | []>>;

  cars: IAnnouncement[] | [];
  setCars: React.Dispatch<React.SetStateAction<IAnnouncement[] | []>>;

  motorcycles: IAnnouncement[] | [];
  setMotorcycles: React.Dispatch<React.SetStateAction<IAnnouncement[] | []>>;

  listAnnouncement: () => void;
}

export interface IAnnouncement {
  annoucementId: number;
  title: string;
  isActive: boolean;
  adType: string;
  year: number;
  mileage: number;
  price: string;
  description: string;
  vehicleType: string;
  coverImage: string;
}

export interface IProviderChildren {
  children: ReactNode;
}

export const AnnouncementContext = createContext<IAnnouncementProps>(
  {} as IAnnouncementProps
);

const AnnouncementProvider = ({ children }: IProviderChildren) => {
  const [announcement, setAnnouncement] = useState<IAnnouncement[] | []>([]);
  const [cars, setCars] = useState<IAnnouncement[] | []>([]);
  const [motorcycles, setMotorcycles] = useState<IAnnouncement[] | []>([]);

  const listAnnouncement = () => {
    api
      .get("/announcement")
      .then((response) => {
        setAnnouncement(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const refreshListAnnouncement = () => {
    const arrayCars: IAnnouncement[] = [];
    const arrayMotorcycle: IAnnouncement[] = [];

    announcement.map((element: IAnnouncement) => {
      if (element.adType === "car") {
        arrayCars.push(element);
      } else {
        arrayMotorcycle.push(element);
      }
    });

    setCars(arrayCars);
    setMotorcycles(arrayMotorcycle);
  };

  useEffect(() => {
    refreshListAnnouncement();
  }, [announcement]);

  return (
    <AnnouncementContext.Provider
      value={{
        announcement,
        setAnnouncement,
        cars,
        setCars,
        motorcycles,
        setMotorcycles,
        listAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;