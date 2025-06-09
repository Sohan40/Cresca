import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  const features = [
    {
      image: "/AI_MATCHING.png",
      title: "AI-Powered Matching",
      description: "Our advanced AI matches your startup with top candidates, saving hours of manual screening."
    },
    {
      image: "/Insights.png",
      title: "Smart Analytics",
      description: "Get detailed insights and analytics to make data-driven hiring decisions."
    },
    {
      image: "/Interview.png",
      title: "Automated Interviews",
      description: "Streamline your interview process with our automated scheduling and assessment tools."
    }
  ]

  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Features</h2>
        <div className='flex flex-col gap-12 md:gap-16'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features