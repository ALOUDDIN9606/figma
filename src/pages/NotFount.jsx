import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const NotFount = () => {
  const navigate =  useNavigate()

  return (
    <div className='h-[90vh] flex flex-wrap items-center justify-center bg-white'>
        <div className="bg-red-500 p-10 text-center w-[40%] flex flex-wrap flex-col items-center gap-5">
            <h2 className='text-9xl'>404</h2>
            <h2 className='text-4xl'>Not Fount</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum dicta distinctio alias reiciendis, doloribus aliquam fugit deleniti tenetur facilis nisi aut dignissimos, debitis iste pariatur, dolore ipsam hic. Dolorum?</p>
            <button onClick={() => navigate("/")} className='bg-green-700 py-2 px-6 mr-4 rounded-xl'>Go Home</button>
        </div>
    </div>
  )
}

export default NotFount