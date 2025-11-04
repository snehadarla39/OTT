
import React, { useState } from "react";
import "./login.css";
//import bgImage from "./background.jpg"; // rename your uploaded image to background.jpg and put it in /src

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fullbg" //style={{
       // backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfurnNr7NPsy5aDKpNBIu8Yg4qxSSAcrWNQ&s')`,
      //}}
      >
    <div
      className="login-container"
     
    >
      <div className="login-box">
        <h2>Sign In</h2>

        {/* Username */}
        <div className="form-group">
          <label>User Name :</label>
          <input type="text" placeholder="Enter User Name" />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password :</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
        </div>

        {/* Show Password + Forgot */}
        <div className="options">
          <label className="showpass">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show password
          </label><br/>
          
          <a href="#" className="forgot-link">
            Forgot Password ?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="sign-in-btn">Sign In</button>

        {/* Keep Signed In + Register */}
        <div className="bottom-text">
          <label>
            <input type="checkbox" /> Keep Me Signed In
          </label>
          <p>
            Don’t have an account?{" "}
            <a href="#" className="register-link">
              Register Here
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

