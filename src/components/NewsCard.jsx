
import * as React from 'react';
import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function NewsCard({ data }) {

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
      
        return `${year}-${month}-${day} ${hours}:${minutes}`;
      }


    return (
        <>
            {data.map((item, idx) => {
                return <Grid item xs={12} ms={4} sm={4} key={idx}>
                    <Card sx={{ maxWidth: 345, height: "100%" }} style={{ padding: "10px", marginBottom: "20px" }}>
                        <CardHeader
                            subheader={formatDate(item.date)}
                        />
                        <Link to={`/new/${item.id}`}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={"https://alligator-api.onrender.com/" + item.src}
                                title="green iguana"
                                key={idx}
                                style={{ borderRadius: "5px" }}
                            />
                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Link>
                        <CardActions >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg>
                        </CardActions>
                    </Card>
                </Grid>
            })}

        </>

    );
}