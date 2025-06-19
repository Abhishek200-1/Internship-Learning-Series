import React from 'react'
import { Container, Typography, Button, Box, TextField,Snackbar, Alert  } from '@mui/material';
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const Contacts = () => {

  const [openSnackbar, setOpenSnackbar] = useState(false);

  //form state handle 
    const [inputs, setInputs] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Message:"",
    });

    //input handle function
    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: [e.target.value],
        }));
    };

    //form handle function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted data', inputs);
        setInputs({
          FirstName: "",
          LastName: "",
          Email: "",
          Message:"",
        })
        setOpenSnackbar(true);
        // toast.success('Message sent successfully!', {
        // position: 'top-right',
        // autoClose: 3000,
        // });
    };

  return (
    <Container maxWidth="xl" sx={{minHeight: '100vh', display: 'flex',alignItems: 'center',justifyContent: 'center',mt: -7,width:'1538px'}}>
      <Box sx={{ height: '80vh',display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
        <form action="" onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column',alignItems: 'center',gap: '16px',padding: '20px',border:'2px solid black', borderRadius: '8px',}}>
          <Typography variant="h4" gutterBottom>Contact Us</Typography>
          <Box sx={{display:'flex', gap:2}}>
            <TextField
            name='FirstName'
            variant="outlined"
            type='text'
            label="Enter Your First Name"
            sx={{width:"200px"}}
            size='small'
            value={inputs.FirstName}
            onChange={handleChange}
            required
            />

            <TextField
              name='LastName'
              variant="outlined"
              type='text'
              label="Enter Your Last Name"
              sx={{width:"200px"}}
              size='small'
              value={inputs.LastName}
              onChange={handleChange}
              required
            />
          </Box>
            <TextField
              name='Email'
              variant="outlined"
              type='email'
              label="Enter Your Email"
              sx={{width:"415px"}}
              size='small'
              value={inputs.Email}
              onChange={handleChange}
              required
            />

            <TextField
              name='Message'
              type='text'
              variant="outlined"
              label="Enter Your Message..."
              multiline
              rows={4}
              fullWidth
              sx={{width:"415px"}}
              size='small'
              value={inputs.Message}
              onChange={handleChange}
              required
            />

          <Button type='submit' variant="contained" color="success" fullWidth>
            Send Message!
          </Button>
        </form>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
       {/* <ToastContainer /> */}
    </Container>
  );
}

export default Contacts
