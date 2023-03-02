import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { IUser } from "./login.context";


interface ICurrentAnnouncements {
    handleAnnouncement: (data: IHandleAnnouncementes) => void,
    handleListAllAnnouncements: (data: string) => void,
    handleListDetailsAnnouncements: (data: string) => void,
    handleDeleteAnnouncements: (data: string) => void,
    handleUpdateAnnouncements: (data: string) => void,
    listAllAnnouncement: IUser[],
    listDetailsAnnouncement: IUser,
}

interface ICurrentAnnouncementsChildren {
    children: ReactNode;
}

interface IHandleAnnouncementes {
    title: string,
    adType: string,
    year: number,
    mileage: number,
    price: number,
    description: number,
    vehicleType: number,
    coverImage: string,
}



export const AnnouncementContext = createContext<ICurrentAnnouncements>(
    {} as ICurrentAnnouncements
);

const AnnouncementProvide = ({ children }: ICurrentAnnouncementsChildren) => {

    const token = localStorage.getItem("@motorshop:token");
    const email = localStorage.getItem("@motorshop:email");


    const [
        listAllAnnouncement,
        setListAllAnnouncementes
    ] = useState<IUser[]>([])
    const [
        listDetailsAnnouncement,
        setListDetailsAnnouncementes
    ] = useState<IUser>({} as IUser)

    const handleAnnouncement = (data: IHandleAnnouncementes) => {
        api.post(
            "/announcementes"
            , data
            , {
                headers:
                {
                    Authorization: `Bearer ${token}`
                },
            }
        ).then(() => {
            toast.success("anuncio criado com sucesso!");
        }).catch(() => {
            toast.error("algo inesperado aconteceu");
        });
    };

    const handleListAllAnnouncements = () => {
        api.get("/announcementes").then((res) => {
            setListAllAnnouncementes(res.data)
        }).catch(() => {
            toast.error("algo inesperado aconteceu");
        });
    };

    const handleListDetailsAnnouncements = (announcementsId: string) => {
        api.get(`/announcementes/${announcementsId}`).then((res) => {
            setListDetailsAnnouncementes(res.data)
        }).catch(() => {
            toast.error("algo inesperado aconteceu");
        });
    };

    const handleDeleteAnnouncements = (announcementsId: string) => {
        api.delete(
            `/announcementes/${announcementsId}`
            , {
                headers:
                {
                    Authorization: `Bearer ${token}`
                },
            }
        ).then((res) => {
            toast.success("anuncio deletado!")
        }).catch(() => {
            toast.error("algo inesperado aconteceu");
        });
    };

    const handleUpdateAnnouncements = (announcementsId: string) => {
        api.patch(
            `/announcementes/${announcementsId}`
            , {
                headers:
                {
                    Authorization: `Bearer ${token}`
                },
            }
        ).then((res) => {
            toast.success("anuncio atualizado!")
        }).catch(() => {
            toast.error("algo inesperado aconteceu");
        });
    };

    return (
        <AnnouncementContext.Provider
            value={
                {
                    handleAnnouncement,
                    handleListAllAnnouncements,
                    handleListDetailsAnnouncements,
                    handleDeleteAnnouncements,
                    handleUpdateAnnouncements,
                    listAllAnnouncement,
                    listDetailsAnnouncement,
                }
            }
        >
            {children}
        </AnnouncementContext.Provider>
    )
}

export default AnnouncementProvide;