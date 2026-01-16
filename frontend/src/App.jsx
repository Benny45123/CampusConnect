import { useContext, useState } from 'react'
import Auth from './pages/Auth'
import "./App.css"
import HomePage from './pages/HomePage'
import DashBoard from './components/DashBoard'
import { AppContext } from './context/AppContext'

function App() {
  const {user,loading}=useContext(AppContext);
  if (loading){
    return <div>Loading...</div>;
  }
  if (!user){
    return <Auth/>
  }
  return (
    <div className="App">
      <HomePage/>
    </div>
  )
}

export default App
