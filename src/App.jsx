import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const toothbrushRef = useRef(null)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Toothbrush scroll animation from Hero to About
      gsap.to(toothbrushRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
        x: '-60vw',
        y: '100vh',
        rotation: -45,
        scale: 1.2,
        ease: 'none',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Hero ref={heroRef} toothbrushRef={toothbrushRef} />
      <About ref={aboutRef} />
      <Products/>
    </div>
  )
}

export default App