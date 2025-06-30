import React, { useContext } from 'react'
import {AppBar, Toolbar, Typography, Container, IconButton, Box, Button, Menu, MenuList, MenuItem, Tooltip, Avatar, ButtonGroup, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [anchorNav, setAnchorNav] = useState(null);
  const [anchorUserNav, setAnchorUserNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleOpenUserNavMenu = (event) => {
    setAnchorUserNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  const handleCloseUserNavMenu = () => {
    setAnchorUserNav(null);
  };

  const {getCartTotalAmount} = useContext(StoreContext)

  return (
    <AppBar position="fixed" color='inherit' sx={{boxShadow:'none', color:'gray '}}>
      <Container maxWidth='xl'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size='large' color='inherit' onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={handleCloseNavMenu} sx={{display:{xs:'flex', md:'none'}}}>
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Cart</MenuItem>
              </MenuList>
            </Menu>
            </Box>
            {/* Logo for Desktop */}
            <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, marginRight:'-6px' }}>
              <FastfoodIcon sx={{color:"#2E8B57"}} />
            </IconButton>
            <Typography variant="h6" noWrap component="a" href="#" sx={{display: { xs: 'none', md: 'flex' },fontWeight: 800,color: '#2E8B57',textDecoration: 'none',}}>Food Zone.</Typography>
          </Box>

          {/* Center Links */}
          <Box  sx={{ flexGrow: 1, justifyContent: 'center', marginLeft:'-20px', display: { xs: 'none', md: 'flex' }}}>
            <ButtonGroup color='inherit'>
              <Button component={Link} to='/' variant='text' sx={{fontSize:'18px', textTransform: 'capitalize',}} href='#home'>Home</Button>
              <Button variant='text' sx={{fontSize:'18px', textTransform: 'capitalize',}} href='#about-us'>About Us</Button>
              <Button variant='text' sx={{fontSize:'18px', textTransform: 'capitalize',}} href='#contact-us'>Contact Us</Button>
              <Button variant='text' sx={{fontSize:'18px', textTransform: 'capitalize',}} href="#explore-menu">Menu</Button>
            </ButtonGroup>
          </Box>

          {/* cart */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton component={Link} to="/cart" color="inherit" sx={{ p: 2 }}>
      <Badge color="error" variant="dot" invisible={getCartTotalAmount() === 0}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }} onClick={handleOpenUserNavMenu}>
                <Avatar sx={{ bgcolor: "#43a047 "}}>A</Avatar>
              </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorUserNav} open={Boolean(anchorUserNav)} onClose={handleCloseUserNavMenu}>
              <MenuList>
                <MenuItem component={Link} to="/my-profile">Profile</MenuItem>
                <MenuItem>Acount</MenuItem>
                <MenuItem component={Link} to="/my-orders" >My Orders</MenuItem>
                <MenuItem onClick={() => alert('hello')}>Login</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
  )
}

export default Navbar