import { useState } from 'react'
import Header from './components/Header'
import Auth from './pages/Auth'
import SignUpComp from './components/SignUpComp'
import SignInComp from './components/SignInComp'
import "./App.css"
function App() {

  return (
    <>
      <div className="">
      {/* <SignUpComp/> */}
      <SignInComp/>
      </div>
    </>
  )
}

export default App
