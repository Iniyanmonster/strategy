import './App.css';
import { useState } from "react";
import {Header ,Home ,Login} from "./components";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("user");
  return (
    <div>
      <Header username={username} isAuthenticated={isAuthenticated} />
      {isAuthenticated ? <Home /> : <Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />}
    </div>
  );
};

export default App;
