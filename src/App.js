import React from 'react'
import './portfolio.css'

import Resume from './components/Resume';
import Services from './components/Services';
import PortfolioImage from './components/PortfolioImage';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Contact';
import HeaderImageSection from './components/headerImageSection';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import About from './components/About';
import { Element } from 'react-scroll';
function App() {
  return (
    <div className='relative'>
    <Element name='home'>
    <HeaderImageSection />
    </Element>

 <Navigation />
    <Element name="about"><About /></Element>
    <Element name="skills"><Skills /></Element>
    <Element name="resume"><Resume/></Element>
    <Element name="services"><Services/></Element>
    <Element name="portfolio"><PortfolioImage/></Element>
    <Element name="testimonials"><Testimonials/></Element>
    <Element name="contact"><ContactForm/></Element>
    </div>
  )
}
export default App;