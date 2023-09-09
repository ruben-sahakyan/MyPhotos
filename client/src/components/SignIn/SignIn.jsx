import "../SignUp/signUp.scss";
import "./signIn.scss";


export default function SignIn() {
    return (
        <>
        <div className="sign-in">
            <h1>Sign In</h1>
            <p className="error-text">Incorrect email</p>
            <form>
            <label>email</label>
            <input type="text" name="email" placeholder="email"/>
            <label>password</label>
            <input type="password" name="password" placeholder="password"/>
            <button>SignIn</button>
            </form>
            <a href="#">Sign Up</a>
        </div>
        </>
    );
}