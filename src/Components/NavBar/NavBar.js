import React from 'react';
import { Container, Nav, NavDropdown,Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >PANDACARE_HOSPITAL</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <NavLink className='navDesign' activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
   to="/Home">Home</NavLink>

<NavLink className='navDesign' 
      activeStyle={{
        fontWeight: "bold",
        color: "white"
      }}
      to="/Services">Services</NavLink>
      <NavLink className='navDesign' 
      activeStyle={{
        fontWeight: "bold",
        color: "white"
      }}
      to="/Doctors">Doctors-List</NavLink>

<NavLink className='navDesign' 
      activeStyle={{
        fontWeight: "bold",
        color: "white"
      }}
      to="/AgentCenter">Our branches
      </NavLink>

      <NavLink className='navDesign' 
      activeStyle={{
        fontWeight: "bold",
        color: "white"
      }}
      to="/About">About</NavLink>
    
      <NavLink className='navDesign' 
      activeStyle={{
        fontWeight: "bold",
        color: "white"
      }}
      to="/login">Login
      </NavLink>
      <NavLink className='navDesign' 
      activeStyle={{
        fontWeight: "bold",
        color: "white"
      }}
      to="/Signup">SignUp
      </NavLink>

    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavBar;