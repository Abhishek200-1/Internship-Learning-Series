import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import { Box, Typography, Avatar, IconButton, Button, TextField, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getCartTotalAmount } = useContext(StoreContext);

  //for alert
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  // promo
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  const subTotal = getCartTotalAmount();
  const deliveryFee = subTotal === 0 ? 0 : 50;
  const totalAfterDiscount = Math.max(subTotal - discount + deliveryFee, 0);

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'FOOD10') {
      const discountValue = subTotal * 0.10;
      setDiscount(discountValue);
      setPromoMessage('FOOD10 applied: 10% off');
    } else if (code === 'SAVE50') {
      setDiscount(50);
      setPromoMessage('SAVE50 applied: ₹50 off');
    } else {
      setDiscount(0);
      setPromoMessage('Invalid promo code');
    }
  };

  return (
    <Box sx={{ padding: '20px', marginTop: '60px', px: 8 }}>
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>Your Cart</Typography>

      {/* cart headers */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr 0.5fr', fontWeight: 'bold', color: 'gray', marginBottom: '10px' }}>
        <Typography>Item</Typography>
        <Typography>Title</Typography>
        <Typography>Price</Typography>
        <Typography>Qty</Typography>
        <Typography>Total</Typography>
        <Typography>Remove</Typography>
      </Box>

      {/* cart items */}
      {food_list.map((item) => (
        cartItems[item._id] > 0 && (
          <Box key={item._id} sx={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr 1fr 0.5fr', alignItems: 'center', marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            <Avatar src={item.image} sx={{ width: 50, height: 50 }} variant="rounded" />
            <Typography>{item.name}</Typography>
            <Typography>₹{item.price}</Typography>
            <Typography>{cartItems[item._id]}</Typography>
            <Typography>₹{item.price * cartItems[item._id]}</Typography>
            <IconButton onClick={() => removeFromCart(item._id)}>
              X
            </IconButton>
          </Box>
        )
      ))}

      <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
        <Box sx={{ width: '40%' }} >
          <Typography variant="h6">Cart Total</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Typography>Subtotal</Typography>
            <Typography>₹{subTotal.toFixed(2)}</Typography>
          </Box>
          {discount > 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <Typography>Discount</Typography>
              <Typography sx={{ color: 'green' }}>- ₹{discount.toFixed(2)}</Typography>
            </Box>
          )}
          <hr />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Typography>Delivery Fee</Typography>
            <Typography>₹ {deliveryFee}</Typography>
          </Box>
          <hr />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Typography>Total</Typography>
            <Typography>{totalAfterDiscount.toFixed(2)}</Typography>
          </Box>
          <Button onClick={() => { if (subTotal === 0) { setShowAlert(true); } else { navigate('/order'); } }} variant="contained" fullWidth sx={{ marginTop: '15px', backgroundColor: '#2E8B57', '&:hover': { backgroundColor: '#1b6a44' } }}>
            Proceed to Checkout
          </Button>
        </Box>

        <Box sx={{ width: '60%', marginLeft: '50px' }}>
          <Typography variant="h6">Promocode</Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 2, p: 1 }}>
            <TextField variant="outlined" size="small" fullWidth placeholder="Enter promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            <Button variant="contained" onClick={handleApplyPromo} sx={{ backgroundColor: '#2E8B57', '&:hover': { backgroundColor: '#1b6a44' } }}>
              Apply
            </Button>
          </Box>
          {promoMessage && (
            <Typography sx={{ mt: 1, color: promoMessage.includes('Invalid') ? 'red' : 'green' }}>
              {promoMessage}
            </Typography>
          )}
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>Available Promo Codes:</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ backgroundColor: '#e8f5e9', border: '1px solid #2E8B57', borderRadius: 1, p: 1.2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#2E8B57' }}>FOOD10</Typography>
                  <Typography variant="body2" sx={{ color: 'gray' }}>Get 10% off your total order</Typography>
              </Box>
              <Box sx={{ backgroundColor: '#fff3e0', border: '1px solid #ff9800', borderRadius: 1, p: 1.2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#ef6c00' }}>SAVE50</Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>Get flat ₹50 off on any order</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbar open={showAlert} autoHideDuration={3000} onClose={() => setShowAlert(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="warning" sx={{ width: '100%' }}>
          Please add some items to your cart!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Cart;
