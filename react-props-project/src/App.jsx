import React, { useState } from 'react'
import Card from './Components/card.jsx'
import Button from './Components/Button.jsx'

const App = () => {

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="Click Me">    
        <h1>{count}</h1>
      </Button>
      {/* <Card name="John Doe" age={30} location="New York" >
        <h1>best web dev Vishal</h1>
        <p>trying to be consistance in this</p>
        <p>will complete the internship soon</p>
      </Card> */}
    </div>
  )
}

export default App
