import { padding } from "@mui/system"
import { relative } from "path"
import AppBarComponent from "../components/AppBar"
import CardInfoSeller from "../components/CardInfoSeller"
import CardAuction from "../components/CardAuction/index"
import MediaCard from "../components/CardComponent"


const ProfileViewAdmin = () => {
    return (
        <main
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    gap: "18rem",
                }
            }
        >
            <header
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        height: "357px",
                        background: "#4529E6",
                    }
                }
            >
                <AppBarComponent />
                <div
                    style={
                        {
                            position: "relative",
                            top: "150px"
                        }
                    }
                >
                    <CardInfoSeller />
                </div>
            </header>
            <div
                style={
                    {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0 30px"
                    }
                }
            >
                <section id="auction"
                    style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            height: "658px",
                            padding: "0 40px",
                            gap: "60px"
                        }
                    }
                >
                    <h2 style={{ width: "100%" }}>Leilão</h2>
                    <div
                        style={
                            {
                                display: "flex",
                                gap: "20px",
                                overflowX: "auto"
                            }
                        }
                    >
                        <CardAuction ButtonType="profile" />
                        <CardAuction ButtonType="profile" />
                    </div>
                </section>
                <section id="cars"
                    style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            height: "658px",
                            padding: "0 40px",
                            gap: "60px"
                        }
                    }
                >
                    <h2 style={{ width: "100%" }}>Carros</h2>
                    <div
                        style={
                            {
                                display: "flex",
                                gap: "50px",
                                overflow: "auto"
                            }
                        }
                    >
                        <MediaCard ButtonType="profile" />
                        <MediaCard ButtonType="profile" />
                        <MediaCard ButtonType="profile" />
                        <MediaCard ButtonType="profile" />
                    </div>
                </section>
                <section id="motorcycles"
                    style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            height: "658px",
                            padding: "0 40px",
                            gap: "60px"
                        }
                    }
                >
                    <h2 style={{ width: "100%" }}>Motos</h2>
                    <div
                        style={
                            {
                                display: "flex",
                                gap: "50px",
                                overflow: "auto"
                            }
                        }
                    >
                        <MediaCard ButtonType="profile" />
                        <MediaCard ButtonType="profile" />
                        <MediaCard ButtonType="profile" />
                        <MediaCard ButtonType="profile" />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ProfileViewAdmin
