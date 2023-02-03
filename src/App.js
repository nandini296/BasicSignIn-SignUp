import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import  SignIn  from "./SignIn";
import  SignUp from "./SignUp";
import image from "./in1.png"
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="container">
    <div className="nav">
    <img src={image} alt="Logo" width="140px" height="100px"/>
    </div>
    <div className="App">

      {
        currentForm === "signin" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
    </div>
  );
}

export default App;