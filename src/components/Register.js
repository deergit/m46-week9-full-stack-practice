import { useState } from "react";
import { registerUser } from "../utils";

import "./Register.css";

const Register = ({ newUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(username, email, password, newUser);
  }

  return (
    <div className="register-container">
      <h1>Register a new account:</h1>
      <form onSubmit={submitHandler}>
        <label>Username:<br />
          <input onChange={(e) => setUsername(e.target.value)}></input>
        </label>

        <label>Email:<br />
          <input onChange={(e) => setEmail(e.target.value)}></input>
        </label>

        <label>Password:<br />
          <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
        </label>

        <button type="submit">register</button>
      </form>
    </div>
  );
}

export default Register;