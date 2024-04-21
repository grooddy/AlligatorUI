
import * as React from 'react';
import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function NewsCard({ data }) {
    return (
        <>
            {data.map((item, idx) => {
                return <>
                
                    <Grid item xs={12} ms={4} sm={4} key={idx}>
                        <Card sx={{ maxWidth: 345 }} style={{padding: "10px",marginBottom:"20px"}}>
                            <CardHeader
                                subheader={item.date}
                            />
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.src}
                                title="green iguana"
                                key={idx}
                                style={{borderRadius:"5px"}}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained'>Share</Button>
                                <Link to={`/new/${item.id}`}>Більше</Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </>
            })}

        </>

    );
}