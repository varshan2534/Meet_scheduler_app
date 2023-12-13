import React from "react";
import './Signup.css';
function Signup(){
    return(
        <div>
            <h4>&nbsp;ScheduleMeet.</h4>
            <br></br>
            <br></br>
        <div class="container">
            <form>
                <br></br>
                <h1 id="head">&nbsp;&nbsp;Sign up</h1>
                <br></br>
                <label type="na">Name:&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input type="text" id="na"></input><br></br>
                <br></br>
                <br></br>
                <label for="email">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="email"></input><br></br>
                <br></br>
                <br></br>
                <label for="uname">Username: &nbsp;</label>
                <input type="text" id="uname"></input><br></br>
                <br></br>
                <br></br>
                <label for="pwd">Password:&nbsp;</label>
                <input type="text" id="pwd"></input><br></br>
                <br></br>
                <br></br>
                <br></br>
                <input type="submit" value="SUBMIT" class="but"></input>
            </form>
        </div>
        </div>
    );
}
export default Signup;