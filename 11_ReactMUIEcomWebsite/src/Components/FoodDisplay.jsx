import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import {Box, Typography, Grid} from '@mui/material'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <Box id="food_display" sx={{ mt:4 , px: { xs: 2, sm: 4, md: 8 } }}>
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" align="center" sx={{fontWeight: 600,color: '#262626',position: 'relative',display: 'inline-block', pb: 1,'&::after': {content: '""',width: '50%',height: '4px',backgroundColor: '#2E8B57',position: 'absolute',left: '50%',bottom: 0,transform: 'translateX(-50%)',borderRadius: '2px',transition: 'width 0.3s ease-in-out',},}}>
                Top Dishes Near You
            </Typography>
        </Box>
        
        <Grid container spacing={4} sx={{mt: 4, rowGap: '50px', justifyContent:'center'}}>
            {food_list && food_list
            .filter(item => category === "All" || item.category === category)
            .map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{display: 'flex',justifyContent: 'center',}}>
                    <FoodItem id={item._id} name={item.name} description={item.description} price={item.price}image={item.image}/>
                </Grid>
            ))}
        </Grid>
    </Box>      
  )
}

export default FoodDisplay
