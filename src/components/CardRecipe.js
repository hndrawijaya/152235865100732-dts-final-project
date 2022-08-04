import { AccessTime, BakeryDining, RiceBowl } from "@mui/icons-material";
import {
  Box,
  Card,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardRecipe = (props) => {
  //const navigate = useNavigate();

  const card = props.data;

  return (
    <>
      <Grid item xs={4}>
        <Link to={`/detail/${card.key}`} style={{ textDecoration: 'none' }}>
          <Card sx={{
            height: '250px',
            backgroundImage: `url(${card.thumb})`,
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            "&:hover .hidden": {
            display: "flex"
            }
          }}>
            <Box className="hidden" sx={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              height: '100%',
              display: 'none',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Typography fontSize={16} fontWeight='bold' sx={{ textAlign: 'center' }}>View</Typography>
            </Box>
          </Card>
          </Link>
          <Typography variant="subtitle1" color="white" component="div">
            {card.title}
          </Typography>
          <Stack direction="row" spacing={1} mb={1}>
            <Chip icon={<RiceBowl />} label={card.portion} size="small" color="primary" variant="outlined" />
            <Chip icon={<BakeryDining />} label={card.dificulty} size="small" color="success" variant="outlined" />
            <Chip icon={<AccessTime />} label={card.times} size="small" color="warning" variant="outlined" />
          </Stack>
      </Grid>
    </>
  );
};

export default CardRecipe;