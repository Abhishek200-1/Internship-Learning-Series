import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, } from '@mui/material'
import { useState } from 'react'

const Cards = () => {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Card sx={{maxWidth:300, margin:'20px'}}>
        <CardMedia component={'img'} height='140px' image='https://unsplash.com/photos/woman-examines-a-small-item-near-an-open-window-9Ijxj6DD_a0' alt='test image'/>
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>Web Design</Typography>
            <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias.</Typography>
        </CardContent>
        <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary' onClick={() => setOpen(true)}>Delete</Button>
        </CardActions>
      </Card>
      {/*Popup k liye use kiya jata hai */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are You Sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            are you sure you want to delete the product
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="info">Yes! Sure</Button>
          <Button variant="outlined" color="warning" onClick={() => setOpen(false)}>No! Keep it</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Cards
