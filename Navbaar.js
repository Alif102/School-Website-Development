import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
  return (
    <div>
        <Navbar expand="lg"className='nav-body'>
          <Container>
            <Navbar.Brand to="/">School Website Development</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navv-li">
              
                <NavLink exact
               to="/" className="nav-links" >Home</NavLink>
                <NavLink exact path
               to="/about" className="nav-links" 
               >About</NavLink>
                <NavLink exact path
               to="/features" className="nav-links"
               >Features</NavLink>
                <NavLink exact path
               to="/appnavbar" className="nav-links"
               >App</NavLink>
               
               
                <NavLink exact path
               to="/service" className="nav-links"
               >Service</NavLink>
                <NavLink exact path
               to="/contact" className="nav-links">Contact</NavLink>
                <NavLink exact path
               to="/log-in" className="nav-links">LogIn</NavLink>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Navbaar

