import { useState } from "react";
import "./signUp.scss";
import { Link, useNavigate } from "react-router-dom";


export default function SignUp() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorText, setErrorText] = useState('');

    async function registerForm(ev) {
        ev.preventDefault();
        if(firstName.trim() === '') {
            setErrorText('Please add first name');
        }else if(firstName.length < 2 || firstName.length > 10) {
            setErrorText('first name petqa mec lini 2 u poqr lini 10');
        }else if(lastName.trim() === '') {
            setErrorText('Please add last name');
        }else if(lastName.length < 2 || lastName.length > 12) {
            setErrorText('first name petqa mec lini 2 u poqr lini 12')
        }else if(email.trim() === '') {
            setErrorText('Please add email')
        } else if(gender.trim() === '') {
            setErrorText('Please add gender')
        } else if(password.trim() === '') {
            setErrorText('Please add password')
        } else if(password.length < 5 || password.length > 15) {
            setErrorText('password@ petqa lini mec 5 ic poqr 15');
        }else if(confirmPassword.trim() === '') {
            setErrorText('Please confirm password')
        } else if(password !== confirmPassword) {
            setErrorText('Passwords do not match')
        } else {
            fetch('http://localhost:5000/signup', {
                'method': "POST",
                body: JSON.stringify({firstName, lastName, email, gender, password}),
                headers: {
                    'content-type': "application/json",
                },
                credentials: 'include',
            }).then(resp => resp.json()).then(info => {
                if(info.status === 400) {
                    setErrorText('Failed to register')
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                } else {
                    return navigate('/signin');
                }
            })
        }
    };
    return (
        <>
        <div className="sign-up">
            <h1>Sign Up</h1>
            <p className="error-text">{errorText}</p>
            <form onSubmit={registerForm}>
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="first name" value={firstName} onChange={ev => {setFirstName(ev.target.value)}}/>
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="last name" value={lastName} onChange={ev => {setLastName(ev.target.value)}}/>
                <label>Email</label>
                <input type="text" name="email" placeholder="email" value={email} onChange={ev => {setEmail(ev.target.value)}}/>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" value={password} onChange={ev => {setPassword(ev.target.value)}}/>
                <label>Confirm password</label>
                <input type="password" name="confirmPassword" placeholder="confirm password" value={confirmPassword} onChange={ev => {setConfirmPassword(ev.target.value)}}/>
                <section className="gender-section">
                    <label>Male</label>
                    <input className="gender-radio-btn" type="radio" name="gender" value="male" onChange={ev => {setGender(ev.target.value)}}/>
                    <label>Fimale</label>
                    <input className="gender-radio-btn" type="radio" name="gender" value="female" onChange={ev => {setGender(ev.target.value)}}/>
                </section>
                <button>SIGN UP</button>
                <Link to='http://127.0.0.1:5173/signin'>
                    Sign In
                </Link>
            </form>
        </div>
        </>
    )
};