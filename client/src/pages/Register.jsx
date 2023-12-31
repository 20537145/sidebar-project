import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/userSlice';

function Register() {
  const [name,setName]=useState('')
  const [email,setEmeil]=useState('')
  const [password,setPassword]=useState('')
  const dispatch = useDispatch()
  const registerHandler = (e)=> {
    e.preventDefault()
    const newUser = {name,email, password}
    dispatch(registerUser(newUser))}
  return (
    <Form className='rg-container'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmeil(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <button onClick={registerHandler}> Register
</button>
    </Form>
  );
}

export default Register;