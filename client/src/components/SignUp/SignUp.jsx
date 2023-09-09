import "./signUp.scss";


export default function SignUp() {
    return (
        <>
        <div className="sign-up">
            <h1>Sign Up</h1>
            <p className="error-text"></p>
            <form>
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="first name"/>
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="last name"/>
                <label>Email</label>
                <input type="text" name="email" placeholder="email"/>
                <label>Password</label>
                <input type="password" name="password" placeholder="password"/>
                <label>Repeat password</label>
                <input type="password" name="repeatPassword" placeholder="repeat password"/>
                <section className="gender-section">
                    <label>Male</label>
                    <input className="gender-radio-btn" type="radio" name="gender"/>
                    <label>Fimale</label>
                    <input className="gender-radio-btn" type="radio" name="gender"/>
                </section>
                <button>SignUp</button>
                <a href="#">Sign In</a>
            </form>
        </div>
        </>
    )
};