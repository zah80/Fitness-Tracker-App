import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users/login', formData);
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        </div>
        <div className="login-input">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
