import React from 'react'
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

const Home = () => {
  return (
    <div className=''>
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
    </div>
  )
}

export default Home