import {
  Box,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import apis from "../services/Apis";
import CardRecipe from "./CardRecipe";

const ComponentLIst = (props) => {
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

        /*axios for category*/ 
        const [selected, setSelected] = useState(null);

        let urlCat = '/recipes-length/?limit=10';       

        if (selected != null)
                urlCat = `category/recipes/${selected}`;
        
        const [resCategory, setResCategory] = useState([]);
        const [loadingCategory, setloadingCategory] = useState(true);

        const fetchDataCategory = async (url) => {
                try {
                        const fetchCategory = await apis.get(url);
                        setResCategory(fetchCategory.data.results);
                } catch (error) {
                        console.log(error);
                } finally {
                        setloadingCategory(false);
                }
        }

        useEffect(() => {
                fetchDataCategory(urlCat);
        }, [urlCat]);

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
          <Box
            mr={5}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >          
                <Box sx={{ minWidth: 100 }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel htmlFor="category">Filter Category:</InputLabel>
                        <Select
                        id="category"
                        defaultValue=""
                        onChange={(e) => setSelected(e.target.value)}
                        >
                        <MenuItem disabled value="">
                        <em>Select Category</em>
                        </MenuItem>
                        {loadingCategory ? '' : 
                        response.map((data) => (
                        <MenuItem value={data.key}>
                                {data.category}
                        </MenuItem>
                        ))}
                        </Select>
                </FormControl>
                </Box>
          </Box>
                <Grid container spacing={2}>
                        {resCategory.map((card) => {
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

export default ComponentLIst;