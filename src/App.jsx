import React from 'react'
import Form from './components/Form'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<SignIn />} />
        <Route path='/form' element={<Form/>}/>
      </Routes>
    
    </>
  )
}

export default App
