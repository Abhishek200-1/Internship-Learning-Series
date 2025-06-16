import React from 'react'
import './usercard.css'; 

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p>{props.name}</p>
        <p>hllo ji kaise hai aap sab badhiya</p>
        <p>meeting time 8 to 6</p>
    </div>
  )
}

export default UserCard
