import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Stack,
  Snackbar,
  Alert,
} from '@mui/material';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  useEffect(() => {
    const data = [
      {
        id: 1,
        items: [
          { name: 'Burger', qty: 2, price: 150 },
          { name: 'Fries', qty: 1, price: 70 },
        ],
      },
      {
        id: 2,
        items: [
          { name: 'Pizza', qty: 1, price: 300 },
          { name: 'Cold Drink', qty: 2, price: 80 },
        ],
      },
    ];
    setOrders(data);
  }, []);

  const printBill = (id) => {
    window.print();
  };

  const raiseComplaint = (id) => {
    setMessage(`Complaint raised for Order #${id}`);
    setSeverity('success');
    setShowMessage(true);
  };

  const reorderItems = (id) => {
    setMessage(`Items from Order #${id} added to cart`);
    setSeverity('info');
    setShowMessage(true);
  };

  return (
    <Box sx={{ padding: '60px', marginTop: '60px', bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        My Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography>No orders found.</Typography>
      ) : (
        orders.map((order, index) => (
          <Paper key={index} sx={{ p: 2, mb: 3, backgroundColor: '#fff' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Order #{order.id}
            </Typography>
            <Divider sx={{ mb: 1 }} />

            <List>
              {order.items.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText
                    primary={`${item.name} x${item.qty}`}
                    secondary={`₹${item.price} each | ₹${item.qty * item.price} total`}
                  />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ mt: 1 }} />

            <Typography sx={{ mt: 1 }}>
              <strong>Total:</strong>{' '}
              ₹{order.items.reduce((total, item) => total + item.qty * item.price, 0)}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button variant="outlined" onClick={() => printBill(order.id)}>
                Print Bill
              </Button>
              <Button variant="outlined" color="error" onClick={() => raiseComplaint(order.id)}>
                Raise Complaint
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#2E8B57', '&:hover': { backgroundColor: '#1b6a44' } }} onClick={() => reorderItems(order.id)} >
                Reorder
              </Button>
            </Stack>
          </Paper>
        ))
      )}

      <Snackbar
        open={showMessage}
        autoHideDuration={3000}
        onClose={() => setShowMessage(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowMessage(false)} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MyOrders;
