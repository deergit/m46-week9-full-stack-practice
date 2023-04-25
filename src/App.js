import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [user, setUser] = useState();

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
      <Register newUser={setUser}/>
      <Login newUser={setUser}/>
      <button id="logout" onClick={handleLogOut}>log out</button>
    </div>
  );
}

export default App;