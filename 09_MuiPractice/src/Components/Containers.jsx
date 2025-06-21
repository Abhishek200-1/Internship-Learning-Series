import { Container, Typography } from '@mui/material'
import React from 'react'

const Containers = () => {
  return (
    <>
      <Container sx={{background:'blue'}} maxWidth='xs'>
        <Typography variant="body2">
            This is Xs
        </Typography>
      </Container>
      <br /><br />
      <Container sx={{background:'blue'}} maxWidth='sm'>
        <Typography variant="body2">
            This is Xs
        </Typography>
      </Container>
      <br /><br />
      <Container sx={{background:'blue'}} maxWidth='md'>
        <Typography variant="body2">
            This is Xs
        </Typography>
      </Container>
      <br /><br />
      <Container sx={{background:'blue'}} maxWidth='lg'>
        <Typography variant="body2">
            This is Xs
        </Typography>
      </Container>
    </>
  )
}

export default Containers
