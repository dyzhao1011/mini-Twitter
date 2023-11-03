import React from "react";
import { useState } from "react";
import Home from "../Home Page/Home";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  /*
    - username and password variables is what the user types in
    - Whenever the user changes them in the input, these variables will automatically update
    */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
        Back End Team:
        - Use the username and password variables above
        - Find if such username exists in the database
        - If username does not exist, alert a message saying that "No user exists"
        - If username does exists, but the password is wrong, alert a message "Incorrect Password"
        - If username and password matches correctly, log in the user.
        Here is the code/ pesudo code:

        if (username & password exists){
            navigate("/home")
        }

        */
  };
  return (
    <div>
      <h1>Login</h1>
      <Link to="/home"> home </Link>
      <form id="login" onSubmit={handleSubmit}>
        <label htmlFor="login-username">Username</label>
        <input
          type="text"
          name="login-username"
          required
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          name="login-password"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input type="submit" />
      </form>

      <Link to="/signup"> Don't have an account? Create one here </Link>
    </div>
  );
}

export default Login;
