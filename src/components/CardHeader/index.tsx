import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-scroll"

export const CardHeader = () => {
  const isScreenSizeLarge = useMediaQuery("(max-width: 380px)");

  return (
    <header
      style={{
        maxWidth: "1598",
        minHeight: "581px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--brand2)",
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
          background: "var(--brand2)",
          gap: "20px",
        }}
      >
        <h2
          style={{
            maxWidth: "748px",
            fontSize: "44px",
            textAlign: "center",
            color: "var(--brand4)",
            paddingTop: isScreenSizeLarge ? "50px" : "0px", 
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
            color: "var(--brand4)",
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
              width: isScreenSizeLarge ? "350px" : "182px", 
              height: "48px",
              color: "var(--whiteFixed)",
              border: "1px solid var(--whiteFixed)",
            }}
          >
            <p style={{ textDecoration: "none", color: "#FFF" }}>Carros</p>
          </Button>
        </Link>
        
        <Link to="motorcycle" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} delay={100}>
          <Button
            variant="outlined"
            style={{
              width: isScreenSizeLarge ? "350px" : "182px", 
              height: "48px",
              color: "var(--whiteFixed)",
              border: "1px solid var(--whiteFixed)",
            }}
          >
            <p style={{ textDecoration: "none", color: "var(--whiteFixed)" }}>Motos</p>
          </Button>
        </Link>
      </div>
    </header>
  );
};
