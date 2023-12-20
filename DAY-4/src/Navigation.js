import React from "react";
import { Link } from "react-router-dom";
function Navigation(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Landing</Link>
                </li>
                <li>
                    <Link to='./components/Login'>Login</Link>
                </li>
                <li>
                    <Link to='./components/Signup'>Signup</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation;