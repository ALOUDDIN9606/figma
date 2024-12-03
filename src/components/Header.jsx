import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header id='header' className='bg-blue-950 py-6 w-full'>
        <nav className='container flex flex-wrap justify-between'>
            <div className=''>
                <img className='h-full' src="src/assets/Logo.svg" alt="" />
            </div>
            <div className='flex gap-6 text-[18px]'>
                <NavLink className="text-white" to={"/"}>Home</NavLink>
                <NavLink className="text-white" to={"/service"}>Service</NavLink>
                <NavLink className="text-white" to={"/company"}>Company</NavLink>
                <NavLink className="text-white" to={"/career"}>Career</NavLink>
                <NavLink className="text-white" to={"/blog"}>Blog</NavLink>
                <NavLink className="text-white" to={"/contact"}>Contact us</NavLink>
                <NavLink className="text-white" to={"/login"}>Login</NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Header