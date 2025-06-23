import React, { useState } from 'react';
import {Container,Typography,Button,Box,TextField,Snackbar,Alert,Divider,Stack,IconButton,} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactUs = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [inputs, setInputs] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Message:"",
    });

    const handleChange = (e) => {
        setInputs(prevState => ({...prevState,[e.target.name]: [e.target.value],}));
    };

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
    };

  return (
    <Container id="contact-us" maxWidth="xl" sx={{ py: 6, px: { xs: 4, sm: 8, md: 16 } }}>
        <Box sx={{display: 'flex',flexDirection: { xs: 'column', md: 'row' },gap: 6,alignItems: 'flex-start',justifyContent: 'center',}}>
            <Box sx={{ flex: 1, pr: { md: 4 } }}>
                <Typography variant="h4" gutterBottom>
                    Get In Touch
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum reiciendis doloribus cupiditate voluptatum deleniti rem?
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <LocationOnIcon color="success" />
                    <Typography>1256 vesu, surat, India</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <PhoneIcon color="success" />
                    <Typography>+91 9876543210</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                    <EmailIcon color="success" />
                    <Typography>support@nomnomgo.com</Typography>
                </Stack>

                <Divider sx={{ mb: 2 }} />

                <Stack direction="row" spacing={2}>
                    <IconButton color="primary">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color="secondary">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#1DA1F2' }}>
                        <TwitterIcon />
                    </IconButton>
                </Stack>
            </Box>

            <Box component="form" onSubmit={handleSubmit} sx={{flex: 1,display: 'flex',flexDirection: 'column',gap: 2,border: '2px solid #ccc',p: 3,borderRadius: 2,}}>
                <Typography variant="h5" gutterBottom>
                    Send a message
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField name='FirstName' variant="outlined" type='text' label="Enter Your First Name" size='small' value={inputs.FirstName} onChange={handleChange} required  fullWidth/>

                    <TextField name='LastName' variant="outlined" type='text' label="Enter Your Last Name" size='small' value={inputs.LastName} onChange={handleChange} required  fullWidth/>
                </Box>

                <TextField name='Email' variant="outlined" type='email' label="Enter Your Email" size='small' value={inputs.Email} onChange={handleChange} required  fullWidth/>

                <TextField name='Message' type='text' variant="outlined" label="Enter Your Message..." multiline rows={4} fullWidth size='small' value={inputs.Message} onChange={handleChange} required/>

                <Button type="submit" variant="contained" color="success">Send Message!</Button>
            </Box>
        </Box>
    </Container>
  )
}

export default ContactUs
