import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function CardDescriptionProduct() {
    return (
        <Box sx={{ maxWidth: 751, minHeight: 213 }}
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    gap: "20px"
                }
            }
        >
            <h2 style={{ fontSize: "20px" }}>Descrição</h2>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom
                style={{ color: "#495057" }}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
        </Box>
    );
}
