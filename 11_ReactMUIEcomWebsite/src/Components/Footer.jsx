import React from 'react'
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Footer = () => {
  return (
    <Box sx={{background: 'linear-gradient(135deg, #181818, #232323)', color: 'white',py:4, px: '60px', mt: 8, width: '100%'}}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>

          <Grid item xs={12} md={4} sx={{width:"650px"}}>
            <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, marginRight:'-6px' }}>
              <FastfoodIcon sx={{color:"#2E8B57", fontSize: '32px'}} />
              <Typography variant="h4" fontWeight="bold"  sx={{color: '#2E8B57'}}>
                Food Zone.
              </Typography> 
            </IconButton>
            
            <Typography variant="body2">
              Delicious food delivered to your doorstep. Order now and enjoy! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, neque! Quisquam neque, fugiat perspiciatis vitae aut modi qui consequatur? Praesentium.
            </Typography>  
          </Grid>

          <Grid  item xs={6} md={2} sx={{width:'320px', marginRight:"-60px"}}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" underline="none" color="inherit" sx={{ display: 'block',mb: 0.5, transition: 'color 0.3s', '&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}>Home</Link>
            <Link href="#" underline="none" color="inherit" sx={{ display: 'block',mb: 0.5, transition: 'color 0.3s', '&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}>About Us</Link>
            <Link href="#" underline="none" color="inherit" sx={{ display: 'block',mb: 0.5, transition: 'color 0.3s', '&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}>Contact Us</Link>
            <Link href="#" underline="none" color="inherit" sx={{ display: 'block',mb: 0.5, transition: 'color 0.3s', '&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}>Menu</Link>
            <Link href="#" underline="none" color="inherit" sx={{ display: 'block',mb: 0.5, transition: 'color 0.3s', '&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}>Address</Link>
            <Link href="#" underline="none" color="inherit" sx={{ display: 'block',mb: 0.5, transition: 'color 0.3s', '&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}>Mobile App</Link>
          </Grid>

          <Grid item xs={6} md={2} sm={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://www.facebook.com" aria-label="Facebook">
                <FacebookIcon sx={{'&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}/>
              </IconButton>
              <IconButton color="inherit" href="https://www.instagram.com" aria-label="Instagram">
                <InstagramIcon sx={{'&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}/>
              </IconButton>
              <IconButton color="inherit" href="https://www.twitter.com" aria-label="Twitter">
                <TwitterIcon sx={{'&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}/>
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Get In Touch
            </Typography>
            <Link href="tel:+919898098980" color="inherit" underline="hover" sx={{'&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}>
                +91-98980 98980
              </Link>
            <Typography variant="body2">
              <Link href="mailto:contact@nomnomgo.com" color="inherit" underline="hover" sx={{'&:hover': {color: '#2E8B57', textDecoration: 'underline',},}}>
                contact@foodzone.com
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', pt: 4 }}>
          <Typography variant="body2" color="white">
            © {new Date().getFullYear()} Food Zone. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
