import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userName = useSelector(state=>state.auth.user)
  return (
    <div className='profile-container'>
      <h3>
        Welcome, <span style={{color:"rebeccapurple"}}>{userName?.name}</span>!
      </h3>
    </div>
  )
}

export default Profile