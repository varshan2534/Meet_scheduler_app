import React from "react";
import './Login.css';
import Calendar from "./Calendar";
import { useState } from "react";


function Login() {
    const [loggedIn, setLoggedIn] = useState(false);   
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username && password) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const foundUser = storedUsers.find(user => user.username === username && user.password === password);
      if (foundUser) {
        setLoggedIn(true);
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Please enter both username and password');
    }
  };
  if(loggedIn) {
    return <Calendar />;
  }

  return (
    <div className="loginpage">
      <br />
      <br />
      <br></br>
      <div className="container2">
        <form onSubmit={handleLogin}>
          <br />
          <h1 id="head">&nbsp;&nbsp;Log in</h1>
          <br />
          <label htmlFor="username" className="labels">&nbsp;&nbsp;&nbsp;&nbsp;Username: &nbsp;</label>
          <br />
          <br></br>
          <input type="text" id="username" name="username" class="inputtext" />
          <br />
          <br />
          <label htmlFor="password" className="labels">&nbsp;&nbsp;&nbsp;&nbsp;Password: &nbsp;</label>
          <br />
          <br></br>
          <input type="password" id="password" name="password" class="inputtext" />
          <br />
          <br />
          <br></br>
          <br></br>
         <input type="submit" value="LOGIN" className="but" />
        </form>
      </div>
    </div>
  );
}

export default Login;
