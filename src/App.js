import React, { useState, useEffect } from 'react'; 
import './portfolio.css';

import Resume from './components/Resume';
import Services from './components/Services';
import PortfolioImage from './components/PortfolioImage';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Contact';
import HeaderImageSection from './components/headerImageSection'; 
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import About from './components/About';
import { useSelector } from 'react-redux';

function App() {
  const { portfolio } = useSelector((store) => store);
  const data = portfolio.user?.data;
  const [theme, setTheme] = useState("pink"); 

  useEffect(() => {
    if (data) {
      setTheme(data.theme_color); 
    }
  }, [data]); 
  return (
    <div className='relative'>
      <HeaderImageSection theme={theme} />
      <Navigation theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Resume theme={theme} />
      <Services theme={theme} />
      <PortfolioImage theme={theme} />
      <Testimonials theme={theme} />
      <ContactForm theme={theme} />
    </div>
  );
}

export default App;
