import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import CurrencyInput from "react-currency-input-field";

export default function InputBid() {
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
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
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
        </form>
      </Box>
    </>
  );
}
