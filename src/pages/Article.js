import { CircularProgress, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import React from 'react';
import CardArticle from "../components/CardArticle";
import apis from "../services/Apis";

const Article = () => {
        const url = '/articles/new';

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
                <Grid container spacing={2}>
                {response.map((data) => {
                        return (
                                <CardArticle data={data} />
                                )
                })}
                </Grid>
        );
}

export default Article;