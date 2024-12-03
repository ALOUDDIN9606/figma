import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=''>
        <div className='container'>
            <div className="flex items-center justify-between pt-14">
                <div className='w-[624px] h-[420px] flex flex-wrap gap-8'>
                    <h1 className='text-[60px] '>Transform Your Idea Into Reality with Finsweet</h1>
                    <p className='text-[17px]'>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                    <button type="button" class="text-white flex items-center gap-2 text-[17px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-8 py-2.5 text-center me-2 mb-2">Request Quote <BsArrowRight/></button>
                </div>
                <div className="w-[563px] h-[632px]">
                    <img className='h-full' src="src/assets/Header Image.png" alt="" />
                </div>
            </div>
            <div className="flex flex-wrap justify-between py-5">
                <div className='flex flex-wrap flex-col justify-center w-[20%]'>
                    <p>Our Clients</p>
                    <h2>We've Worked with</h2>
                </div>
                <div className='flex flex-wrap justify-between w-[80%]'>
                    <div className="">
                        <img className='h-full' src="src/assets/Logo (1).png" alt="" /> 
                    </div>
                    <div className="">
                        <img className='h-full' src="src/assets/Logo (2).png" alt="" /> 
                    </div>
                    <div className="">
                        <img className='h-full' src="src/assets/Logo (3).png" alt="" /> 
                    </div>
                    <div className="">
                        <img className='h-full' src="src/assets/Logo (4).png" alt="" /> 
                    </div>
                    <div className="">
                        <img className='h-full' src="src/assets/Logo (5).png" alt="" /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

