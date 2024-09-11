import React from 'react'
import logo from '../../assets/logo-yellow transparent.png'
import { Link, Outlet } from "react-router-dom"


const Navbar = () => {

    return (
    <nav className='w-full flex flex-row items-center justify-between py-3 px-8 fixed bg-[#01093a] z-10'>
        <div className='flex flex-row items-center font-sans text-slate-100 gap-4'>
            <img src={logo} alt="" className='w-16' />
            <h1 className='text-center font-bold'>Young Engineers <br/>  Mongolia</h1>
        </div>
        <div className='text-slate-100 flex flex-row gap-2 font-bold text-xl'>
            <Link to='/'>YEM</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Blogs</Link>
            <Link to='/'>Academy</Link>
            <Link to='/'>Charity</Link>
        </div>
    </nav>
  )
}

export default Navbar