import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import MainPage from "./pages/home";
import {Header} from "./components";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("user");
  return (
    <Router>
      <Header username={username} isAuthenticated={isAuthenticated} />
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />}
        />
        <Route
          path="/main"
          element={isAuthenticated ? <MainPage /> : <Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
