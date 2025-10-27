import { useEffect } from 'react'
import image from "../assets/banner.png"

const Hero = () => {
    useEffect(() => {
        // Component initialization
    }, [])

    return (
        <section id="home" className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden pt-28">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-lg"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-400 rounded-full blur-2xl"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 px-6 lg:px-12 pt-20 pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Eco Care for
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                                    Everyday Life
                                </span>
                            </h1>
                            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-lg">
                                Discover eco-friendly products that make a difference. Join the green revolution and shop with purpose for a better tomorrow.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform font-semibold text-lg cursor-pointer">
                                    Explore Products
                                </button>
                                <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full hover:bg-green-400 hover:text-white transition-all duration-300 font-semibold text-lg cursor-pointer">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Empty for now */}
                        <div className="relative">
                            <img src={image} alt="image" className='w-fit' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}

export default Hero