import React, { useState } from 'react'
import './LoginScreen.css'

function LoginScreen({ onNavigate, onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.email && formData.password) {
      // Simulate login
      onLogin({
        name: 'Marry Doe',
        email: formData.email,
        isAgency: false
      })
    }
  }

  return (
    <div className="login-container">
      <button 
        className="back-btn"
        onClick={() => onNavigate('welcome')}
      >
        ← Back
      </button>
      
      <h1 className="login-title">Signin to your PopX account</h1>
      <p className="login-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <input
            type="email"
            name="email"
            className="login-form-input"
            placeholder=" "
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label className="login-form-label">
            Email Address<span className="required">*</span>
          </label>
        </div>
        
        <div className="login-form-group">
          <input
            type="password"
            name="password"
            className="login-form-input"
            placeholder=" "
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <label className="login-form-label">
            Password<span className="required">*</span>
          </label>
        </div>
        
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginScreen