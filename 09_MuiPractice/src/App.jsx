import React from 'react'
import {Typography, Button, TextField, AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import Form from './Components/Form'
import { useState } from 'react'
import Cards from './Components/Cards'
import Models from './Components/Models'

const App = () => {

  const [value, setValue] = useState(0);

  return (
    <div>
      {/* typography is used to style text */}
      {/* <Typography variant="h2" component={"h2"} sx={{color:"red"}}>Material UI Tutorials</Typography> */}
      {/* Button is used to create a button */}
      {/* <Button variant="contained" color="primary" sx={{marginLeft:"10px"}}>Click Me</Button>   */}
      {/* <Button variant="contained" color="success" sx={{marginLeft:"10px"}}>Click Me</Button>
      <Button variant="contained" color="error" sx={{marginLeft:"10px"}}>Click Me</Button>
      <Button variant="contained" color="info" sx={{marginLeft:"10px"}}>Click Me</Button>
      <Button variant="contained" color="warning" sx={{marginLeft:"10px"}}>Click Me</Button>
      <Button variant="contained" color="inherit" sx={{marginLeft:"10px"}} onClick={() => alert("You clicked me")}>Click Me For Active</Button> */}
      {/* <br /><br />
      <TextField
        variant="outlined"
        type='text'
        label="Enter Your Name"
        color='secondary'
        sx={{width:"300px", marginLeft:"10px"}}
      />
      <TextField
        variant="standard"
        type='text'
        label="Enter Your Name"
        color='secondary'
        sx={{width:"300px", marginLeft:"10px"}}
      />
      <TextField
        variant="filled"
        type='text'
        label="Enter Your Name"
        color='secondary'
        sx={{width:"300px", marginLeft:"10px"}}
      />
      <br /><br />
      <div>
        <Form/>
      </div>
      <br /> */}
      <div>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" color="initial" sx={{margin:'10px'}}>Logo</Typography>
            {/* <Button variant="contained" color="info" sx={{marginLeft:'auto'}}>Login</Button> */}
            <Tabs sx={{margin:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)}>
              <Tab label="Home"/>
              <Tab label="Menu"/>
              <Tab label="About"/>
            </Tabs>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:100}}>
          <Cards/>
        </div>
        <div>
          <Models/>
        </div>
      </div>
    </div>
  )
}

export default App
