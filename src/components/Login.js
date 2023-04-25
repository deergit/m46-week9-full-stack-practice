import { useState } from "react";
import { loginUser } from "../utils";

import "./Login.css";

const Login = ({ newUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(username, email, password, newUser);
  }

  return (
    <div className="login-container">
      <h1>Login below:</h1>
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

        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default Login;