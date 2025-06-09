import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* How it Works Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            How Cresca Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                1. Post a Job
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Quickly publish a role your startup needs, targeting exactly who you&apos;re searching for.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                2. Get AI-Matched Candidates
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Instantly see a shortlist ranked with the most relevant profiles, powered by Cresca&apos;s proprietary AI.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                3. Hire Faster
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Streamline interviews and onboarding on our modern platform, cutting days off your hiring process.
              </p>
            </div>
          </div>
        </div>

        {/* For Startups Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            For Startups
          </h2>
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Cresca helps early-stage startups access pre-vetted, high-quality candidates fast. Reduce manual workload, cut hiring time, and build your dream team with less hassle.
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Our platform keeps the hiring loop simple, supported by actionable insights and an onboarding dashboard tailored for growing startups.
            </p>
          </div>
        </div>

        {/* For Candidates Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            For Candidates
          </h2>
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Discover roles at innovative startups. Our AI matches your skills and preferences, bringing you relevant opportunities—not just listings.
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Easily track applications, connect directly with founders, and find your next great adventure in tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 