import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ironman from '../assets/ironman.jpg'

const About = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', mb: 4, mt:'120px' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Learn more about our mission, vision, and values.
        </Typography>
      </Box>
      
      <Box sx={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', Width: '600px', minHeight:'60vh' }} >
        <Typography variant="body1" paragraph>
          Welcome to our website! We are a passionate team dedicated to building high-quality products that solve real-world problems. Our mission is to deliver value and satisfaction to our users through innovative solutions.
        </Typography>

        <Typography variant="body1" paragraph>
          Our journey started with a simple idea: to make technology accessible and useful for everyone. Since then, we've grown into a collaborative team focused on excellence, creativity, and continuous improvement.
        </Typography>

        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolore voluptas similique possimus facere harum a mollitia sequi perspiciatis placeat animi quod, veniam recusandae, nisi officiis ex.
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for visiting our site. We hope you find what you're looking for and enjoy your experience here. If you have any questions or feedback, feel free to reach out through our Contact page!
        </Typography>

        <Box
          component="img"
          src={ironman}
          alt="About us banner"
          sx={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: 2,
            mb: 3,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            height:'250px'
          }}
        ></Box>
      </Box>
    </>
  )
}

export default About
