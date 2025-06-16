import React from 'react'
import './App.css'
import { useCallback, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1)
  } 

  return (
    <div>
      <div>Count is : {count}</div>
      <br />
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App
