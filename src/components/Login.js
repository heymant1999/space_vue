import React, { useState } from "react";

/**
 * Login component provides a user interface for user authentication.
 * It includes input fields for username and password, along with a login button.
 *
 * @param {Function} handleLogin - A callback function to handle the login process.
 *                                It takes username and password as parameters.
 */
const Login = ({ handleLogin }) => {
  // State to manage username and password input fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * handleClick function is triggered when the login button is clicked.
   * It calls the handleLogin callback with the entered username and password.
   */
  const handleClick = () => {
    handleLogin(username, password);
  };

  // Render the login form with styled input fields and a login button
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random')`,
      }}
    >
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-20"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-20"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
            type="button"
            onClick={handleClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
