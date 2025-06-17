import React from 'react'
import './App.css'
import { useCallback, useState } from 'react'
import ChildComponent from './Components/ChildComponent'
import ExpensiveComponent from './Components/ExpensiveComponent'

const App = () => {

  // const [count, setCount] = useState(0)

  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, []);

  return (

    <div>
      <ExpensiveComponent/>
    </div>
    // <div>
    //   <div>Count is : {count}</div>
    //   <br />
    //   <button onClick={handleClick}>Increment</button>
    //   <br /><br />
    //   <div>
    //     <ChildComponent buttonName="click me" handleClick={handleClick}/>
    //   </div>
    // </div>
  )
}

export default App
