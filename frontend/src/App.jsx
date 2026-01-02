import { useState } from 'react'
import Auth from './pages/Auth'
import "./App.css"
import HomePage from './pages/HomePage'
import Navigationbar from './components/Navigationbar'
function App() {

  return (
    <>
      <div className="">
        {/* <Auth /> */}
        {/* <HomePage/> */}
        <Navigationbar/>
      </div>
    </>
  )
}

export default App
