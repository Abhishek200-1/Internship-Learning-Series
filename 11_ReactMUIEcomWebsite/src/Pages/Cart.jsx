import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { Box, Typography, Avatar, IconButton, Button, TextField } from '@mui/material';


const Cart = () => {

  const {cartItems, food_list, removeFromCart, getCartTotalAmount } = useContext(StoreContext);

  return (
    <Box sx={{ padding: '20px', marginTop: '60px' }}>
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
      <Box sx={{display:'flex', flexDirection:'row', mt:4}}>
          <Box sx={{width:'40%'}} >
            <Typography variant="h6">Cart Total</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <Typography>Subtotal</Typography>
              <Typography>₹{getCartTotalAmount()}</Typography>
            </Box>
            <hr />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <Typography>Delivery Fee</Typography>
              <Typography>₹ 50.00</Typography>
            </Box>
            <hr />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <Typography>Total</Typography>
              <Typography>{getCartTotalAmount()+50}</Typography>
            </Box>
            <Button variant="contained" fullWidth sx={{ marginTop: '15px', backgroundColor: '#2E8B57', '&:hover': { backgroundColor: '#1b6a44' } }}>
              Proceed to Checkout
            </Button>
          </Box>

          <Box sx={{width:'60%', marginLeft:'50px'}}>
            <Typography variant="h6">Promocode</Typography>
            <Box sx={{display: 'flex',gap: 2,alignItems: 'center',backgroundColor: '#f0f0f0',borderRadius: 2,p: 1,}}>
            <TextField variant="outlined" size="small" fullWidth placeholder="Enter promo code" />
            <Button variant="contained" sx={{backgroundColor: '#2E8B57','&:hover': {backgroundColor: '#1b6a44', }, }}>Apply</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Cart
