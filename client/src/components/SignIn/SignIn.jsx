import { Link, useNavigate } from "react-router-dom";
import "../SignUp/signUp.scss";
import "./signIn.scss";
import { useState } from "react";


export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorText, setErrorText] = useState('');
    function loginForm(ev) {
        ev.preventDefault();
        if(email.trim() === '') {
            setErrorText('Please add email')
        } else if(password.trim() === '') {
            setErrorText('Please add password')
        } else {
            navigate('/');
        }
    }
    return (
        <>
        <div className="sign-in">
            <h1>Sign In</h1>
            <p className="error-text">{errorText}</p>
            <form onSubmit={loginForm}>
            <label>email</label>
            <input type="text" name="email" placeholder="email" value={email} 
                onChange={ev => {setEmail(ev.target.value)}}/>
            <label>password</label>
            <input type="password" name="password" placeholder="password" value={password}
                onChange={ev => {setPassword(ev.target.value)}}/>
            <button>SIGN IN</button>
            </form>
            <Link to='http://127.0.0.1:5173/signup'>
                Sign Up
            </Link>
        </div>
        </>
    );
}