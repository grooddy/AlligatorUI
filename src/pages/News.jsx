import React, { useState, useEffect } from 'react';
import  NewsDataService  from "../api/NewsDataService"
import NewsCard from "../components/NewsCard";

import { Grid } from "@mui/material"
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';



const News = () => {

    const [newsItems, setNewsItems] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await NewsDataService.fetchAllNews();
                setNewsItems(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);
    

    return (
        <>
            <Container>
                <Typography variant="h4" align="center" style={{marginTop:"50px"}}>
                    NEWS
                </Typography>
                <Grid container spacing={5} justifyContent="center" style={{marginTop:"20px"}}>
                {newsItems && <NewsCard data={newsItems} />}
                   
                </Grid>            
            </Container>
        </>

    );
};

export default News ;