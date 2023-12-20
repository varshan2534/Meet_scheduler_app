import React from "react";
import './Signup.css';
import { useState } from "react";
import Login from "./Login";
function Signup() {
    const [signIn, setSignIn] = useState(false); 
  const handleSignup = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username && password) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = { username, password };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      e.target.reset();
    setSignIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };
  if(signIn){
    return <Login />
  }

  return (
    <div className="signuppage">
      <br />
      <br />
      <br></br>
      <div className="container2">
        <form onSubmit={handleSignup}>
          <br />
          <h1 id="head">&nbsp;&nbsp;Sign up</h1>
          <br />
          <label htmlFor="username" className="labels">&nbsp;&nbsp;&nbsp;&nbsp;Username: &nbsp;</label>
          <br />
          <br></br>
          <input type="text" id="username" name="username" className="inputtext" />
          <br />
          <br />
          {/* <br></br> */}
          <label htmlFor="password" className="labels">&nbsp;&nbsp;&nbsp;&nbsp;Password: &nbsp;</label>
          <br />
          <br></br>
          <input type="password" id="password" name="password" className="inputtext"/>
          <br />
          <br />
          <br></br>
          <br></br>
          <input type="submit" value="SIGN UP" className="but2"/>
        </form>
      </div>
    </div>
  );
}

export default Signup;
