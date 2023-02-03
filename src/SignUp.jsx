import React, {useState} from 'react'
import image from "./in2.png"
// import { image } from './in/2.png';
const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <img src={image} alt="Logo" width="140px" height="100px"/>
            <h2>Sign Up to your account</h2>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">Email/username</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Sign Up</button>
        </form>
        <h4>Already have an account? <button className="link-btn" onClick={() => props.onFormSwitch('signin')}>SignIn here.</button></h4>
        <p>Terms of use | privacy policy</p>
    </div>
    )
}

export default SignUp
