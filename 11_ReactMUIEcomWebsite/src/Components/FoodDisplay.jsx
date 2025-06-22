import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import FoodItem from '../Components/FoodItem';
import { Box, Typography, Grid } from '@mui/material';


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!food_list) {
    return <Typography>Loading food items...</Typography>;
  }

  return (
    <Box id="food_display" sx={{ mt: 4, px: 2 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 'bold',
          color: '#2E8B57',
          textAlign: 'center',
        }}
      >
        Top Dishes Near You
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </Box>
  );
};

export default FoodDisplay;
