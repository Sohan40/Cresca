import React from 'react'
import Image from 'next/image'
const FeatureCard = () => {
  return (
    <div className='flex flex-row '>
        <div className='w-1/2'>
            <Image src="/next.svg" alt="feature-1" width={500} height={500} />
        </div>
        <div className='w-1/2 p-30'>
            <div className='flex flex-col gap-2 justify-center'>
                <h3 className='text-2xl font-bold'>AI-based recommendations.</h3>
                <p className='text-gray-500'>Our advanced AI matches your startup with top candidates, saving hours of manual screening.</p>
            </div>
                
        </div>
    </div>
  )
}

export default FeatureCard