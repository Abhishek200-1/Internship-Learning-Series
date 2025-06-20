import React, { useState } from 'react'
import { Box, Button, Link, Modal, Typography } from '@mui/material'

const Models = () => {

    const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position={'absolute'} top='50%' left='50%'>
          <Typography>This is modal</Typography>
          <Button variant="contained" color="default" onClick={() => setOpen(false)}>
            Click Me
          </Button>
        </Box>
      </Modal>
      <Link variant='h5' color='secondary' href='www.google.com' underline='always'>Nav Link</Link>
    </div>
  )
}

export default Models
