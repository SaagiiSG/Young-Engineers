import { useState } from 'react'
import LandingPage from './pages/landing Page/LandingPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Academy from './pages/Academy Page/Academy'
import BlogsMain from "./pages/Blogs Page/BlogsMain-9"
import BlogsPreview from './pages/Blogs Page/BlogsPreview'
import Charity from "./pages/Charity Page/Charity"
import Projects from './pages/projects page/projects'
import Blogs from './pages/Blogs Page/blogs'

function App() {
  

  return (
   <div className='bg-slate-700 flex flex-col items-center justify-center'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Programm' element={<Academy/>} />
          <Route path='/Blogs' element={<BlogsMain/>} />
          <Route path='/blogsPreview' element={<BlogsPreview/>}/>
          <Route path='testBlog' element={<Blogs/>}/>
          <Route path='/Charity' element={<Charity/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
