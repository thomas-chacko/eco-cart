import { useState, useEffect } from 'react'
import logoImage from '../assets/logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            const headerHeight = 100
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            })
        }
        setIsMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'bg-emerald-900/95 backdrop-blur-md border-b border-green-700/30 shadow-lg py-2'
                : 'bg-transparent py-4'
            }`}>
            <nav className="px-6 lg:px-12 transition-all duration-300">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'w-28 h-12' : 'w-36 h-14'
                            }`}>
                            <img
                                src={logoImage}
                                alt="Logo"
                                className="w-full h-full object-contain transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, 'home')}
                            className="text-white hover:text-green-300 transition-all duration-300 font-medium relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, 'about')}
                            className="text-white hover:text-green-300 transition-all duration-300 font-medium relative group"
                        >
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#products"
                            onClick={(e) => handleNavClick(e, 'products')}
                            className="text-white hover:text-green-300 transition-all duration-300 font-medium relative group"
                        >
                            Products
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="text-white hover:text-green-300 transition-all duration-300 font-medium relative group"
                        >
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
                        </a>
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
                <div className={`md:hidden absolute top-full left-0 right-0 bg-emerald-900 bg-opacity-95 backdrop-blur-sm border-t border-green-700 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-6 py-4 space-y-4">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, 'home')}
                            className="block text-white hover:text-green-300 transition-all duration-300 transform hover:translate-x-2"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, 'about')}
                            className="block text-white hover:text-green-300 transition-all duration-300 transform hover:translate-x-2"
                        >
                            About
                        </a>
                        <a
                            href="#products"
                            onClick={(e) => handleNavClick(e, 'products')}
                            className="block text-white hover:text-green-300 transition-all duration-300 transform hover:translate-x-2"
                        >
                            Products
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="block text-white hover:text-green-300 transition-all duration-300 transform hover:translate-x-2"
                        >
                            Contact
                        </a>
                        <button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            Shop Now
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header