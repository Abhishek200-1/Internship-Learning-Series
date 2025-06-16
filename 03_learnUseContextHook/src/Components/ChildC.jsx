import React, { useContext } from 'react'
// import { useContext } from 'react'
// import { UserContext } from '../App' // Import the context
import { ThemeContext } from '../App' // Import the context
// import { ThemeContext } from '../App' // Import the context

const ChildC = () => {
    // const user = useContext(UserContext); // Consume the context
    const {theme, setTheme} = useContext(ThemeContext); // Consume the context


    function handleClick() {
        if (theme === 'light') 
            setTheme('dark');
        else         
            setTheme('light');
    }
    
  return (
    <div>
        <button onClick={handleClick}>Click To Change Theme</button>
        {/* {user.name} */}
    </div>
  )
}

export default ChildC
