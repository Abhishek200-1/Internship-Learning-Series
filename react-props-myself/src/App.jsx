import React from 'react'
import Card from './Components/Card.jsx'
import Count from './Components/Count.jsx'
import { useState } from 'react'
import UserCard from './Components/UserCard.jsx'

const App = () => {

  const [count, setCount] = useState(0);

  function handleclick(){
    setCount(count + 1);
  }

  return (
    <div>
      <Count>
        <h1>{count}</h1>
        <button onClick={handleclick}>Click Me</button>
      </Count>

      <Card name="John Doe" age={30} >

      </Card>
      <UserCard name="Vishwakarma Abhishek"/>
      <UserCard name="Hulk"/>
      <UserCard name="Captain America"/>
    </div>
  )
}

export default App
