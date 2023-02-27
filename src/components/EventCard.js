import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

const EventCard = (props) => {
    return (
        <Card elevation={10} sx={{ mx:{xs:"none", sm:2}, mb:10, width: 300, maxHeight: 350 }}>
            <CardMedia 
                sx={{ height: 160 }}
                image={props.image}
                title="green iguana"
            />
            <CardContent>
                <Typography fontFamily={"cursive"} textAlign={"left"} gutterBottom sx={{minHeight:80}} variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography mb={-2} textAlign={"left"} variant="h6" color="text.secondary">
                    {props.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button style={{
                    fontFamily:"cursive"
                }}  href={props.link} size="small">Register</Button>
                <Typography flexGrow={1}/>
                <Typography fontFamily={"cursive"}>Genre - {props.genre}</Typography>
            </CardActions>
        </Card>
    );
}

export default EventCard;
