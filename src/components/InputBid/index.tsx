import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import CurrencyInput from "react-currency-input-field";
import { Typography } from "@mui/joy";
import { Icon } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";

export default function InputBid() {
  const user = {
    // Para ver o comportamento do componente sem usuário logado mude o state de user para false
    state: true,
    name: "Marcos Jorge",
    // para ver o comportamento do componente sem imagem descomente a linha abaixo
    image: "",
    // para ver o comportamento do componente com imagem descomente a linha abaixo
    // image: user_image,
  };

  const arrName = user.name.split(" ");
  const first = arrName[0].split("");
  const final = arrName[arrName.length - 1].split("");
  const letterFirst = first[0];
  const letterFinal = final[0];
  const letters = `${letterFirst}${letterFinal}`;

  return (
    <>
      <Box
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Box
            sx={{
              p: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                minHeight: 50,
                alignItems: "center",
                mb: 3,
              }}
            >
              {user.image ? (
                <Avatar
                  sx={{
                    bgcolor: "var(--brand2)",
                    height: "32px",
                    width: "32px",
                  }}
                  sizes="small"
                  src={user.image}
                />
              ) : (
                <Avatar
                  sx={{
                    bgcolor: "var(--brand2)",
                    height: "32px",
                    width: "32px",
                  }}
                  sizes="small"
                >
                  <Typography fontSize={14} fontFamily="Inter, sans-serif">
                    {letters}
                  </Typography>
                </Avatar>
              )}
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--grey1)",
                }}
              >
                {user.name}
              </Typography>
            </Box>
            <Typography>Lance</Typography>
            <Box
              sx={{
                pt: 1,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 1,
              }}
            >
              <CurrencyInput
                customInput={Input}
                prefix="R$ "
                decimalsLimit={2}
                decimalSeparator=","
                decimalScale={2}
                placeholder="Inserir o valor do lance"
                required
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "var(--joy-fontSize-sm)",
                  borderRadius: 2,
                  borderColor: "var(--grey7)",
                  color: "var(--grey3)",
                  minWidth: 315,
                }}
              />
              <Button
                sx={{
                  color: "white",
                  bgcolor: "var(--brand1)",
                  borderRadius: 2,
                  ":hover": {
                    bgcolor: "var(--brand4)",
                    color: "var(--brand1)",
                  },
                }}
                type="submit"
              >
                Inserir proposta
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}
