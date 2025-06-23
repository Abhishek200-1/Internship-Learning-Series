import React, { useState } from 'react';
import { Box, Typography, IconButton, dividerClasses } from '@mui/material';
import { assets } from '../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {

    const [itemCount, setItemCount] = useState(0);

  return (
    <Box sx={{display: 'flex',justifyContent: 'center',width: '100%',my: 2}}>
        <Box sx={{width: '100%',maxWidth: 280, height: 400, borderTopRightRadius: '40px', borderBottomLeftRadius: '40px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '2px solid transparent', position: 'relative',}}>
            <Box sx={{position: 'relative',width: '100%',height: 180, background: 'linear-gradient(to bottom, #eaf5ea, white)'}}>
                <Box component="img" src={image} alt="" sx={{width: '100%',height: '100%',objectFit: 'cover',borderBottomLeftRadius: '40px',transition: 'transform 0.4s ease-in-out','&:hover': {transform: 'scale(1.05)'}}}/>
                    {itemCount === 0 ? (
                    <IconButton onClick={() => setItemCount(prev => prev + 1)} sx={{ position: 'absolute', bottom: 10, right: 10, borderRadius: '50%', backgroundColor: 'rgba(46, 139, 87, 0.8)', padding: 1,'&:hover': {backgroundColor: 'rgba(46, 139, 87, 1)',},}}>
                    <Box component="img" src={assets.add_icon_white} alt="Add" sx={{ width: 24, height: 24 }} />
                    </IconButton>
                    ) : (
                    <Box sx={{position: 'absolute', bottom: 10, right: 10, display: 'flex', alignItems: 'center', gap: 1, padding: '6px 12px', borderRadius: '50px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '2px solid #2E8B57',}}>
                        <IconButton onClick={() => setItemCount(prev => prev - 1)} sx={{ padding: '4px' }}>
                            <Box component="img" src={assets.remove_icon_red} alt="Remove" sx={{ width: 24 }} />
                        </IconButton>

                        <Typography sx={{ fontWeight: 'bold', color: '#2E8B57' }}>{itemCount}</Typography>

                        <IconButton onClick={() => setItemCount(prev => prev + 1)} sx={{ padding: '4px' }}>
                            <Box component="img" src={assets.add_icon_green} alt="Add" sx={{ width: 24 }} />
                        </IconButton>
                    </Box>)}
                </Box>

                <Box sx={{ flexGrow: 1, p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1}}>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold',color: '#2E8B57', transition: 'color 0.3s ease-in-out','&:hover': {color: '#1E6B45'}}}>
                            {name}
                        </Typography>
                    <Box component="img" src={assets.rating_starts} alt="rating" />
                </Box>

                <Typography sx={{ color: '#4A4A4A', fontSize: 14, textAlign: 'left', minHeight: 40, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2,mb: 1,transition: 'color 0.3s ease-in-out','&:hover': {color: '#333'}}}>
                    {description}
                </Typography>

                <Typography sx={{ color: '#2E8B57', fontSize: 20, fontWeight: 'bold', mt: 'auto',textAlign: 'right'}}>
                    ₹ {price}.00
                </Typography>
            </Box>
        </Box>
    </Box>
  );
};

export default FoodItem;
