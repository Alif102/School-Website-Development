import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
  return (
    <div>
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
    <Navbar.Collapse id="basic-navbar-nav">
     <nav className="navbar" onClick={e => e.stopPropagation()}>
       <div className="nav-container">
         <NavLink exact to="/" className="nav-logo">
           School Website Development
           <i className="fa fa-code"></i>
         </NavLink>
         
         
         <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li className="nav-item">
             <NavLink
               exact
               to="/"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Home
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/about"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               About
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/features"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Features
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/appnavbar"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               App
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/contact"
               activeClassName="active"
               className="nav-links"
              onClick={click ? handleClick : null}
             >
               Contact Us
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/Service"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Service
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/log-in"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               LogIn
             </NavLink>
           </li>
         </ul>
         
         <div className="nav-icon" onClick={handleClick}>
           <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
         </div>
       </div>
     </nav>
     </Navbar.Collapse>
   </ div>
  )
}

export default NavBar