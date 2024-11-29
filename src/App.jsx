import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './components/Products';
import Modal from './components/Modal';
import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { FaReact } from "react-icons/fa";

function App() {
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  let toggleActions = ()=>{
    setSignIn(p => !p)
    setSignUp(p => !p)
  }
  return (
    <>
       <div className='py-3 bg-blue-900 sticky'>
          <div className='container flex flex-wrap items-center justify-between md:text-2xl'>
            <div><FaReact className='text-6xl text-green-500 xl:text-6xl lg:text-5xl sm:text-6xl'/></div>
            <div className="flex gap-4">
              <button className='px-6 py-3 rounded-xl text-[18px] w-26 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium  text-sm text-center sm:w-20 sm:px-3' onClick={()=> setSignIn(true)}>Sign in</button>
              <button className='px-6 py-3 rounded-xl text-[18px] w-26 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm text-center' onClick={()=> setSignUp(true)}>Sign up</button>

              {
              signIn &&
              <Modal close={()=> setSignIn(false)}>
                <SignIn toggle={toggleActions} close={() => setSignIn(false)}/>
              </Modal>
              }
              {
              signUp &&
              <Modal close={()=> setSignUp(false)}>
                <SignUp toggle={toggleActions} close={() => setSignUp(false)}/>
              </Modal>
              }
            </div>    
          </div>
       </div>

      <Products/>
      <ToastContainer/>
    </>
  )
}

export default App