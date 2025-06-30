import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Divider, List, ListItem, Paper } from '@mui/material';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <Box sx={{ display: 'flex', padding: '20px', marginTop: '70px', height: '600px', px:8 }}>
      {/* Sidebar */}
      <Paper sx={{ width: '200px', marginRight: '20px', padding: '10px' }}>
        <Typography variant="h6" sx={{ marginBottom: '10px' }}>My Account</Typography>
        <Divider />
        <List>
          <ListItem button>Profile</ListItem>
          <ListItem button>Orders</ListItem>
          <ListItem button>Settings</ListItem>
        </List>
      </Paper>

      {/* Main Section */}
      <Paper sx={{ flex: 1, padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Side - User Info */}
        <Box>
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>Personal Information</Typography>
          <Typography><b>Name:</b> {user.name || 'N/A'}</Typography>
          <Typography sx={{ marginTop: '10px' }}><b>Email:</b> {user.email || 'N/A'}</Typography>
        </Box>

        {/* Right Side - Avatar */}
        <Box sx={{ textAlign: 'center' }}>
          <Avatar sx={{ width: 100, height: 100, bgcolor: 'green', fontSize: 40, margin: '0 auto' }}>
            {user.name?.charAt(0)?.toUpperCase() || 'A'}
          </Avatar>
          <Typography variant="body2" sx={{ marginTop: '10px', color: 'gray' }}>Profile Picture</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
