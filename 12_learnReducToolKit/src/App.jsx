import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, reset, incrementByAmount} from './Features/Counter/counterSlice'

const App = () => {

  const count = useSelector((state) => state.counter.value)
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count : {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br /><br />
        <button onClick={handleResetClick}>Reset</button>
        <br /><br />
        <input type="number" value={amount} placeholder='enter amount' onChange={(e) => setAmount(e.target.value)} />
        <br /><br />
        <button onClick={handleAmountClick}>Increment by amount</button>
    </div>
  )
}

export default App
