'use client'
import React, { useState } from 'react';
import './signuppage.css';
import rightImage from './solngo-modified.png'; // Import your image file
import Link from 'next/link';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [accountType, setAccountType] = useState('individual'); // Default to individual account type

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formData;
    let isValid = true;

    if (username.trim() === '') {
      setErrors({ ...errors, username: 'Username is required.' });
      isValid = false;
    } else {
      setErrors({ ...errors, username: '' });
    }

    if (password.trim() === '') {
      setErrors({ ...errors, password: 'Password is required.' });
      isValid = false;
    } else {
      setErrors({ ...errors, password: '' });
    }

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <div className="center-content">
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="accountType">Account Type: </label>
            <select
              id="accountType"
              name="accountType"
              value={accountType}
              onChange={handleAccountTypeChange}
            >
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit"><Link href= "/qr_scanner_page">Sign Up</Link></button>
        </form>
      </div>
      <img src={rightImage.src} alt="Right Image" className="right-image" />
    </div>
  );
};

export default SignUp;
