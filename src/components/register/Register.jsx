import React from "react";
import "../login/Login.css";

const Register = () => {
  return (
    <div>
      <div className="card py-5">
        <a className="login">Register</a>
        <div className="inputBox">
          <input type="email" required="required" />
          <span className="user">Email</span>
        </div>

        <div className="inputBox">
          <input type="text" required="required" />
          <span className="user">Username</span>
        </div>

        <div className="inputBox">
          <input type="password" required="required" />
          <span>Password</span>
        </div>

        <button className="enter">Enter</button>
      </div>
    </div>
  );
};

export default Register;
