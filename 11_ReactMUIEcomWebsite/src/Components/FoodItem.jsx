import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  useTheme
} from '@mui/material';
import { assets } from '../assets/assets';
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleAddToCart = () => {
    addToCart(id);
    setShowPopup(true);
  };

  const handlePopupClick = () => {
    setShowPopup(false);
    navigate('/cart');
  };

  useEffect(() => {
    if (!cartItems[id]) {
      setShowPopup(false);
    }
  }, [cartItems, id]);

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 280,
          height: 400,
          m: 'auto',
          borderTopRightRadius: '40px',
          borderBottomLeftRadius: '40px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: '0.3s',
          '&:hover': {
            transform: 'scale(1.08)',
            boxShadow: '0px 8px 20px rgba(46, 139, 87, 0.3)'
          }
        }}
      >
        <Box sx={{ position: 'relative', height: 180, bgcolor: '#f0f8f0' }}>
          <Box
            component="img"
            src={`${url}/images/${image}`}
            alt={name}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {!cartItems[id] ? (
            <IconButton
              onClick={handleAddToCart}
              sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                bgcolor: 'success.main',
                color: 'white',
                '&:hover': { bgcolor: 'success.dark' }
              }}
            >
              <Box component="img" src={assets.add_icon_white} alt="Add" width={24} />
            </IconButton>
          ) : (
            <Box
              sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: '20px',
                boxShadow: 1,
                border: '2px solid #2E8B57'
              }}
            >
              <Box
                component="img"
                src={assets.remove_icon_red}
                onClick={() => removeFromCart(id)}
                sx={{ width: 20, cursor: 'pointer' }}
              />
              <Typography>{cartItems[id]}</Typography>
              <Box
                component="img"
                src={assets.add_icon_green}
                onClick={() => addToCart(id)}
                sx={{ width: 20, cursor: 'pointer' }}
              />
            </Box>
          )}
        </Box>

        <Box sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle1" fontWeight="bold" color="success.main">
                {name}
              </Typography>
              <Box component="img" src={assets.rating_starts} alt="rating" width={70} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ minHeight: 40, textAlign: 'left' }}>
              {description}
            </Typography>
          </Box>
          <Typography align="right" fontWeight="bold" color="success.main" mt={1}>
            ₹ {price}.00
          </Typography>
        </Box>
      </Paper>

      {showPopup && (
        <Box
          onClick={handlePopupClick}
          sx={{
            position: 'fixed',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: 'success.main',
            color: 'white',
            py: 1,
            px: 2,
            borderRadius: 2,
            boxShadow: 3,
            zIndex: 999,
            cursor: 'pointer',
            transition: '0.3s',
            '&:hover': { bgcolor: 'success.dark' }
          }}
        >
          Item added to cart! Click here to go to your cart 🛕2
        </Box>
      )}
    </>
  );
};

export default FoodItem;
