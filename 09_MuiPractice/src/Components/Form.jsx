import React from 'react'
import { Typography, Button, TextField, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

const Form = () => {

    //form state handle 
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        terms:true,
        courses
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
        console.log(inputs);
        setInputs({
            name:"",
            email:"",
            password:""
        })
    };

  return (
    <>
        <Typography variant="h3" color="initial">MUI Form with React</Typography>
        <form onSubmit={handleSubmit}>
            <TextField
                name='name'
                variant="outlined"
                type='text'
                label="Enter Your Name"
                value={inputs.name}
                onChange={handleChange}
                sx={{width:"300px", marginLeft:"10px"}}
                size='small'
            />
            <br /><br />
            <TextField
                name='email'
                variant="outlined"
                type='email'
                label="Enter Your Email"
                value={inputs.email}
                onChange={handleChange}
                sx={{width:"300px", marginLeft:"10px"}}
                size='small'
            />
            <br /><br />
            <TextField
                name='password'
                variant="outlined"
                type='password'     
                label="Enter Your Password"
                value={inputs.password}
                onChange={handleChange}
                sx={{width:"300px", marginLeft:"10px"}}
                size='small'
            />
            <br /><br />
            <FormGroup>
                <FormControlLabel 
                    label="I agree to turms & Conditions" 
                    sx={{margin:"2px"}}
                    control={
                        <Checkbox 
                        defaultChecked 
                        onChange={() => 
                            setInputs(prevState => ({
                                ...prevState, 
                                terms: !inputs.terms,
                            }))
                        }
                    />} 
                />
            </FormGroup>
            <br /><br />
            <FormControl sx={{ width: '310px' }} size='small'>
                <InputLabel id="menu">Courses</InputLabel>
                <Select labelId='menu' id='menu-list' label="courses" value={inputs.courses} onChange={() => (setInputs)}>
                    <MenuItem value={'MongoDB'}>MongoDB</MenuItem>
                    <MenuItem value={'JavaScript'}>JavaScript</MenuItem>
                    <MenuItem value={'CSS'}>CSS</MenuItem>
                    <MenuItem value={'C++'}>C++</MenuItem>
                </Select>
            </FormControl>
            <br /><br />
            <Button type='submit' variant="contained" color="success" sx={{margin:"10px"}}>Submit</Button>
        </form>
    </>
  )
}

export default Form
