import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',textAlign: 'center', minHeight:'100vh', mt:'-56px', width:'1536px'}}>
      <Container>
        <Typography variant="h3">
          Welcome to Our Website!
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          We provide amazing products and services. Use the navigation above to explore our site.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" component={Link} to="/products">
            View Products
          </Button>
          <Button variant="outlined" component={Link} to="/contact">
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
