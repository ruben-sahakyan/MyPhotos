import { Link, useNavigate } from "react-router-dom";
import "../SignUp/signUp.scss";
import "./signIn.scss";
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorText, setErrorText] = useState('');

    const [showPassowrd, setShowPassord] = useState(false);

    const { setUser } = useContext(UserContext);
    async function loginForm(ev) {
        ev.preventDefault();
        if(email.trim() === '') {
            setErrorText('Please add email')
        } else if(password.trim() === '') {
            setErrorText('Please add password')
        } else {
            fetch('http://localhost:5000/signin', {
                "method": "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    'content-type': "application/json",
                },
                credentials: "include",
            }).then(resp => resp.json()).then(info => {
                if(info) {
                    setUser(info);
                    console.log(`info ======= ${info}`);
                    return navigate('/');
                } else {
                    setErrorText('incorrect email or password');
                    setPassword('');
                }
            })
        }
    }
    return (
        <>
        <div className="sign-in">
            <h1>Sign In</h1>
            {errorText ? <p className="error-text">{errorText}</p>: <></>}
            <form onSubmit={loginForm}>

            <label>email</label>
            <input type="text" name="email" placeholder="email" value={email} 
                onChange={ev => {setEmail(ev.target.value)}}/>

            <label>password</label>
            <div className="password-section">
                <input className="password-input" type={showPassowrd ? 'text' : 'password'}
                value={password} onChange={ev => {setPassword(ev.target.value)}}
                 placeholder="add password"/>
                <p onClick={() => {setShowPassord(!showPassowrd)}}>{showPassowrd ? 
                <span className="material-symbols-outlined">visibility</span> : 
                <span className="material-symbols-outlined">visibility_off</span>}</p>
            </div>

            <button>SIGN IN</button>
            </form>
            <section>
                <Link to="/signup">
                    <p className="sign-in-btn">Sign Up</p>
                </Link>
                <Link to="/forgot_password">
                    <p className="forgot-password-btn">Forgot Password?</p>
                </Link>
            </section>
        </div>
        </>
    );
}
