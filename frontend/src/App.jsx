import { useContext, useState } from 'react'
import Auth from './pages/Auth'
import "./App.css"
import HomePage from './pages/HomePage'
import DashBoard from './components/DashBoard'
import { AppContext } from './context/AppContext'
import Write from './pages/Write'
import { Routes,Route } from 'react-router-dom'

function App() {
  const { user, loading } = useContext(AppContext);
  if (loading) return <div>Loading..</div>
  return(
    <>
    <Routes>
      <Route path='/' element={user?<HomePage/> : <Auth/>}/>
      <Route path='/new-story' element={user?<Write/> : <Auth/>}/>
    </Routes>
    </>
  )
}

// function App() {
//   return (
//     <div>
//       <Write />
//     </div>
//   )
// }

export default App