import React from 'react';
import './Login.css';
function Login(){
    return(
        <div>
            <h4>&nbsp;ScheduleMeet.</h4>
            <br></br>
            <br></br>
        <div class="container">
            <form>
                <br></br>
                <h1 id="head">&nbsp;&nbsp;Log in</h1>
                <br></br>
                <label for="uname">Username: &nbsp;</label>
                <input type="text" id="uname"></input><br></br>
                <br></br>
                <br></br>
                <label for="pwd">Password:&nbsp;&nbsp;&nbsp;</label>
                <input type="password" id="pwd"></input><br></br>
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