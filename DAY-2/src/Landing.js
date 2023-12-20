import React from "react";
import './landing.css';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <div className="landingpage">
      <br></br>
    <div>
      <h4>&nbsp;&nbsp;ScheduleMeet.</h4>
      <br></br>
      <div className="container">
        <br></br>
        <h1>Hello, welcome to Schedulemeet!</h1>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/Login">
          <button type="button" className="but3">LOGIN</button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/Signup">
          <button type="button" className="but3">SIGNUP</button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <Link to="/Calendar">
          <button type="button" className="but3">Calendar</button>
        </Link> */}
      </div>
    </div>
    </div>
  );
}

export default Landing;
