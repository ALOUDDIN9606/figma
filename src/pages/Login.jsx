import React from 'react'
import {useNavigate} from 'react-router-dom'
import SignUp from '../components/SignUp'

const Login = () => {
  const navigate =  useNavigate()
  return (
    <div className='flex flex-wrap flex-col items-center py-6'>
        <div className='w-[20%] py-4 flex justify-center'>
          <button onClick={() => navigate("/")} className='bg-green-700 py-2 px-6 mr-4 rounded-lg text-white w-40'>Go Home</button>
          <button onClick={() => navigate(-1)} className='bg-blue-700 py-2 px-6 rounded-lg text-white w-40'>Go Back</button>
        </div>
        <SignUp/>
    </div>
  )
}

export default Login