import { Box, Container, Grid, Toolbar } from "@mui/material";
import ComponentCarousel from "../components/ComponentCarousel";
import ComponentList from "../components/ComponentList";
import React from 'react';

const Home = () => {


        return (
                <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <ComponentCarousel />
              <Grid item xs={12}>
              <ComponentList url="/category/recipes" />
              </Grid>
            </Grid>
          </Container>
        </Box>
        );
};

export default Home;