import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField, Snackbar, Alert, Divider, Stack, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactUs = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [inputs, setInputs] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Message: '',
  });

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data', inputs);

    setInputs({
      FirstName: '',
      LastName: '',
      Email: '',
      Message: '',
    });

    setOpenSnackbar(true); 
  };

  return (
    <Container id="contact-us" maxWidth="xl" sx={{ py: 6, px: { xs: 4, sm: 8, md: 16 } }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
        {/* Contact Info */}
        <Box sx={{ flex: 1, pr: { md: 4 } }}>
          <Typography variant="h4" gutterBottom>Get In Touch</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis doloribus cupiditate voluptatum deleniti rem?
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <LocationOnIcon color="success" />
            <Typography>1256 Vesu, Surat, India</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <PhoneIcon color="success" />
            <Typography>+91 9876543210</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
            <EmailIcon color="success" />
            <Typography>support@foodzone.com</Typography>
          </Stack>

          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" spacing={2}>
            <IconButton color="primary"><FacebookIcon /></IconButton>
            <IconButton color="secondary"><InstagramIcon /></IconButton>
            <IconButton sx={{ color: '#1DA1F2' }}><TwitterIcon /></IconButton>
          </Stack>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, border: '2px solid #ccc', p: 3, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>Send a message</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              name="FirstName" label="Enter Your First Name" size="small"
              value={inputs.FirstName} onChange={handleChange}
              fullWidth required
            />
            <TextField
              name="LastName" label="Enter Your Last Name" size="small"
              value={inputs.LastName} onChange={handleChange}
              fullWidth required
            />
          </Box>
          <TextField
            name="Email" label="Enter Your Email" type="email" size="small"
            value={inputs.Email} onChange={handleChange}
            fullWidth required
          />
          <TextField
            name="Message" label="Enter Your Message..." multiline rows={4} size="small"
            value={inputs.Message} onChange={handleChange}
            fullWidth required
          />
          <Button type="submit" variant="contained" color="success">
            Send Message!
          </Button>
        </Box>
      </Box>

      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setOpenSnackbar(false)}>
          Message sent successfully. We'll get in touch soon!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUs;
