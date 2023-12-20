import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav className='navcontainer'>
      <ul className='navbar-list'>
        <li>
          <Link to="/" style={{color:"aliceblue"}}>Home</Link> 
        </li>
        <li>
          <Link to="/AboutPage" style={{color:"aliceblue"}}>About</Link>
        </li>
        <li>
            <Link to="/ContactUsPage" style={{color:"aliceblue"}}>Contact</Link>
        </li>
        <li>
            <Link to="/Login" style={{color:"aliceblue"}}>Login</Link>
        </li>
        <li>
            <Link to="/Signup" style={{color:"aliceblue"}}>Signup</Link>
        </li>
      </ul>
      </nav>
  );
};

export default Navbar;
