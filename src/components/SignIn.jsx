import React from 'react'
import { IoClose } from "react-icons/io5";

const SignIn = ({toggle, close}) => {
    
  return (
    <div className='w-[450px] min-h-56 bg-white p-6 rounded-lg window'>
      <div className='w-full flex flex-wrap items-center justify-between'>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Create your account
        </h2>
        <svg onClick={close} className="text-2xl cursor-pointer bg-red-600 rounded-lg animate-bounce w-6 h-6 ..."><IoClose className='text-white text-2xl bg-green-600'/></svg>
      </div>

      <form className="mt-8 space-y-6" action="#">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
          </div>
          <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-start">
              <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
              </div>
              <div className="ms-3 text-sm">
              <label for="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
              </div>
              <a href="#" className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
          </div>
          <button type="submit" className="w-full px-5 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button><br />
          <div className="text-sm font-medium text-gray-900 dark:text-white">

            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>toggle()}>Sign Up</button>
          </div>
      </form>
    </div>
  )
}

export default SignIn