import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Products from './Pages/Products';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => createTheme({ palette: { mode: darkMode ? 'dark' : 'light',},}),[darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box sx={{minHight:'100vh', display:'flex', flexDirection:'column'}}>
          <Router>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Box component='main' sx={{flexGrow:1}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </Box>
            <Footer/>
          </Router>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
