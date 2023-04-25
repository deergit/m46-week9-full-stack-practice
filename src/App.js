import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Login newUser={setUser}/>
      {user ?
        <h2>Welcome {user}</h2>
        :
        <h2>Please log in</h2>
      }
    </div>
  );
}

export default App;