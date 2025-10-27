import { useState, useEffect } from 'react'
import logoImage from '../assets/logo.png'

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        // GSAP animation can be added here
    }, [])

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-lg"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-400 rounded-full blur-2xl"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-50 px-6 py-4 lg:px-12">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-16 h-16">
                            <img
                                src={logoImage}
                                alt="Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-green-300 transition-colors duration-300 font-medium">Home</a>
                        <a href="#about" className="text-white hover:text-green-300 transition-colors duration-300 font-medium">About</a>
                        <a href="#products" className="text-white hover:text-green-300 transition-colors duration-300 font-medium">Products</a>
                        <a href="#contact" className="text-white hover:text-green-300 transition-colors duration-300 font-medium">Contact</a>
                        <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                            Shop Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-emerald-900 bg-opacity-95 backdrop-blur-sm border-t border-green-700">
                        <div className="px-6 py-4 space-y-4">
                            <a href="#home" className="block text-white hover:text-green-300 transition-colors duration-300">Home</a>
                            <a href="#about" className="block text-white hover:text-green-300 transition-colors duration-300">About</a>
                            <a href="#products" className="block text-white hover:text-green-300 transition-colors duration-300">Products</a>
                            <a href="#contact" className="block text-white hover:text-green-300 transition-colors duration-300">Contact</a>
                            <button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 cursor-pointer">
                                Shop Now
                            </button>
                        </div>
                    </div>
                )}


            </nav>

            {/* Hero Content */}
            <div className="relative z-10 px-6 lg:px-12 pt-20 pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Shop
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                                    Sustainably
                                </span>
                            </h1>
                            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-lg">
                                Discover eco-friendly products that make a difference. Join the green revolution and shop with purpose for a better tomorrow.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg cursor-pointer">
                                    Explore Products
                                </button>
                                <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full hover:bg-green-400 hover:text-white transition-all duration-300 font-semibold text-lg cursor-pointer">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <div className="relative">
                            <div className="relative z-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-white rounded-2xl p-6 text-center">
                                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                                        <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">100% Eco-Friendly</h3>
                                    <p className="text-gray-600">Sustainable products for a greener future</p>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
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