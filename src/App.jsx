import { useState } from 'react'
import LandingPage from './pages/landing Page/LandingPage'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
   <div className='bg-slate-700'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
