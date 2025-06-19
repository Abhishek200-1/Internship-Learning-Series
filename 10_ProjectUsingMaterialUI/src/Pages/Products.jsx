import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Dialog,DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import ironman from '../assets/ironman.jpg'
import sweets from '../assets/sweets.jpg'

const Products = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',textAlign: 'center', width:'1536px', minHeight:'60vh' }} > 
      <Card sx={{ maxWidth: 345, mt:'90px', mb:'150px'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Vishwakarma Abhishek"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={sweets}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon size='small' color='primary' onClick={() => setOpen(true)} />
          </IconButton>
          <IconButton aria-label="share">
            <DeleteIcon size='small' color='primary' onClick={() => setOpen(true)}/>
          </IconButton>
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
          <Button variant="outlined" color="info" onClick={() => setOpen(false)}>Yes! Sure</Button>
          <Button variant="outlined" color="warning" onClick={() => setOpen(false)}>No! Keep it</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Products
