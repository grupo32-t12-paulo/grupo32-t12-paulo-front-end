import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VehicleData from '../VehicleData';


export default function CardProduct() {
    return (
        <Card sx={{ maxWidth: 751, minHeight: 213 }}
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "none",
                }
            }
        >
            <CardContent>
                <h2
                    style={{ maxWidth: "658px", fontSize: "20px", color: "#212529" }}
                >
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                </h2>
            </CardContent>
            <CardContent
                style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
                <VehicleData
                    backgroundYQ="#EDEAFD"
                    colorSpanYQ="#4529E6"
                />
                <Button variant="contained" component="label"
                    style={
                        {
                            width: "100px",
                            height: "38px",
                            background: "#4529E6"
                        }
                    }
                >
                    Comprar
                </Button>
            </CardContent>
        </Card>
    );
}
