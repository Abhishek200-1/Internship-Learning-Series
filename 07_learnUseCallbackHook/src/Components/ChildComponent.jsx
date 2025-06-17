import React from 'react'

const ChildComponent = React.memo(
  (props) => {

  console.log("child component rendered again")

  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  )
}
);

export default ChildComponent
// React.memo is a higher order component that memoizes the component
//react.memo -> wrap -> component -> component re-render tabhi hoga jab props change hoga
// agar props same hai to component re-render nahi hoga

//if u r sending a function then usememo will not work
// useCallback is used to memoize the function    