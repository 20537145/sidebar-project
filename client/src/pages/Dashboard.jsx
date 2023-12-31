import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const userName = useSelector(state=>state.auth.user)
  return (
    <div style={{margin:"auto"}}>
      <h3>Welcome <span style={{color:"rebeccapurple"}}>{userName?.name}</span>  to this humble website</h3>
      <p>
        This is a simple dashboard where you can see some information about the app and perform actions on it.
      </p>
    </div>
  )
}

export default Dashboard