import { useState } from "react";
import "./forgotPassword.scss";


export default function ForgotPassword() {
    const [errorText, setErrorText] = useState('');
    const [email, setEmail] = useState('');
    const [showSendEmail, setShowSendEmail] = useState(false);
    const [emailCode, setEmailCode] = useState('');
    async function sendEmail(ev) {
        ev.preventDefault();
        if(email.trim() === '') {
            setErrorText('Please add email')
        } else {
            setErrorText('');
            fetch('http://localhost:5000/sendemail', {
                "method": "POST",
                body: JSON.stringify({email}),
                headers: {
                    'content-type': "application/json",
                },
                credentials: "include",
            }).then(resp => resp.json()).then(info => {
                console.log(info);
                if(info.message) {
                    setShowSendEmail(true);
                }
            })  
        }
    };
    function sendCode(ev) {
        ev.preventDefault();
        if(emailCode.trim() === 0 || emailCode.length !== 4) {
            alert('Incorrect code')
            setEmailCode('');
        } else {
            alert('very nice code');
        }
    }
    return (
        <div className="forgot-password">
            <h1>FORGOT PASSWORD?</h1>
            <p className="error-text">{errorText}</p>
            <form onSubmit={sendEmail}>
                <input placeholder="Enter your email" type="text" value={email}
                onChange={ev => {setEmail(ev.target.value)}}/>
                <button>SEND</button>
            </form>
            <div className={showSendEmail ? "new-code-email" : "new-code-email-none"}>
                <form onSubmit={sendCode}>
                    <input placeholder="Add code" value={emailCode}
                    onChange={ev => {setEmailCode(ev.target.value)}}/>
                    <button>SEND</button>
                </form>
            </div>
        </div>
    );
}