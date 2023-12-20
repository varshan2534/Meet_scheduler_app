import React from 'react';
import './Login.css';
function Login(){
    return(
        <div class="loginpage">
            <br></br>
            <h4>&nbsp;&nbsp;ScheduleMeet.</h4>
            <br></br>
            <br></br>
        <div class="container2">
            <form>
                <br></br>
                <h1 id="head">&nbsp;&nbsp;Log in</h1>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<label for="uname">Username: &nbsp;</label>
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="uname"></input><br></br>
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<label for="pwd">Password:&nbsp;&nbsp;&nbsp;</label>
                <br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<input type="password" id="pwd"></input><br></br>
                <br></br>
                <br></br>
                <br></br>
                <input type="submit" value="SUBMIT" class="but"></input>
            </form>
        </div>
        </div>
    );
}
export default Login;
