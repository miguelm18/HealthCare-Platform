// Importing necessary modules from React library
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Importing styles from external CSS file
import '../Style/LoginSignUp.css';

// Importing image assets
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import user_icon from '../Assets/person.png';
import healthcare_icon from '../Assets/HealthCareLogo1.jpg'

// Defining functional component LoginSignUp
const LoginSignUp = () => {

  const navigate = useNavigate();

  // State hooks to manage choice between "Sign Up" and "Login", email, and password
  const [choice, setChoice] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Check if the current choice is "Login", email is "user@gmail.com", and password is "password122333444455555!@#$%"
    if (choice === "Login" && email === "user@gmail.com" && password === "password122333444455555!@#$%") {
      // If conditions are met, display alert
      navigate('/dashboard');
    } else {
      alert("Incorrect email or password");
    }
  };

  // Rendering JSX content
  return (
    <>
      <div className='HealthCare'>
        <img src={healthcare_icon} height={200} width={200} alt="" />
      </div>

      <div className='container'>
        {/* Header section */}
        <div className="header">
          {/* Displaying current choice */}
          <div className="text">{choice}</div>
          {/* Underline below choice */}
          <div className="underline"></div>
        </div>
        {/* Input fields section */}
        <div className="inputs">
          {/* Conditional rendering based on choice */}
          {choice === "Login" ? <div></div> : <div className="input">
            {/* Icon for first and last name */}
            <img src={user_icon} alt="" />
            {/* Input field for first and last name */}
            <input type="text" placeholder="First and Last Name" />
          </div>}
          {/* Email input field */}
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* Password input field */}
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        {/* Conditional rendering for forgot password section */}
        {choice === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Your Password? <span><Link to="/Forgot">Click Here!</Link></span></div>}
        {/* Container for all buttons */}
        <div className="button-container">
          {/* Container for submit and login button */}
          <div className="signandlog-container">
            {/* Sign Up button */}
            <div className={choice === "Login" ? "signandlog gray" : "signandlog"} onClick={() => { setChoice("Sign Up") }}>Sign Up</div>
            {/* Login button */}
            <div className={choice === "Sign Up" ? "signandlog gray" : "signandlog"} onClick={() => { setChoice("Login") }}>Login</div>
          </div>
          {/* Submit button */}
          <div className="signandlog color" onClick={handleSubmit}>Submit</div>
        </div>
      </div>
    </>
  );
};

// Exporting LoginSignUp component as default
export default LoginSignUp;
