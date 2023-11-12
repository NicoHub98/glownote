import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { localUser } from "../../store/UserSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(localUser(username));
    navigate("/");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="card">
        <a className="login">Log in</a>
        <div className="inputBox">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            required="required"
            autoFocus
          />
          <span className="user">Username</span>
        </div>
        <div className="inputBox">
          <input type="password" required="required" />
          <span>Password</span>
        </div>
        <div className="flex flex-col items-center">
          <button type="submit" className="enter">
            Enter
          </button>
          <div>
            Don't have an account?{" "}
            <Link to="/register">
              <button className="hover:text-blue-950">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
