import {
        CircularProgress,
        Container,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import apis from "../services/Apis";
import CardRecipe from "./CardRecipe";

const NewList = (props) => {
        const { url } = props;

        /*axios for category*/
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
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item>
                <Grid container spacing={2}>
                        {response.map((card) => {
                                return (
                                        <CardRecipe data={card} />
                                )
                        })}
                </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NewList;