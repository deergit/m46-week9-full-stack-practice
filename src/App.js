import { useState, useEffect } from "react";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

import { deleteCookie, getCookie } from "./common";
import { authCheck } from "./utils";

const App = () => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    let jwt = getCookie("jwt_token");
    if (jwt) { loginWithToken(jwt) };
  }, []);

  const loginWithToken = async (jwt) => {
    const user = await authCheck(jwt);
    setUser(user);
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    setUser(null);
    deleteCookie("jwt_token");
  }

  return (
    <div className="App">
      {user ?
        <h2>Welcome {user}</h2>
        :
        <h2>Please log in</h2>
      }
      {!user ?
        <>
          <Register newUser={setUser}/>
          <Login newUser={setUser}/>
        </>
        :
        <button id="logout" onClick={handleLogOut}>log out</button>
      }
    </div>
  );
}

export default App;