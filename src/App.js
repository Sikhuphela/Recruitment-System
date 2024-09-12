import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const login = () => {
    setShowLogin(true);
  };

  const register = () => {
    setShowLogin(false);
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>Recruitment System</p>
        </div>
        <div className="nav-menu">
          <ul>
            <li><a href="#" className="link">Home</a></li>
            <li><a href="#" className="link">Blog</a></li>
            <li><a href="#" className="link">Services</a></li>
            <li><a href="#" className="link">About</a></li>
          </ul>
        </div>
        <div className="nav-button">
          <button className={`btn ${showLogin ? 'white-btn' : ''}`} onClick={login}>Sign In</button>
          <button className={`btn ${!showLogin ? 'white-btn' : ''}`} onClick={register}>Sign up</button>
        </div>
        <div className="nav-menu-btn">
          <i className='bx bx-menu' onClick={() => document.getElementById("navMenu").classList.toggle("responsive")}></i>
        </div>
      </nav>

      <div className="form-box">
        {showLogin ? (
          <div className="login-container">
            <div className="top">
              <span>Don't have an account?<a href="#" onClick={register}>Sign Up</a></span>
              <header>Login</header>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Username or Email" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Sign In" />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check">Remember Me</label>
              </div>
              <div className="two">
                <label><a href="#">Forgot password?</a></label>
              </div>
            </div>
          </div>
        ) : (
          <div className="register-container">
            <div className="top">
              <span>Have an account?<a href="#" onClick={login}>Login</a></span>
              <header>Sign Up</header>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Firstname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Lastname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" className="input-field" placeholder="Password" />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Register" />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check">Remember Me</label>
              </div>
              <div className="two">
                <label><a href="#">Terms and Conditions</a></label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
