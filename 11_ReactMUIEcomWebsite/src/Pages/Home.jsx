import React from 'react'
import {Box, Button, Typography, } from '@mui/material'
import {assets} from '../assets/assets'
import { useState} from 'react';

const images = [
  assets.header_img2,
];

const Home = () => {
    
    const [currentImage, setCurrentImage] = useState(0);
    const [menu, setMenu] = useState("");

  return (
    <Box sx={{height: '65vh', width:'80vw', backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2, borderTopRightRadius: '50px', borderBottomLeftRadius: '50px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)', transition: 'background-image 1s ease-in-out', margin: '80px auto'}}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))', zIndex: 1, }}/>
        <Box sx={{position: 'relative', zIndex: 2, marginRight:"250px", p: { xs: 3, sm: 5 }, borderRadius: '16px', maxWidth: '85vw', textAlign: 'start', animation: 'fadeIn 1.5s ease-in-out', '@keyframes fadeIn': {from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' },},}}>
            <Typography variant="h3" sx={{mb: 2,fontWeight: 700,fontSize: { xs: '6vw', sm: '3vw' },color: 'white',textShadow: '2px 2px 10px rgba(0,0,0,0.5)',}}>
                Your Favourite <br /> Food Delivered Hot & <br />Fresh
            </Typography>
            <Typography variant="body1" sx={{mb: 4, color: 'white', fontSize: { xs: '2vw', sm: '1.1vw' },opacity: 0.9,}}>
                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest <br />ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience,<br /> one delicious meal at a time.
            </Typography>
            <Button variant="contained" color="secondary" href="#explore-menu" onClick={() => setMenu('menu')} sx={{textTransform: 'capitalize',fontWeight: 'bold',fontSize: '16px',px: 4,py: 1.5,borderRadius: '50px', backgroundColor: 'white', color: '#2E8B57', boxShadow: '0 4px 12px rgba(46, 139, 87, 0.3)', '&:hover': {backgroundColor: '#2E8B57', color: 'white', transform: 'scale(1.05)', boxShadow: '0 6px 16px rgba(46, 139, 87, 0.5)', },}}>View Menu</Button>
        </Box>
    </Box>
  )
}

export default Home
