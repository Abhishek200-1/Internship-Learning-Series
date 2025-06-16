import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';   

const LoggerComponent = () => {
    const [count, setCount] = useState(0);

    //runs on every render
    useEffect(() => {
      console.log("component rendered and count is updated", count);
    })
    


  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent
