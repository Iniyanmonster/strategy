import React from "react";
import { useState } from "react";
import { Router, Route } from "react-router";
import { getUser, createUser } from "../actions/utils";
import MainPage from "./home";
import InputField from "../components/atoms/input-field";

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated , setAuthenticated] = useState(setIsAuthenticated);

  const handleLogin = async () => {
    try {
      const users = await getUser();
      const user = users.find((user) => user.username === username);
      if (!user) {
        alert("User not found. Please check your username.");
        return;
      }
      if (user.password === password) {
        setAuthenticated(true);
        <Router>
          <Route
          path="/main"
          element={isAuthenticated ? <MainPage /> : <Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />}
        />
        </Router>
      } else {
        alert("Incorrect password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error logging in. Please try again.");
    }
  };

  const handleSignup = async () => {
    try {
      const users = await getUser();
      const userExists = users.some((user) => user.username === username);

      if (userExists) {
        alert("Username already exists. Please choose another.");
      } else {
        const content = {
          username: username,
          password: password,
        };
        const cret = await createUser(content);
        console.log(cret);
        alert("Signup successful! You can now log in.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div className="text-white grid grid-flow-col gap-10 sm:grid-cols-1 justify-center items-center min-h-screen px-40 m-auto h-screen bg-black">
      <section className="grid gap-4">
        <p className=" font-bold text-lg">CREATE ACCOUNT</p>
        <InputField
          type="text"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </section>
      <div className="border-r border-gray-400 h-96"></div>
      <section className="grid gap-4">
        <p className=" font-bold text-lg">LOGIN</p>
        <InputField
          type="text"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </section>
    </div>
  );
}
