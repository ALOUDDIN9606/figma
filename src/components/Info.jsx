import React from 'react'
import { BsArrowRight } from "react-icons/bs";


const Info = () => {
  return (
    <div className='border service'>
        <div className="container flex flex-wrap items-center justify-between py-24">
            <div className="w-[50%] flex flex-wrap gap-7">
              <p className='text-black'>OUR SERVICES</p>
              <h2 className='text-black text-[55px]'>We Build Software Solutionthat Solve Clients Business Challenges</h2>
              <p className='text-slate-700 text-[18px]'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
              <button type="button" class="text-white flex items-center gap-2 text-[17px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-8 py-4 text-center me-2 mb-2">Request Quote <BsArrowRight/></button>
            </div>
            <div className="text-black flex flex-col gap-3 text-[22px] w-[22%]">
              <a className='hover:text-red-600 transform transition-transform duration-300 hover:translate-x-2' href="#">Technical support</a>
              <a className='flex items-center gap-3 hover:text-red-600 transform transition-transform duration-300 hover:translate-x-2' href="#">Development <BsArrowRight/></a>
              <a className='hover:text-red-600 transform transition-transform duration-300 hover:translate-x-2' href="#">AWS/Azure </a>
              <a className='hover:text-red-600 transform transition-transform duration-300 hover:translate-x-2' href="#">Consulting</a>
              <a className='hover:text-red-600 transform transition-transform duration-300 hover:translate-x-2' href="#">Information Technology</a>
            </div>
        </div>
    </div>
  )
}

export default Info



