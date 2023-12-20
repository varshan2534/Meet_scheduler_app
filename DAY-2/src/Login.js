// import React from 'react';
// import './Login.css';
// function Login(){
//     return(
//         <div class="loginpage">
//             <br></br>
//             <h4>&nbsp;&nbsp;ScheduleMeet.</h4>
//             <br></br>
//             <br></br>
//         <div class="container2">
//             <form>
//                 <br></br>
//                 <h1 id="head">&nbsp;&nbsp;Log in</h1>
//                 <br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;<label for="uname">Username: &nbsp;</label>
//                 <br></br>
//                 <br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="uname"></input><br></br>
//                 <br></br>
//                 <br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;<label for="pwd">Password:&nbsp;&nbsp;&nbsp;</label>
//                 <br></br>
//                 <br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="password" id="pwd"></input><br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <input type="submit" value="SUBMIT" class="but"></input>
//             </form>
//         </div>
//         </div>
//     );
// }
// export default Login;

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
        // alert('Login successful!');
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
      <h4 >&nbsp;&nbsp;ScheduleMeet.</h4>
      <br />
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
