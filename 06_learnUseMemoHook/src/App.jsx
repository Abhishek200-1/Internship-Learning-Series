import React from 'react'
import { useState, useMemo } from 'react'
import './App.css'

// useMemo is a hook that allows you to memoize expensive calculations
// so that they are only recalculated when their dependencies change.
// This can help improve performance in your React applications,
// especially when dealing with expensive computations or large datasets.
// It is similar to useCallback, but useMemo returns a value instead of a function.
// Example: Memoizing an expensive calculation
// useMemo(() => expensiveCalculation(input), [input])
// Example: Memoizing a value
// const memoizedValue = useMemo(() => computeExpensiveValue(input), [input])
// Example: Memoizing a component
// const MemoizedComponent = useMemo(() => <Component />, [input])
// Example: Memoizing a function
// const memoizedFunction = useMemo(() => () => computeExpensiveValue(input), [input])
// Example: Memoizing an object
// const memoizedObject = useMemo(() => ({ key: value }), [value])
// Example: Memoizing an array
// const memoizedArray = useMemo(() => [value1, value2], [value1, value2])

const App = () => {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  function expansiveTask(num) {
    console.log('Expensive task running...')
    for (let i = 0; i < 1000000000; i++) {}
    return num*2
  }

  let doubleValue =  useMemo(() => expansiveTask(input), [input])


 
  return (
    <div>
      <p>Count is : {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <div>
        <input 
          type="number" 
          placeholder='enter name' 
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <p>Double value is : {doubleValue}</p> 
      </div>
    </div>
  )
}

export default App
