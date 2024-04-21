import Header from "../components/Header/Header"
import * as React from 'react';
import { news } from "../ExampleDataFiles/NewsData.json"
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";

import { Grid } from "@mui/material"
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';



const News = () => {
    return (
        <>
            <Header />

            <Container>
                <Typography variant="h4" align="center" style={{marginTop:"50px"}}>
                    NEWS
                </Typography>
                <Grid container spacing={5} justifyContent="center" style={{marginTop:"20px"}}>
                    <NewsCard data={news}/>
                </Grid>
            
            </Container>
             <Footer />
        </>

    );
};

export default News ;