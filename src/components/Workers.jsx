import React from 'react'

const Workers = () => {
  return (
    <div className='py-12 worker'>
        <div className='container'>
            <div className='w-[50%] flex flex-wrap flex-col gap-6 py-12'>
                <div className="w-10 h-10 bg-orange-300"></div>
                <p className='text-black'>COMPANY</p>
                <h2 className='text-black text-[50px]'>Award-winning Company seen and used by millions around the world.</h2>
                <p className='text-black'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
            </div>
            <div className="w-full grid grid-cols-3 gap-6">
                <img className='h-[446px]' src="src/assets/Image 1.png" alt="" />
                <img className='h-[446px]' src="src/assets/Image 2.png" alt="" />
                <img className='h-[446px]' src="src/assets/Image 3.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Workers