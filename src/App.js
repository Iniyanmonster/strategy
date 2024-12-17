import './App.css';
import { useState } from "react";
import {Header ,Home ,Login} from "./components";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUserData] = useState("");

  return (
    <div>
      <Header username={username} isAuthenticated={isAuthenticated} />
      {isAuthenticated ? <Home username={username}/> : <Login setIsAuthenticated={setIsAuthenticated} setUserData={setUserData} />}
    </div>
  );
};

export default App;
