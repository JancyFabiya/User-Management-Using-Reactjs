import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../../store/Context';
const Header = () => {
  const navigate = useNavigate();
  // const {user} = useContext(AuthContext)
  let user = localStorage.getItem('userInfo')
// console.log(user.name,'aaa')
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">INCUBATION</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"style={{marginLeft:'65%'}}>
        <Nav className="m-auto" >
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          {/* <NavDropdown title={user? (user && user.name) : 'Click Here'} id="basic-nav-dropdown">
          <NavDropdown.Item
          style={{color:'black'}}
          onClick={()=>{
            if(!user){
              navigate('/login')
            }else{
            localStorage.removeItem("userInfo")
            navigate("/");
            }

          }}> {user ? 'Logout' :'Login'}</NavDropdown.Item>   */}
            {/* <NavDropdown.Item
          style={{color:'black'}}
          onClick={()=>{
            // localStorage.removeItem("userInfo")
            navigate("/");

          }}>{user ? `${user.displayName}`:'Login'}</NavDropdown.Item>
          {user && <NavDropdown.Item
          style={{color:'black'}}
        onClick={()=>{
          localStorage.removeItem("userInfo")
          navigate("/");

        }}>Logout</NavDropdown.Item>} */}
         {/* <NavDropdown.Item> <Link to='/login' style={{textDecoration:'none',color:'black'}}>Logout</Link></NavDropdown.Item>   */}
         {/* <NavDropdown.Item> <Link to='/signup'style={{textDecoration:'none',color:'black'}}>Signup</Link></NavDropdown.Item>   */}
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          {/* </NavDropdown> */}
          <Button variant="dark"
             style={{color:'white'}}
             onClick={()=>{
               if(!user){
                 navigate('/login')
               }else{
               localStorage.removeItem("userInfo")
               navigate("/");
               }
   
             }}
             >{user ? 'Logout' : 'Login'}</Button>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Header