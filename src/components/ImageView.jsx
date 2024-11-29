import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaSackDollar } from "react-icons/fa6";

import { Navigation, Autoplay } from 'swiper/modules';
const ImageView = ({data}) => {
  
  return (
    <Swiper 
        loop={true} 
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        // }} 
        navigation={true} 
        modules={[ Autoplay, Navigation]} 
        className="mySwiper select-none 2xl:w-[800px] xl:w-[800px] lg:w-[700px] md:w-[600px] sm:w-[550px] xs:w-[400px] ms:w-[100px] bg-slate-300 rounded-xl">
            {
                data?.images?.map((url, inx)=> (
                <SwiperSlide key={inx}>
                <div className='relative w-full h-[450px] flex items-center justify-center'>
                    <div className="w-96 h-96">
                      <img className='w-full h-full object-contain' src={url} alt="" />
                    </div>
                </div>
                </SwiperSlide>
                ))
            }
            <div className="border w-full text-center p-4 flex flex-wrap flex-col items-center gap-2">
                <p className='font-bold text-[18px]'>{data.description}</p>
                <p className='text-red-600 font-bold'>PRICE:  {data.price}💲</p>
                <div>
                  <span>DiscountPercentage: {data.discountPercentage} %</span> <span className='pl-10'>Stock:{data.stock} ✅</span>
                </div>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Buy Now
                  </span>
                </button>
            </div>
    </Swiper>
  )
}

export default ImageView