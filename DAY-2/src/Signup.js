 import React from "react";
 import './Signup.css';
 function Signup(){
     return(
         <div class="signuppage">
             <br></br>
             <h4>&nbsp;&nbsp;ScheduleMeet.</h4>
             <br></br>
         <div class="container1">
             <form>
                 <br></br>
                 <h1 id="head">&nbsp;&nbsp;Sign up</h1>
                 <br></br>
                 <label type="na">&nbsp;&nbsp;&nbsp;&nbsp;Name:</label>
                 <br></br>
                 <br></br>
                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="na"></input><br></br>
                 <br></br>
                 <br></br>
                 <label for="email">&nbsp;&nbsp;&nbsp;&nbsp;Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                 <br></br>
                 <br></br>
                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="email"></input><br></br>
                 <br></br>
                 <br></br>
                <label for="uname">&nbsp;&nbsp;&nbsp;&nbsp;Username: &nbsp;</label>
                 <br></br>
                 <br></br>
                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="uname"></input><br></br>
                 <br></br>
                 <br></br>
                 <label for="pwd">&nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;</label>
                 <br></br>
                 <br></br>
                 &nbsp;&nbsp;&nbsp;&nbsp;<input type="password" id="pwd"></input><br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <input type="submit" value="SUBMIT" class="but2"></input>
             </form>
         </div>
         </div>
     );
 }
 export default Signup;



