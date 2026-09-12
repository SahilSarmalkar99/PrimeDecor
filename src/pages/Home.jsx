import React from 'react'
import useTextReveal from '../hooks/useTextReveal'
import Hero from '../components/home/Hero'
import BeliefSection from '../components/home/BeliefSection'
import BrandSection from '../components/home/BrandSection'
import BrandCarousel from '../components/home/BrandCarousel'
import ProjectsSection from '../components/home/ProjectsSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import ShowreelSection from '../components/home/ShowreelSection'
import Testimonials from '../components/home/Testimonials'
import BlogSection from '../components/home/BlogSection'
import FAQSection from '../components/home/FAQSection'
import NextChapter from '../components/home/NextChapter'
import Footer from '../components/home/Footer'

const Home = () => {
  const textRevealRef = useTextReveal({
    duration: 1.15,
    stagger: 0.045,
    ease: 'power4.out',
    start: 'top 86%',
  })

  return (
    <div ref={textRevealRef} className=''>
      <Hero />
      <BeliefSection />
      <BrandSection />
      <BrandCarousel />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <ShowreelSection />
      <Testimonials />
      <BlogSection />
      <FAQSection />
      <NextChapter />
      <Footer />
    </div>
  )
}

export default Home