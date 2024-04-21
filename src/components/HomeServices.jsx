import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function HomeServices({ data }) {

    return (
        <>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Послуги</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                    <Grid container spacing={5} justifyContent="center" style={{marginTop:"20px"}}>
                        {data.map((item, idx) => {
                            return (
                                <Grid item xs={12} ms={4} sm={4} key={idx}>
                                    <Card sx={{ maxWidth: 345, height: "100%"  }} style={{ borderRadius: "5px", display: "flex", flexDirection: "column" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={item.src}
                                            title="green iguana"
                                            style={{ borderRadius: "5px" }}
                                        />
                                        <CardContent style={{ flex: "1 1 auto" }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                )
                        })}
</Grid>
                    </div>

                </div>
            </section>
        </>
    )

}