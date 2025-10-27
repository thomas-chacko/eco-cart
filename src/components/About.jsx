import { forwardRef } from 'react'

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full bg-white py-20"
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Toothbrush landing spot */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-96 h-96 relative">
              {/* Placeholder that matches toothbrush position */}
              <div className="absolute inset-0 border-4 border-dashed border-green-300 rounded-full flex items-center justify-center">
                <p className="text-green-600 font-semibold text-center">
                  Toothbrush lands here
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-green-600">Bamboo?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Bamboo toothbrushes are a sustainable alternative to plastic toothbrushes. 
              Made from 100% biodegradable bamboo, they help reduce plastic waste in our oceans and landfills.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our bamboo is sustainably sourced and naturally antimicrobial, making it the perfect 
              material for oral care. Each toothbrush is carefully crafted to provide the same 
              cleaning power as traditional toothbrushes.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✓</span>
                <span className="text-lg">100% biodegradable and eco-friendly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✓</span>
                <span className="text-lg">Naturally antimicrobial bamboo handle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✓</span>
                <span className="text-lg">Soft BPA-free bristles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✓</span>
                <span className="text-lg">Reduces plastic waste significantly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About
