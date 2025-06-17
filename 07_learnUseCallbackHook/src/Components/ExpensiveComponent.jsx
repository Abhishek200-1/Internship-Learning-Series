import React, { useCallback, useState, useRef, useEffect } from 'react'

const ExpensiveComponent = () => {

    const [count, setcount] = useState(0);
    const [text, setText] = useState("");
    const previousCount = useRef(0);

    const expensiveTask = useCallback(() => {
        console.log("Expensive task is running");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result = result + i;
        }
        return result;
    }, [count]);

    useEffect(() => {
      if(previousCount.current) {
        console.log("expensive task is running again");
        if(previousCount.current === expensiveTask())
        {
          console.log("expensive task is not running again");
        }
        else{
            previousCount.current = expensiveTask();
        }
      }
      else
      {
        previousCount.current = expensiveTask();
      }
    },)
    


  return (
    <div>
        <input 
            type="number" 
            placeholder="Type something"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />  
        <p>Count Is : {count}</p>
        <p>Expensive calculation result is : {expensiveTask()}</p>
        <button onClick={() => setcount(count+1)}>Click Me</button>
    </div>
  )
}

export default ExpensiveComponent
