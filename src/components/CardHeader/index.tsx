import Button from "@mui/material/Button";

export const CardHeader = () => {
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
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          style={{
            width: "100%",
            maxWidth: "180px",
            height: "48px",
            color: "#ffffff",
            border: "1px solid #ffffff",
          }}
        >
          <a href="#cars" style={{ textDecoration: "none", color: "#FFF" }}>
            Carros{" "}
          </a>
        </Button>
        <Button
          variant="outlined"
          style={{
            width: "100%",
            maxWidth: "180px",
            height: "48px",
            color: "#ffffff",
            border: "1px solid #ffffff",
          }}
        >
          <a
            href="#motorcycle"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            Motos{" "}
          </a>
        </Button>
      </div>
    </header>
  );
};
