import React from 'react'
import './App.css'
import { useState, useEffect, useRef } from 'react';

const App = () => {

  const [timer, setTimer] = useState(0);
  let timerRef = useRef(null);


  function handleStartTimer(){
    timerRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    },1000)
  }

  function handleStopTimer() { 
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function handleResetTimer() {
    handleStopTimer();
    setTimer(0);
  }


  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let buttonRef = useRef(null);

  // function handleIncrement() {
  //   setCount(count + 1 );
  //   val.current = val.current + 1; 
  //   console.log(`val ki valur change kr di gyi: ${val.current}`);
  // }

  // function handleColorChange() {
  //   buttonRef.current.style.backgroundColor = "red";
  // }

  // //it runs on every render
  // useEffect(() => {
  //   console.log(`mai firse re-render ho gya hun: ${count}`);
  // })
  

  return (
    <>
      <div>
        <h4>useRef Hook</h4>
        <p>useRef is used to access DOM elements directly and to persist values across renders without causing re-renders.</p>
        <p>It can be used to store mutable values that do not trigger a re-render when changed.</p>
        <p>Example: A button that increments a count and changes its color using useRef.</p>
      </div>
      <div>
        <h1>StopWatch</h1>
        <p>Timer value : {timer}</p>
        <button onClick={handleStartTimer}>Start</button>
        <br /><br />
        <button onClick={handleStopTimer}>Stop</button>
        <br /><br />
        <button onClick={handleResetTimer}>Reset</button>
      </div>
    </>
    // <div>
    //     <button ref={buttonRef} onClick={handleIncrement}>Increment</button>
    //     <br />
    //     <br />
    //     <button onClick={handleColorChange}>Chnage color of first button</button>
    //     <div>
    //       Count is: {count}
    //     </div>
    // </div>
  )
}

export default App
