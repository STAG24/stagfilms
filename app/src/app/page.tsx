import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Slideshow from '@/components/Slideshow'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <Hero />
      <Slideshow />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
