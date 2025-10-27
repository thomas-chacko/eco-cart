import { forwardRef } from 'react'

const Hero = forwardRef(({ toothbrushRef }, ref) => {
  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-gradient-to-r from-amber-50 via-orange-50 to-emerald-100 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto h-full flex items-center px-8 lg:px-16">
        {/* Left Side - Text Content */}
        <div className="z-10 max-w-xl">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Bamboo
            <br />
            <span className="text-green-700">Toothbrushes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Eco-friendly, sustainable, and gentle on your teeth. Make the switch to bamboo and help save our planet.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Shop Now
          </button>
        </div>

        {/* Right Side - Bamboo Toothbrush Image */}
        <div
          ref={toothbrushRef}
          className="absolute right-[10%] top-[15%] z-50"
        >
          <div className="relative w-[500px] h-[500px]">
            {/* Placeholder for bamboo toothbrush image */}
            <div className="w-full h-full flex items-center justify-center">
              {/* You can replace this with an actual image */}
              <div className="relative">
                {/* Toothbrush handle */}
                <div className="w-12 h-80 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full transform rotate-45 shadow-2xl">
                  {/* Bristles */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-20 bg-white rounded-t-full opacity-90"></div>
                </div>
                {/* Decorative loofah */}
                <div className="absolute -left-20 top-20 w-32 h-32 bg-amber-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
