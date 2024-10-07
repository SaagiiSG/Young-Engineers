import React from 'react'
import logo from '../../assets/logo-yellow transparent.png'
import { Link, Outlet } from "react-router-dom"


const Navbar = () => {

    return (
    <nav className='w-full flex flex-row items-center justify-between py-3 px-8 fixed top-0 bg-[#01093a] z-50'>
        <div className='flex flex-row items-center font-sans text-slate-100 gap-4'>
            <img src={logo} alt="" className='w-16' />
            <h1 className='text-center font-semibold'>Young Engineers <br/>  Mongolia</h1>
        </div>
        <div className='text-slate-100 flex flex-row gap-4 font-medium text-xl'>
            <Link to='/' className='hover:scale-110 duration-200 hover:text-slate-200' >YEM</Link>
            <Link to='/Projects' className='hover:scale-110 duration-200 hover:text-slate-200' >Projects</Link>
            <Link to='/Blogs' className='hover:scale-110 duration-200 hover:text-slate-200' >Blogs</Link>
            <Link to='/Programm' className='hover:scale-110 duration-200 hover:text-slate-200' >Programm</Link>
            <Link to='/Charity' className='hover:scale-110 duration-200 hover:text-slate-200' >Charity</Link>
        </div>
    </nav>
  )
}

export default Navbar