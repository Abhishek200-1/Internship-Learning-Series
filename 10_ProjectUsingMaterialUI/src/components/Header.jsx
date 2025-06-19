import React from 'react'
import { AppBar, Container, Toolbar, Typography, Button, Box, TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';


const Header = ({ darkMode, setDarkMode }) => {

    const handleThemeToggle = () => {
      setDarkMode(!darkMode);
    };

  return (
    <AppBar>
        <Toolbar sx={{ gap: 2, flexWrap: 'wrap' }}>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>Logo</Typography>
            {/* Links to go to another page */}
            <Box sx={{ display: 'flex', gap: 1,}}>
                <Button color="inherit" component={Link}  to="/" sx={{'&:hover': {color: 'black',backgroundColor: 'transparent',},}} >Home</Button>
                <Button color="inherit" component={Link}  to="/about" sx={{'&:hover': {color: 'black',backgroundColor: 'transparent',},}}>About</Button>
                <Button color="inherit" component={Link}  to="/products" sx={{'&:hover': {color: 'black',backgroundColor: 'transparent',},}}>Products</Button>
                <Button color="inherit" component={Link}  to="/contact" sx={{'&:hover': {color: 'black',backgroundColor: 'transparent',},}}>Contact</Button>
            </Box>
            <TextField size="small" placeholder="Search…" variant="outlined" sx={{borderRadius: 1, ml: 2 }} InputProps={{startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),}}/>
            {/* theme toggle icon */}
            <IconButton color="inherit" onClick={handleThemeToggle}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {/* account icon */}
            <IconButton color="inherit" sx={{ ml: 1 }}>
                <AccountCircleIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Header
