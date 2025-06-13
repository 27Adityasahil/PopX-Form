import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import AccountSettings from './components/AccountSettings'

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome')
  const [user, setUser] = useState(null)

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen)
  }

  const handleLogin = (userData) => {
    setUser(userData)
    setCurrentScreen('account')
  }

  const handleRegister = (userData) => {
    setUser(userData)
    setCurrentScreen('account')
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentScreen('welcome')
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={handleScreenChange} />
      case 'login':
        return <LoginScreen onNavigate={handleScreenChange} onLogin={handleLogin} />
      case 'register':
        return <RegisterScreen onNavigate={handleScreenChange} onRegister={handleRegister} />
      case 'account':
        return <AccountSettings user={user} onLogout={handleLogout} />
      default:
        return <WelcomeScreen onNavigate={handleScreenChange} />
    }
  }

  return (
    <div className="app">
      {renderScreen()}
    </div>
  )
}

export default App