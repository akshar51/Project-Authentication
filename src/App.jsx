import React from 'react'
import Form from './components/Form'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    
    </>
  )
}

export default App
