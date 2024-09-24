// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic, e.g., authentication API call
    // For demonstration, we'll just redirect to the home page
    if (username && password) {
      // Simulate successful login
      localStorage.setItem('isLoggedIn', 'true'); // Store login state
      navigate('/home'); // Redirect to the home page after successful login
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center login-background">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-5 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-4 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-4 w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
