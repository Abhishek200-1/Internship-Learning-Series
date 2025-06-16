import React from 'react'
import { useState, useEffect } from 'react';

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      console.log('count is updated:', count);
    }, [count])
    
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    
    
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment Count</button>
      <h2>seconds : {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
