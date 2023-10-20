import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Password does not match. Please try again");
    } else {
      /*
            Backend Team:
            - Create an unique ID for the user and store that, the username, password, and their "type" as a Surfer
        */

      navigate("/");
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <form id="singup" onSubmit={handleSubmit}>
        <label htmlFor="signup-username">Username</label>
        <input
          type="text"
          name="signup-username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          name="signup-password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="signup-password-confirm">Confirm Passowrd</label>
        <input
          type="password"
          name="signup-password-confirm"
          required
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;
