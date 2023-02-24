import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useRef } from "react";
import { Box, Popover, useMediaQuery } from "@mui/material";

export default function BackToTop() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isScreenSizeLarge = useMediaQuery("(min-width: 538px)");

  const handleClick = () => {
    const top = headerRef.current?.offsetTop || 0;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <Box
      ref={headerRef}
      sx={{
        height: isScreenSizeLarge ? "140px" : "310px",
        backgroundColor: "#0B0D0D",
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
          color: "#FFFFFF",
        }}
      >
        © 2022 - Todos os direitos reservados.
      </Typography>
      <div style={{}}>
        <Button
          style={{
            width: "53px",
            height: "50px",
            borderRadius: "4px",
            backgroundColor: "#212529",
            marginTop: isScreenSizeLarge ? "0px" : "60px",
          }}
          onClick={handleClick}
        >
          <ArrowDropUpIcon style={{ color: "#FFFFFF" }} />
        </Button>
      </div>
    </Box>
  );
}
