import React from 'react'
import Image from 'next/image'

const FeatureCard = ({ image, title, description, isReversed }) => {
  return (
    <div className='flex flex-col md:flex-row gap-8 items-center'>
      <div className={`w-full md:w-1/2 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className={`w-full md:w-1/2 p-4 md:p-8 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
        <div className='flex flex-col gap-4 justify-center text-center md:text-left'>
          <h3 className='text-2xl md:text-3xl font-bold'>{title}</h3>
          <p className='text-gray-600 text-sm md:text-base'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard