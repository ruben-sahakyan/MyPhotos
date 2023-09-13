import { useState } from "react";
import "./layout.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import  logo  from '../../images/logo.png';


export default function Layout() {
    const [userState, setUserState] = useState(false);
    return (
        <>
        <header>
            <Link className="header-home-href" to='/'>
                <img className="logo" src={logo} alt="Rabbit"/>
            </Link>
            {userState ? 
            <>
            <div className="user-profile-section">
                <div className="user-profile">
                    <p>Ruben123</p>
                </div>
                <div className="log-out">
                <span class="material-symbols-outlined logout-symbol">logout</span>
                </div>
            </div>
            </>: 
            <>
            <ul className="header-nav">
                <Link to='/signin' id="sign-in">
                    <li>SignIn</li>
                </Link>
                <Link to='/signup'>
                    <li id="sign-up">SignUp</li>
                </Link>
            </ul>
            </>}

        </header>
        < Outlet />
        </>
    );
}