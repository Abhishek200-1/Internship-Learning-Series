import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Box, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [sortBy, setSortBy] = useState('default');

  const filteredFood = food_list
    .filter((item) => category === 'All' || item.category === category)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <Box id="food_display" sx={{ mt: 4, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" align="center" sx={{ fontWeight: 600, color: '#262626', position: 'relative', display: 'inline-block', pb: 1, '&::after': { content: '""', width: '50%', height: '4px', backgroundColor: '#2E8B57', position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)', borderRadius: '2px', transition: 'width 0.3s ease-in-out' } }}>
          Top Dishes Near You
        </Typography>
      </Box>

      {/* Right aligned Sort Dropdown */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 1, mr:'105px' }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="price-asc">Price (Low to High)</MenuItem>
            <MenuItem value="price-desc">Price (High to Low)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4} sx={{ mt: 1, rowGap: '50px', justifyContent: 'center' }}>
        {filteredFood.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <FoodItem
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoodDisplay;
