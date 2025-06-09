import React from 'react';
import Image from 'next/image';
import WaitlistForm from './WaitlistForm';

const Benefits = () => {
  const benefits = [
    {
      image: "/early-access.png",
      title: "Early Benefits",
      description: "Job seekers: Early access, profile priority, career guides. Companies: Hire first, low launch pricing, shape features."
    },
    {
      image: "/perks.png",
      title: "Universal Perks",
      description: "Beta testing, launch updates, and dedicated support for all waitlisters."
    },
    {
      image: "/security.png",
      title: "Zero Risk",
      description: "Free sign-up, no obligation, exclusive early adopter rewards."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Join the Waitlist</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
};

export default Benefits; 