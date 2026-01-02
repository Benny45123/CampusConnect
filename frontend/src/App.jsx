import { useState } from 'react'
import Auth from './pages/Auth'
import "./App.css"
import HomePage from './pages/HomePage'
import DashBoard from './components/DashBoard'
function App() {

  return (
    <>
      <div className="">
        {/* <Auth /> */}
        <HomePage/>
        {/* <DashBoard/> */}
      </div>
    </>
  )
}

export default App
