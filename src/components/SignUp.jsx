import React from 'react'
import { IoClose } from "react-icons/io5";

const SignUp = ({toggle, close}) => {

  return (
    <div className='w-[450px] min-h-56 bg-white p-6 rounded-lg'>
      <div className='w-full flex flex-wrap items-center justify-between'>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Create your account
        </h2>
        <svg onClick={close} className="animation-bounce text-2xl cursor-pointer bg-red-600 rounded-lg animate-bounce w-6 h-6 ..."><IoClose className='text-white text-2xl bg-green-600'/></svg>
      </div>
      <form className="mt-8 space-y-6" action="#">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
          <input type="text" name="name" id="name" placeholder="John Doe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Your Email </label>
          <input type="email" name="email" id="email" placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Password </label>
          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div>
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Confirm Password </label>
          <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="terms" aria-describedby="terms" name="terms" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-medium text-gray-500 dark:text-gray-400" > I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500" >
                terms and conditions
              </a>
            </label>
          </div>
        </div>

        <button type="submit" className="w-full px-8 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" > Set up your account </button><br />

        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => toggle()}>Sign In</button>
      </form>
    </div>

  )
}

export default SignUp

// <div>
//           <form className='w-96 min-h-56 bg-white p-3'>
//         <h2 className='text-2xl mb-3'>Sign up</h2>
//         <input className='w-full h-10 border mb-3' type="text" />
//         <input className='w-full h-10 border mb-3' type="text" />
//         <input className='w-full h-10 border mb-3' type="text" />
//         <input className='w-full h-10 border mb-3' type="text" />
//         <input className='w-full h-10 border mb-3' type="text" />
//         <input className='w-full h-10 border mb-3' type="text" />
//         <button className='bg-slate-400 w-full h-10'>Sign in</button>
//         <button type='button' onClick={()=>toggle()}>Sign in</button>
//     </form>
// </div>