// import React from "react";
// import './Signup.css';
// function Signup(){
//     return(
//         <div class="signuppage">
//             <br></br>
//             <h4>&nbsp;&nbsp;ScheduleMeet.</h4>
//             <br></br>
//         <div class="container1">
//             <form>
//                 <br></br>
//                 <h1 id="head">&nbsp;&nbsp;Sign up</h1>
//                 <br></br>
//                 <label type="na">&nbsp;&nbsp;&nbsp;&nbsp;Name:</label>
//                 <br></br>
//                 <br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="na"></input><br></br>
//                 <br></br>
//                 <br></br>
//                 <label for="email">&nbsp;&nbsp;&nbsp;&nbsp;Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
//                 <br></br>
//                 <br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="email"></input><br></br>
//                 <br></br>
//                 <br></br>
//                 <label for="uname">&nbsp;&nbsp;&nbsp;&nbsp;Username: &nbsp;</label>
//                 <br></br>
//                 <br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="uname"></input><br></br>
//                 <br></br>
//                 <br></br>
//                 <label for="pwd">&nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;</label>
//                 <br></br>
//                 <br></br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="password" id="pwd"></input><br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <input type="submit" value="SUBMIT" class="but2"></input>
//             </form>
//         </div>
//         </div>
//     );
// }
// export default Signup;





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
    //   alert('User created successfully!');
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
      <h4>&nbsp;&nbsp;ScheduleMeet.</h4>
      <br />
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
