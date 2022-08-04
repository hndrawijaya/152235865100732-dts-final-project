import { AccessTime, BakeryDining, RiceBowl } from "@mui/icons-material";
import { Chip, CircularProgress, Container, Grid, IconButton, ImageListItem, ImageListItemBar, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apis from "../services/Apis";

const Detail = () => {        
        const params = useParams();

        const url = `/recipe/${params.id}`;
        const [response, setResponse] = useState([]);
        const [loading, setloading] = useState(true);

        const fetchData = async (url) => {
                try {
                        const fetch = await apis.get(url);
                        setResponse(fetch.data.results);
                } catch (error) {
                        console.log(error);
                } finally {
                        setloading(false);
                }
        }

        useEffect(() => {
                fetchData(url);
        }, [url]);

        return (
                loading ? <><Container><CircularProgress color="inherit" /></Container></> :
                <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                }}
                                >
                                <ImageListItem key={response.title}>
                                <img
                                src={`${response.thumb}?w=248&fit=crop&auto=format`}
                                srcSet={`${response.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={response.title}
                                loading="lazy"
                                />
                                <ImageListItemBar
                                title={response.title}
                                actionIcon={
                                <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${response.title}`}
                                >
                                </IconButton>
                                }
                                />
                                </ImageListItem>
                                <Stack direction="row" spacing={1}  mt={2} mb={1}>
                                <Chip icon={<RiceBowl />} label={response.servings} size="small" color="primary" variant="outlined" />
                                <Chip icon={<BakeryDining />} label={response.dificulty} size="small" color="success" variant="outlined" />
                                <Chip icon={<AccessTime />} label={response.times} size="small" color="warning" variant="outlined" />
                                </Stack>
                                <Typography variant="body2" gutterBottom textAlign={"justify"}>
                                        {response.desc} 
                                </Typography>
                                </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                }}
                                >
                                </Paper>
                        </Grid>
                        </Grid>
                </Container>
        );
}

export default Detail;