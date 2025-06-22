import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <Box id="explore-menu" sx={{ textAlign: 'center', px: 2, mt: 4 }}>
      <Typography variant="subtitle1" sx={{ color: '#2E8B57', mt: 3, mb: -1 }}>
        Menu
      </Typography>

      <Typography variant="h4" sx={{color: '#262626',fontWeight: 600,display: 'inline-block',position: 'relative','&::after': {content: '""',display: 'block',width: '50px',height: '4px',background: '#2E8B57',margin: '8px auto 0',borderRadius: '4px',transition: 'width 0.3s ease-in-out',},'&:hover::after': {width: '75px',},}}>
        Explore Our Best Menu
      </Typography>

      <Typography sx={{maxWidth: '60%',color: '#808080',fontSize: '16px',mx: 'auto',lineHeight: 1.5,mt: 1,mb: 3,transition: 'color 0.3s ease-in-out','&:hover': {color: '#555',},'@media (max-width: 1050px)': {maxWidth: '100%',fontSize: '14px',},}}>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </Typography>

        <Box sx={{display: 'flex', gap: { xs: '20px', sm: '30px' }, justifyContent:'center', overflowX: 'auto', whiteSpace: 'nowrap', pb: 2, scrollbarWidth: 'none', scrollSnapType: 'x mandatory','&::scrollbar': {display: 'none',},}}>
            {menu_list.map((item, index) => (
            <Box key={index} onClick={() => setCategory((prev) => prev === item.menu_name ? 'All' : item.menu_name)}sx={{flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', scrollSnapAlign: 'center',transition: 'transform 0.3s ease-in-out',cursor: 'pointer',}}>
                <Box component="img" src={item.menu_image} alt={item.menu_name} sx={{width: { xs: '60px', sm: '7.5vw' }, minWidth: '60px', borderRadius: '50%', transition: '0.3s', boxShadow:category === item.menu_name ? '0px 0px 10px rgba(46, 139, 87, 0.6)': 'none', border:category === item.menu_name ? '4px solid #2E8B57' : 'none', p: category === item.menu_name ? '2px' : 0, '&:hover': {boxShadow: '0px 5px 15px rgba(46, 139, 87, 0.4)',},}}/>
                <Typography sx={{ mt: 1, color: '#747474', fontSize: '16px', fontWeight: 500, transition: 'color 0.3s ease-in-out', '&:hover': {color: '#2E8B57', },}}>
                    {item.menu_name}
                </Typography>
            </Box>))}
        </Box>
      <Divider sx={{ my: 2, backgroundColor: '#e2e2e2', height: '2px' }} />
    </Box>
  );
};

export default ExploreMenu;
