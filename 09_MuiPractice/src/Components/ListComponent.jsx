import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material'
import React from 'react'

const ListComponent = () => {

    const courses = ["Card", "Bike", "Car", "Mern", "Next.js"]

  return (
    <div>
        <>
      <List sx={{width:'250px', background:'gray'}}>
        {courses.map(course => (
            <ListItem>
            <ListItemButton>{'>'}</ListItemButton>
            <ListItemText primary={course}/>
        </ListItem>
        ))}
      </List>

        <Accordion>
            <AccordionSummary expandIcon=">">
                <Typography variant="h6" color="initial">
                    What is Mern Stack
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                    <Typography variant="h6" color="initial">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea doloremque illo est incidunt a, quaerat atque modi assumenda asperiores tempora!
                    </Typography>
                </AccordionDetails>
        </Accordion>
        <br />
        {/* Auto Complete */}
        <Autocomplete sx={{width:"200px"}} options={courses} renderInput={(params) => <TextField {...params} label="select a courses"/>}/>
        <br /><br />
      </>
    </div>
  )
}

export default ListComponent
