import { useState, useContext, useEffect } from "react";
import "./layout.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import  logo  from '../../images/logorabbit.png';
import { UserContext } from "../Context/UserContext";


export default function Layout() {
    const [userState, setUserState] = useState(false);
    const {user, setUser} = useContext(UserContext);
    // useEffect(() => {
    //     fetch('http://localhost:5000/userProfile', {
    //         "method": "GET",
    //     }).then(resp => resp.json()).then(info => {
    //         setUser(info);
    //     })
    // }, []);
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
                    <p>ruben@gmail.com</p>
                </div>
                <div className="log-out">
                <span className="material-symbols-outlined logout-symbol">logout</span>
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