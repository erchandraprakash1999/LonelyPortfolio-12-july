import React, { useState } from 'react'
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
  const [theme,setTheme] = useState('pink');
  const handleTheme = (e)=>{
    setTheme(e.target.value);
  }
  return (
    <div className='relative'>
    <Element name="home" >
    </Element>
    <HeaderImageSection theme={theme}/>

 <Navigation theme={theme} handleTheme={handleTheme} />
   <About theme={theme} />
   <Skills theme={theme}/>
    <Resume theme={theme}/>
    <Services theme={theme}/>
   <PortfolioImage theme={theme}/>
    <Testimonials theme={theme}/>
    <ContactForm theme={theme}/>
    </div>
  )
}
export default App;