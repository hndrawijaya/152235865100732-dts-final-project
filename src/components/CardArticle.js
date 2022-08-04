import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const CardArticle = (props) => {
        const article = props.data

        return (
                <Grid item xs={12} md={6} mt={5}>
                        <CardActionArea component="a" href="#">
                                <Card sx={{ display: 'flex' }}>
                                <CardContent sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h5">
                                {article.key}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                {article.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                {article.description}
                                </Typography>
                                </CardContent>
                                <CardMedia
                                component="img"
                                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                image={article.image}
                                />
                                </Card>
                        </CardActionArea>
                </Grid>
        );
}

export default CardArticle;