import { Avatar } from "@mui/material";

interface Iavatar {
    backgroundA?: string;
    colorP?: string;
}

export const AvatarComponent = ({ backgroundA, colorP }: Iavatar) => {
    return (
        <div
            style={
                {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                }
            }
        >
            <Avatar alt="Rafael Araujo" src="/static/images/avatar/1.jpg"
                sx={{ width: 32, height: 32, background: backgroundA, fontSize: 16 }}
            />
            <span style={{ color: colorP, fontSize: "14px", lineHeight: "24px" }}>
                Rafael Araujo
            </span>
        </div>
    )
}

