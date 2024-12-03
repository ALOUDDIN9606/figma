import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";


const Description = () => {
  return (
    <div className='bg-white text-black'>
        <div className='container flex flex-wrap items-center justify-between py-20'>
            <div className='w-[47%] flex flex-wrap flex-col gap-4'>
                <div className="w-10 h-10 bg-orange-400"></div>
                <p>CONTACT US</p>
                <h2 className='text-[45px]'>Have a Question ? Lets Get in Touch with us 👋</h2>
                <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
                <form className='w-[70%] flex flex-wrap flex-col gap-3' action="#">
                    <label htmlFor="name">Name</label>
                    <input className='py-2 outline-none border-b-2' type="text" placeholder='John Don' required />
                    <label htmlFor="email">Email</label>
                    <input className='py-2 outline-none border-b-2' type="email" placeholder='john123@.com' required />
                    <label htmlFor="subject">Subject</label>
                    <input className='py-2 outline-none border-b-2' type="text" placeholder='For web design work Enquire ' required />
                    <label htmlFor="message">Message</label>
                    <textarea className='pb-4 outline-none border-b-2' name="" placeholder='Type You Message'></textarea>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm w-48 px-6 py-4 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Messege</button>
                </form>
            </div>
            <div className='bg-blue-600 w-[47%] p-20 flex flex-wrap flex-col gap-6 text-white h-[600px]'>
                <input className='bg-blue-600 border-b-2 py-2 outline-none' type="text" placeholder='Location' required/>
                <p>DLF Cybercity, Bhubaneswar, India, &52050</p>
                <input className='bg-blue-600 border-b-2 py-2 outline-none' type="text" placeholder='Working Hour' required/>
                <div>
                    <p>Monday To Friday</p>
                    <p>9:00 AM to 8:00 PM </p>
                    <p>Our Support Team is available 24Hrs</p>
                </div>
                <input className='bg-blue-600 border-b-2 py-2 outline-none' type="text" placeholder='Contact Us' required/>
                <div>
                    <p>020 7993 2905</p>
                    <p>Hello@ether.com</p>
                </div>
                <div className='flex flex-wrap gap-6 text-white'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description


