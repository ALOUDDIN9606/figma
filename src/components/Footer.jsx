import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-orange-200 shadow dark:bg-gray-800'>
        <footer className="container">
            <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
                <div className="flex items-center gap-6">
                    <img src="src/assets/Logo (1).svg" alt="Logo"/>
                    <span className="text-[16px] text-black sm:text-center dark:text-gray-400">© 2021 Finsweet</span>
                </div>
                <ul className="flex flex-wrap gap-6 text-[20px] items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
                    <li><FaFacebook/></li>
                    <li><FaTwitter/></li>
                    <li><FaInstagram/></li>
                    <li><FaLinkedin/></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer