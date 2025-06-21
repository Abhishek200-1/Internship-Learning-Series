import { Button, CircularProgress, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const DrawerMenu = () => {

    const [open, setOpen] = useState(false);
    const Menu = ["Home", "About", "Hello", "Hey"]

  return (
    <div>
        {/* <Button variant='contained' onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onClick={() => setOpen(false)}>
            <List>
                {Menu.map(Menus => (
                    <ListItemButton>
                        <ListItemText primary={Menus}/>
                    </ListItemButton>
                ) )}
            </List>
        </Drawer> */}
        <CircularProgress variant='indeterminate' color='secondary' value={75}>
            hello
        </CircularProgress>
        
    </div>
  )
}

export default DrawerMenu
