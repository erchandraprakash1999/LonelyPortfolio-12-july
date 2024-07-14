import React from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa';
import { headerSection } from '../data';
import { Element, Link } from 'react-scroll';
import colors from 'tailwindcss/colors';

 export default function HeaderImageSection({theme}) {
  return (
    <>
        <Element name='home'>
      <section className={`flex flex-col items-center justify-center h-[75vh] text-white `} style={{background:`url(${window.location.origin+headerSection.image})`}}>
    <p className='text-5xl font-bold font-Agbalumo '>{headerSection.title}</p>
        <p className=" text-3xl font-ChakraPetch">{headerSection.description}</p>
       <div style={{color:colors[theme][400]}} className='hover:text-violet-50 mt-2 relative top-0 hover:top-2 transition-[top]' ><Link  to="about" smooth duration={100}><FaAngleDoubleDown  fontSize={70} /></Link></div>
    </section>
        </Element>
    </>
  )
}
