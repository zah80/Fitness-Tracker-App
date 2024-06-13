import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users/signup', formData);
      navigate('/login');
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-input">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        </div>
        <div className="signup-input">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="signup-input">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <button className="signup-btn" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
