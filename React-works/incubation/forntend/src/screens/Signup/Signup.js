import {useState} from 'react';
import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import ErrorMessage from '../../components/ErrorMessage';
import axios from 'axios';
import Loading from '../../components/Loading';
import { Link, useNavigate } from "react-router-dom";
import MainScreen from '../../components/MainScreen';
import { GoogleLogin } from 'react-google-login'


const Signup = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
const [password, setPassword] = useState("");
const [conformpassword, setConformPassword] = useState("");
const [message, setMessage] = useState(null);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();


const submitHandler = async (e) =>{
  e.preventDefault()
if(password !==conformpassword){
setMessage('Passwords Do not Match');
}else{
  setMessage(null)
  try{
    const config = {
      headers: {
        'Content-type':'application/json',
      },
    }
    setLoading(true)

    const {data} = await axios.post(
      "/api/users",
      {name,phonenumber,email,password},
      config
    );
    setLoading(false);
    localStorage.setItem("userInfo",JSON.stringify(data));
    if(data){
      navigate("/login")
    }
  }catch(error){
setError(error.response.data.message)
setLoading(false);

  }

}
}
  return (
    <MainScreen title=' CREATE YOUR ACCOUNT'>

    <div className='signupPage'>
    <Container>
      {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
    {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
      {loading && <Loading />}
      <Row>
      <Card>
    <Card.Body>
  <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text"
      value={name}
       placeholder="Name" 
       onChange={(e)=>setName(e.target.value)}
       />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control type="text"
      value={phonenumber}
      placeholder="Mobile Number"
      onChange={(e)=>setPhonenumber(e.target.value)}
       />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"
      value={email}
      placeholder="Enter email"
      onChange={(e)=>setEmail(e.target.value)}
       />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" 
      value={password}
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
       />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Conform Password</Form.Label>
      <Form.Control type="password" 
      value={conformpassword}
      placeholder="Conform Password"
      onChange={(e)=>setConformPassword(e.target.value)}
       />
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  <div className='mt-3' >
  Already have an account ? <Link to="/login" className='decor' >Login Here</Link>
  </div>
  </Card.Body>
  </Card>

      </Row>
    </Container>
  </div>
  <GoogleLogin
    clientId="942641737589-8p9d1771hcq0g4e2ukmej1kp5o9r2hoe.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </MainScreen>
 

  );
}

export default Signup;
