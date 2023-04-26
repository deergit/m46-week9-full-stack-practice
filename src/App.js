import { useState, useEffect } from "react";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { getCookie } from "./common";

const App = () => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    let cookie = getCookie("jwt_token");
    console.log(cookie);
  }, []);

  const handleLogOut = (e) => {
    e.preventDefault();
    setUser(null);
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