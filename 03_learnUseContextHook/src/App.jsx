import React, { createContext } from 'react'
import { useState } from 'react'
import ChildA from './Components/ChildA'
import './App.css'

//step 1: Create a Context
// const UserContext = createContext();
const ThemeContext = createContext();
//step 2 : Create a Provider and wrap inside the Provider
//step 3: pass the value to the Provider
//step 4: Consume the context in the child components

const App = () => {
  
  // const [user, setUser] = useState({
  //   name: 'John Doe',
  //   age: 30});

  const [theme, setTheme] = useState('light')

  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='ThemeChanger' style={{backgroundColor: theme === 'light' ? 'beige' : 'black'}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
// export { UserContext } // Export the context to use in child components
export { ThemeContext } // Export the context to use in child components
