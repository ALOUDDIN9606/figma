import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='bg-blueGray-900 text-white'>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout