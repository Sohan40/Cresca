import React from 'react'
import Image from 'next/image'

const HeaderComponent = () => {
  return (
    <div className='flex flex-row w-full px-6 py-4 '>
      <div className='w-1/3 max-sm-864:w-1/2'>
        <Image
          src="/next.svg"
          alt="Logo"
          width={100}
          height={100}
          className="hover:opacity-80 transition-opacity duration-200"
        />
      </div>
      
      <div className="w-1/3 flex justify-center items-center text-center gap-4 max-sm-864:hidden">
          <div className="flex justify-center items-center text-center">
            <button 
              type='button' 
              className='bg-gray-100 hover:bg-gray-200 text-gray-800 shrink-0 rounded-2xl px-4 py-2 font-medium transition-all duration-200 ease-in-out transform hover:scale-105'
            >
              How it works
            </button>
          </div>
          <div className="flex justify-center items-center text-center">
            <button 
              type='button'
              className='bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-2xl px-4 py-2 font-medium transition-all duration-200 ease-in-out transform hover:scale-105'
            >
              Features
            </button>
          </div>
      </div>

      <div className="w-1/3 max-sm-864:w-1/2 flex justify-end items-center">
        <button 
          type='button'
          className='bg-black shrink-0 hover:bg-gray-800 text-white rounded-full px-6 py-2 font-medium transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg'
        >
          Get Early Access
        </button>
      </div>
    </div>
  )
}

export default HeaderComponent