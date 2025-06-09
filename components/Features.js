import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div className='flex flex-col gap-4'>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
    </div>
  )
}

export default Features