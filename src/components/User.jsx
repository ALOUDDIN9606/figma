import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";

const User = () => {
  return (
    <div className='bg-white text-black flex justify-center py-20'>
        <div className='w-[40%] flex flex-wrap flex-col items-center gap-5 text-center'>
            <img src="src/assets/Image (7).png" alt="" />
            <h2 className='text-[40px]'>Javena Melo</h2>
            <p>CEO</p>
            <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
            <div className='flex gap-6 text-[20px]'>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
            </div>
        </div>
    </div>
  )
}

export default User