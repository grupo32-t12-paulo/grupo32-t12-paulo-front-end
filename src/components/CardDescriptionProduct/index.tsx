import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IChildren {
  description: string;
}

export default function CardDescriptionProduct({ description }: IChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        mr: 1.1,
        gap: "20px",
        background: "white",
        mt: 5,
        borderRadius: 1,
      }}
    >
      <Typography sx={{ fontSize: "20px", mt: 2 }}>Descrição</Typography>
      <Typography
        sx={{ fontSize: 16 }}
        color="text.secondary"
        gutterBottom
        style={{ color: "#495057" }}
      >
        {description}
      </Typography>
    </Box>
  );
}
