import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../../store/Context';
const AdminHeader = () => {
  const navigate = useNavigate();
  // const {user} = useContext(AuthContext)
  let admin = localStorage.getItem('admin')
// console.log(user.name,'aaa')
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">INCUBATION</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"style={{marginLeft:'65%'}}>
        <Nav className="m-auto" >
       
          <Button variant="dark"
             style={{color:'white'}}
             onClick={()=>{
                localStorage.removeItem("admin")

                 navigate('/adminlogin')
             
   
             }}
             >Logout</Button>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default AdminHeader