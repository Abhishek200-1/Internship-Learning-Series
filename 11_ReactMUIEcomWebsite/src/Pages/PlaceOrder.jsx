import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Button, Divider, Dialog, DialogTitle, DialogContent, DialogActions, RadioGroup, FormControlLabel, Radio, Snackbar, Alert} from '@mui/material';
import { StoreContext } from '../context/StoreContext';

const PlaceOrder = () => {
  const { getCartTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  // store the amount details
  const subtotal = getCartTotalAmount();
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

   // for handling popup and payment state
  const [openDialog, setOpenDialog] = useState(false);
  const [paymentMode, setPaymentMode] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  
  // when user clicks on Proceed to Payment
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDialog(true);
  };

    // after user confirms payment
  const handleConfirmPayment = () => {
    setOpenDialog(false);
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 5, mt: "120px",px: 8}}>
        {/* Left: Delivery Form */}
        <Box sx={{ width: '100%', maxWidth: '40%' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#2E8B57', textAlign: 'center', borderBottom: '2px solid #2E8B57', pb: 1}}>
            Delivery Information
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField name="firstname" label="First Name" fullWidth required size="small" />
            <TextField name="lastname" label="Last Name" fullWidth required size="small" />
          </Box>
          <TextField name="email" label="Email Address" fullWidth required size="small" sx={{ mb: 2 }} />
          <TextField name="street" label="Street" fullWidth required size="small" sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField name="city" label="City" fullWidth required size="small" />
            <TextField name="state" label="State" fullWidth required size="small" />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField name="zipcode" label="Zip Code" fullWidth required size="small" />
            <TextField name="country" label="Country" fullWidth required size="small" />
          </Box>
          <TextField name="phone" label="Phone" fullWidth required size="small" />
        </Box>

        {/* Right: Cart Totals */}
        <Box sx={{ width: '100%', maxWidth: '40%' }}>
          <Box sx={{ p: 2.5, border: '1px solid #ccc', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', mb: 2, borderBottom: '2px solid #ddd', pb: 1}}>
              Cart Totals
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal</Typography>
              <Typography>₹{subtotal}</Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Delivery Fee</Typography>
              <Typography>₹{deliveryFee}</Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography fontWeight="bold">Total</Typography>
              <Typography fontWeight="bold">₹{total}</Typography>
            </Box>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, py: 1.2, fontWeight: 'bold', backgroundColor: '#2E8B57','&:hover': { backgroundColor: '#1b6a44' } }}>
              Proceed to Payment
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Payment Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Select Payment Method</DialogTitle>
        <DialogContent>
          <RadioGroup value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
            <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
            <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmPayment} disabled={!paymentMode} variant="contained">
            Confirm Payment
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar open={showSuccess} autoHideDuration={3000} onClose={() => setShowSuccess(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Payment successful! Redirecting to Home...
        </Alert>
      </Snackbar>
    </>
  );
};

export default PlaceOrder;
