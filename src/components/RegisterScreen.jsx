import React, { useState } from 'react'
import './RegisterScreen.css'

function RegisterScreen({ onNavigate, onRegister }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.fullName && formData.email && formData.password) {
      onRegister({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        company: formData.companyName,
        isAgency: formData.isAgency === 'yes'
      })
    }
  }

  return (
    <div className="register-container">
      <button 
        className="back-btn"
        onClick={() => onNavigate('welcome')}
      >
        ← Back
      </button>
      
      <h1 className="register-title">Create your PopX account</h1>
      
      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-form-group">
          <input
            type="text"
            name="fullName"
            className="register-form-input"
            placeholder=" "
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <label className="register-form-label">
            Full Name<span className="required">*</span>
          </label>
        </div>
        
        <div className="register-form-group">
          <input
            type="tel"
            name="phoneNumber"
            className="register-form-input"
            placeholder=" "
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <label className="register-form-label">
            Phone number<span className="required">*</span>
          </label>
        </div>
        
        <div className="register-form-group">
          <input
            type="email"
            name="email"
            className="register-form-input"
            placeholder=" "
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label className="register-form-label">
            Email address<span className="required">*</span>
          </label>
        </div>
        
        <div className="register-form-group">
          <input
            type="password"
            name="password"
            className="register-form-input"
            placeholder=" "
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <label className="register-form-label">
            Password<span className="required">*</span>
          </label>
        </div>
        
        <div className="register-form-group">
          <input
            type="text"
            name="companyName"
            className="register-form-input"
            placeholder=" "
            value={formData.companyName}
            onChange={handleInputChange}
          />
          <label className="register-form-label">Company name</label>
        </div>
        
        <div className="register-radio-group-container">
          <label className="register-radio-group-label">
            Are you an Agency?<span className="required">*</span>
          </label>
          <div className="register-radio-group">
            <div className="register-radio-option" onClick={() => handleRadioChange('yes')}>
              <div className={`register-radio-input ${formData.isAgency === 'yes' ? 'checked' : ''}`}></div>
              <span className="register-radio-label">Yes</span>
            </div>
            <div className="register-radio-option" onClick={() => handleRadioChange('no')}>
              <div className={`register-radio-input ${formData.isAgency === 'no' ? 'checked' : ''}`}></div>
              <span className="register-radio-label">No</span>
            </div>
          </div>
        </div>
        
        <button type="submit" className="register-btn">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default RegisterScreen