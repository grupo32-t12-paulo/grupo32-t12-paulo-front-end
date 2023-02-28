import CreateAnnouncement from "../CreateAnnouncement";
import { useState } from "react";

interface IpropsButton {
    color?: string
}

export const ButtonEddit = ({ color }: IpropsButton) => {

    const [openModal, setOpenModal] = useState(false)

    const settingOpenModal = (value: string) => {
        return setOpenModal(true)
    }

    return (
        <>
            {openModal ? <CreateAnnouncement /> : null}
            <div
                style={{ display: "flex", gap: "20px" }}
            >
                <button
                    style={
                        {

                            width: "80px",
                            height: "38px",
                            color: color,
                            border: `2px solid ${color}`,
                            background: "rgba(0, 0, 0, 0)",
                            fontSize: "14px"
                        }
                    }
                    onClick={() => settingOpenModal("")}
                >
                    Editar
                </button>
                <button
                    style={
                        {
                            width: "105px",
                            height: "38px",
                            color: color,
                            border: `2px solid ${color}`,
                            background: "rgba(0, 0, 0, 0)",
                            fontSize: "14px",
                        }
                    }
                >
                    Ver como
                </button>
            </div>
        </>
    );
}
