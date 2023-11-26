import React, { useState } from "react";
import "./Login.css";

const SimpleLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "Remember Me:", rememberMe);
    // Login logic here
  };

  const handleCreateAccountClick = () => {
    // Logic to handle "Create an account"
    console.log("Create an account clicked");
  };

  return (
    <div className="login-main">
      <div className="title">
        <div className="text-wrapper">Smart Delivery</div>
        <div className="separator-line"></div>
        <p className="freshness-delivered">&#34;Freshness Delivered to Your Doorstep&#34;</p>
      </div>
      <div className="big-login">Login</div>
      <form onSubmit={handleLoginSubmit} className="login-box">
        <div className="input-fields">
          <div className="div-wrapper">
            <div className="input-wrapper">
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="input-wrapper">
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="login-btn-rem">
            <div className="rem-check">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe" className="text-wrapper-2">Remember me</label>
            </div>
            <button type="submit" className="login-btn">
              <div className="text-wrapper">Login</div>
            </button>
          </div>
        </div>
      </form>
      <div className="create-acc">
        <div className="text-wrapper-3">Don’t have an account?</div>
        <button className="create-acc-btn" onClick={handleCreateAccountClick}>
          <div className="text-wrapper-4">Create an account</div>
        </button>
      </div>
    </div>
  );
};

export default SimpleLogin;
