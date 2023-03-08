import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-scroll"

export const CardHeader = () => {
  const isScreenSizeLarge = useMediaQuery("(max-width: 372px)");

  return (
    <header
      style={{
        maxWidth: "1598",
        minHeight: "581px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#5126EA",
        gap: "40px",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#5126EA",
          gap: "20px",
        }}
      >
        <h2
          style={{
            maxWidth: "748px",
            fontSize: "44px",
            textAlign: "center",
            color: "#EDEAFD",
            margin: "0",
          }}
        >
          Velocidade e experiência em um lugar feito para você
        </h2>
        <p
          style={{
            maxWidth: "388px",
            fontSize: "16px",
            textAlign: "center",
            color: "#EDEAFD",
          }}
        >
          Um ambiente feito para você explorar o seu melhor
        </p>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "372px",
          display: "flex",
          flexWrap: isScreenSizeLarge ? "wrap" : "nowrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Link to="cars" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} delay={100}>
          <Button
            variant="outlined"
            style={{
              width: "182px",
              height: "48px",
              color: "#ffffff",
              border: "1px solid #ffffff",
            }}
          >
            <p style={{ textDecoration: "none", color: "#FFF" }}>Carros</p>
          </Button>
        </Link>
        
        <Link to="motorcycle" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} delay={100}>
          <Button
            variant="outlined"
            style={{
              width: "182px",
              height: "48px",
              color: "#ffffff",
              border: "1px solid #ffffff",
            }}
          >
            <p style={{ textDecoration: "none", color: "#FFF" }}>Motos</p>
          </Button>
        </Link>
      </div>
    </header>
  );
};
