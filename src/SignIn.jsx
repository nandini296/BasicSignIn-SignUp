import React,{useState} from 'react'
import image from "./in2.png"
const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <img src={image} alt="Logo" width="140px" height="100px"/>
            <h2>SignIn to your account</h2>
                <label htmlFor="email">Email/username</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="eg.john@example.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <h4>New here? <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Create an account</button></h4>
            <p>Terms of use | privacy policy</p>
        </div>
    )
}

export default SignIn
