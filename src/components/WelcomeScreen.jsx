import React from 'react'
import './WelcomeScreen.css'

function WelcomeScreen({ onNavigate }) {
  return (
    <div className="welcome-container">
      <div className="welcome-icon-container">
        <div className="welcome-icon">
          📱
        </div>
      </div>
      
      <h1 className="welcome-title">Welcome to PopX</h1>
      <p className="welcome-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      
      <button 
        className="welcome-btn welcome-btn-primary"
        onClick={() => onNavigate('register')}
      >
        Create Account
      </button>
      
      <button 
        className="welcome-btn welcome-btn-secondary"
        onClick={() => onNavigate('login')}
      >
        Already Registered? Login
      </button>
    </div>
  )
}

export default WelcomeScreen