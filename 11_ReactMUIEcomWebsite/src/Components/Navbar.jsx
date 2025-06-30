import React, { useContext, useState } from 'react';
import {
  AppBar, Toolbar, Typography, Container, IconButton, Box, Button, Menu, MenuList, MenuItem,
  Tooltip, Avatar, ButtonGroup, Badge, Dialog, TextField
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = () => {
  const [anchorNav, setAnchorNav] = useState(null);
  const [anchorUserNav, setAnchorUserNav] = useState(null);
  const handleOpenNavMenu = (event) => setAnchorNav(event.currentTarget);
  const handleOpenUserNavMenu = (event) => setAnchorUserNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorNav(null);
  const handleCloseUserNavMenu = () => setAnchorUserNav(null);

  const { getCartTotalAmount } = useContext(StoreContext);

  
  const [openLogin, setOpenLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
  const [message, setMessage] = useState('');

  
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);

  const handleAuth = () => {
    if (!form.email || !form.password || (isRegister && !form.name)) {
      setMessage('Please fill all fields');
      return;
    }

    if (isRegister) {
      const newUser = { name: form.name, email: form.email };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      setIsRegister(false);
      setMessage('Registered successfully. Please log in.');
      setForm({ email: '', password: '', name: '' });
    } else {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser && savedUser.email === form.email) {
        setUser(savedUser);
        setMessage('Logged in successfully.');
        setOpenLogin(false);
        handleCloseUserNavMenu();
      } else {
        setMessage('User not found or wrong credentials');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setMessage('Logged out successfully');
  };

  return (
    <>
      <AppBar position="fixed" color='inherit' sx={{ boxShadow: 'none', color: 'gray ' }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton size='large' color='inherit' onClick={handleOpenNavMenu}>
                  <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <MenuList>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>Cart</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, marginRight: '-6px' }}>
                <FastfoodIcon sx={{ color: "#2E8B57" }} />
              </IconButton>
              <Typography variant="h6" noWrap component="a" href="#" sx={{ display: { xs: 'none', md: 'flex' }, fontWeight: 800, color: '#2E8B57', textDecoration: 'none', }}>
                Food Zone.
              </Typography>
            </Box>

            {/* Center Links */}
            <Box sx={{ flexGrow: 1, justifyContent: 'center', marginLeft: '-20px', display: { xs: 'none', md: 'flex' } }}>
              <ButtonGroup color='inherit'>
                <Button component={Link} to='/' variant='text' sx={{ fontSize: '18px', textTransform: 'capitalize', }} href='#home'>Home</Button>
                <Button variant='text' sx={{ fontSize: '18px', textTransform: 'capitalize', }} href='#about-us'>About Us</Button>
                <Button variant='text' sx={{ fontSize: '18px', textTransform: 'capitalize', }} href='#contact-us'>Contact Us</Button>
                <Button variant='text' sx={{ fontSize: '18px', textTransform: 'capitalize', }} href="#explore-menu">Menu</Button>
              </ButtonGroup>
            </Box>

            {/* Cart + Avatar */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton component={Link} to="/cart" color="inherit" sx={{ p: 2 }}>
                <Badge color="error" variant="dot" invisible={getCartTotalAmount() === 0}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }} onClick={handleOpenUserNavMenu}>
                  <Avatar sx={{ bgcolor: "#43a047 " }}>{user?.name?.charAt(0)?.toUpperCase() || 'A'}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu anchorEl={anchorUserNav} open={Boolean(anchorUserNav)} onClose={handleCloseUserNavMenu}>
                <MenuList>
                  <MenuItem component={Link} to="/my-profile">Profile</MenuItem>
                  <MenuItem>Acount</MenuItem>
                  <MenuItem component={Link} to="/my-orders">My Orders</MenuItem>
                  {!user && <MenuItem onClick={() => setOpenLogin(true)}>Login</MenuItem>}
                  {user && <MenuItem onClick={() => setLogoutConfirmOpen(true)}>Logout</MenuItem>}
                </MenuList>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Login/Register Dialog */}
      <Dialog open={openLogin} onClose={() => setOpenLogin(false)} maxWidth="xs" fullWidth>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            {isRegister ? 'Create Account' : 'Login'}
          </Typography>

          {isRegister && (
            <TextField
              fullWidth
              label="Name"
              size="small"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              sx={{ mb: 2 }}
            />
          )}
          <TextField
            fullWidth
            label="Email"
            size="small"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            size="small"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor: '#2E8B57' }} onClick={handleAuth}>
            {isRegister ? 'Create Account' : 'Login'}
          </Button>

          {message && (
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: 'green' }}>
              {message}
            </Typography>
          )}

          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: 'center', cursor: 'pointer', color: '#2E8B57' }}
            onClick={() => {
              setIsRegister(!isRegister);
              setMessage('');
            }}
          >
            {isRegister ? 'Already have an account? Login' : "Don't have an account? Create one"}
          </Typography>
        </Box>
      </Dialog>

      {/* Logout Confirmation Dialog */}
      <Dialog open={logoutConfirmOpen} onClose={() => setLogoutConfirmOpen(false)}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Are you sure?</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>Do you really want to logout?</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => setLogoutConfirmOpen(false)} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleLogout();
                setLogoutConfirmOpen(false);
                handleCloseUserNavMenu();
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Navbar;
