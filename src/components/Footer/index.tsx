import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const isScreenSizeLarge = useMediaQuery("(min-width: 538px)");

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        marginTop: 40,
        minWidth: "100%",
        height: isScreenSizeLarge ? "140px" : "310px",
        backgroundColor: "var(--grey0)",
        display: "flex",
        alignItems: "center",
        justifyContent: isScreenSizeLarge ? "space-around" : "center",
        flexDirection: isScreenSizeLarge ? "row" : "column",
        position: "relative",
      }}
    >
      <img
        src="./logo.svg"
        alt="Logo Motors Shop"
        style={{
          width: "153px",
          height: "26px",
          marginTop: isScreenSizeLarge ? "0px" : "45px",
          marginBottom: isScreenSizeLarge ? "0px" : "60px",
        }}
      />
      <Typography
        style={{
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "14px",
          color: "var(--whiteFixed)",
        }}
      >
        © 2022 - Todos os direitos reservados.
      </Typography>
      <div style={{}}>
        {showButton && (
          <Button
            style={{
              width: "53px",
              height: "50px",
              borderRadius: "4px",
              backgroundColor: "var(--grey1)",
              marginTop: isScreenSizeLarge ? "0px" : "60px",
            }}
            onClick={handleClick}
          >
            <ArrowDropUpIcon style={{ color: "var(--whiteFixed)" }} />
          </Button>
          )}
      </div>
    </Box>
  );
}