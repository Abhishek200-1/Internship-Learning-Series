import React from 'react'
import { useEffect, useState } from 'react'
import LoggerComponent from './Components/LoggerComponent'
import MultiEffectComponent from './Components/MultiEffectComponent'
import DataFetcher from './Components/DataFetcher'
import TimerComponent from './Components/TimerComponent'
import ResizeComponent from './Components/ResizeComponent'

const App = () => {
  //__________________________________________________________xxxxxxxxxxx_________________________________________________________________________________
  //first -> side effect function
  //second -> cleanup function
  //third -> comma separated list of dependencies
  
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

  function hancleClick() {
    setCount(count + 1)
  }

  function hanclickTotal() {
    setTotal(total + 1)
  }

  //variation 1: runs on every render
  // useEffect(() => {
  //   alert("i will run on every render")
  // })
  
  //variation 2: runs only on first render
  // useEffect(() => {
  //   alert("i will run only on first render")  
  // }, [])

  //variation 3: runs on every render except the first
  // useEffect(() => {
  //   alert("i will run on every render when count is updated")
  // }, [count])

  //variation 4: multiple dependencies
  // useEffect(() => {
  //   alert(`Count is ${count} and Total is ${total}`)
  // }, [count, total])

  //variation 5: cleanup function
  // useEffect(() => {
  //   alert("count is updated")
  
  //   return () => {
  //     alert("count is unmounted from UI")
  //   }
  // }, [count])
  //__________________________________________________________xxxxxxxxxxx_________________________________________________________________________________

  return (
    <div>
        <p>Count is : {count}</p>
        <button onClick={hancleClick}>Click Me To Update Count</button>
        <br />
        {/* <p>Total is : {total}</p>
        <button onClick={hanclickTotal}>Click Me To Update Total</button> */}


        {/* <LoggerComponent/>
      <MultiEffectComponent/>
      <DataFetcher/>
      <ResizeComponent/>
      <TimerComponent/>  */}
    </div>
  )
}

export default App
