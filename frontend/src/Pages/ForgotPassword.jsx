// Importing necessary modules from React library
import React, { useState } from 'react';

//import { useNavigate } from 'react-router-dom';

// Importing styles from external CSS file
import '../Style/LoginSignUp.css';

// Importing image assets
import email_icon from '../Assets/email.png';
import healthcare_icon from '../Assets/HealthCareLogo1.jpg'



const ForgotPassword = () => {

  //const [choice, setChoice] = useState("Forgot Password")
  const [email, setEmail] = useState("");


  const handleSubmit = () => {
    // Check if the current choice is "Login", email is "user@gmail.com", and password is "password122333444455555!@#$%"
    if (email === "user@gmail.com") {
      // If conditions are met, display alert
      //navigate('/dashboard');
    } else {
      alert("Incorrect email");
    }
  };


  return (
    <><div className='HealthCare'>
      <img src={healthcare_icon} height={200} width={200} alt="" />
    </div><div className='container'>
        <div className="header">
          <div className="text">{"Forgot Password"}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">


          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

        </div>

        <div className="button-container">
          <div className="signandlog-container">

          </div>
          <div className="signandlog color" onClick={handleSubmit}>Submit</div>

        </div>
      </div></>
  );
};

export default ForgotPassword;
