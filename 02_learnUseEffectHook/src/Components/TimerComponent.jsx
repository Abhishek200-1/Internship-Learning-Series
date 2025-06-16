import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("setInterval is executing");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => { 
            console.log("Time to stop the timer"); 
            clearInterval(timer);
        };
    }, []);
    

  return (
    <div>
        <h1>Seconds : {seconds}</h1>
    </div>
  )
}

export default TimerComponent
