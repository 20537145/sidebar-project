import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userSlice';
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch = useDispatch()
  const loginHandler = (e)=>{
    e.preventDefault()
    const usr = {email,password}
    dispatch(loginUser(usr))
  }
  return (
    <div className='lg-container'>
    <Form >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      </Form.Group>
    <button onClick={loginHandler}> Login
</button>
    </Form>
        
    </div>
    
  );
}

export default Login