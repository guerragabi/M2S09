import React from 'react'
import { AuthProvider } from './context/Auth'
import RegistrationForm from './components/form/Form'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <RegistrationForm></RegistrationForm>
    </AuthProvider>
  )
}

export default App
