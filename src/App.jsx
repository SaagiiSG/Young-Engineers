import { useState } from 'react'
import LandingPage from './pages/landing Page/LandingPage'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Academy from './pages/Academy Page/Academy'
import Blogs from "./pages/Blogs Page/Blogs"
import Charity from "./pages/Charity Page/Charity"
import Projects from './pages/projects page/projects'
function App() {
  

  return (
   <div className='bg-slate-700'>
      <Router>
          <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Academy' element={<Academy/>} />
          <Route path='/Blogs' element={<Blogs/>} />
          <Route path='/Charity' element={<Charity/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
