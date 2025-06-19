import React from 'react'
import { BottomNavigation, BottomNavigationAction,Typography } from '@mui/material'

const Footer = () => {
  return (
    <BottomNavigation sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 2,
      }}>
      <Typography variant="body2">&copy; {new Date().getFullYear()} My Website. All rights reserved.</Typography>
    </BottomNavigation>
  )
}

export default Footer
