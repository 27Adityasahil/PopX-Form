import React from 'react'
import './AccountSettings.css'

function AccountSettings({ user, onLogout }) {
  const avatarUrl = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"

  return (
    <div className="account-container">
      <button 
        className="logout-btn"
        onClick={onLogout}
      >
        Logout
      </button>
      
      <h1 className="account-title">Account Settings</h1>
      
      <div className="account-profile-section">
        <div className="account-profile-avatar">
          <img src={avatarUrl} alt="Profile" />
          <div className="account-profile-badge"></div>
        </div>
        <div className="account-profile-info">
          <h3>{user?.name || 'Marry Doe'}</h3>
          <p>{user?.email || 'Marry@Gmail.Com'}</p>
        </div>
      </div>
      
      <div className="account-profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </div>
  )
}

export default AccountSettings