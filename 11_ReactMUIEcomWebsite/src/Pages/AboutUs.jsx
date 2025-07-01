import React from 'react'
import { Box, Button, Container, Typography, Divider } from '@mui/material'
import { assets } from '../assets/assets'

const AboutUs = () => {
  return (
    <Container id="about-us" maxWidth="xl" sx={{ px: { xs: 4, sm: 8, md: 16, },py: 6}}>
        <Box sx={{display: 'flex',flexDirection: { xs: 'column', md: 'row' },alignItems: 'center',justifyContent: 'center',gap:"180px"}}>
            <Box sx={{width: { xs: '100%', md: '50%' },display: 'flex',justifyContent: 'center', pr: { md: 4 },}}>
                <Box component="img" src={assets.header_img12} alt="About Us" sx={{width: '100%',maxWidth: '500px',borderRadius: '16px',boxShadow: 3,}}/>
            </Box>

            <Box sx={{width: { xs: '100%', md: '50%'},textAlign: { xs: 'center', md: 'left' },}}>  
                <Typography variant="h4" color="#155724" gutterBottom>
                    About Us</Typography>
                <Typography variant="body1" color="text.secondary" mb={2}>
                    Welcome to <Box component="span" sx={{ fontWeight: 'bold', color: '#218838' }}>FoodZone.</Box>, we believe in delivering happiness in every bite. 
                    Our mission is to bring you the best food from your favorite restaurants, 
                    fresh and hot, right to your doorstep.
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                    With a network of top-rated restaurants and a team of dedicated delivery partners, 
                    we ensure fast, reliable, and quality service. Your cravings, our responsibility!
                </Typography>
                <Button variant="contained" color="success" size="large" href="#explore-menu" >
                    Order Now
                </Button>
            </Box>
        </Box>
        <Divider sx={{ my: 2, backgroundColor: '#e2e2e2', height: '2px', mt:12 }} />
    </Container>
  )
}

export default AboutUs