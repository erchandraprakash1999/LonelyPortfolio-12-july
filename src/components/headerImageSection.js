import React from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa';
import { headerSection } from '../data';
import { Link } from 'react-scroll';
 export default function HeaderImageSection() {
  return (
    <div>
      <section className={`flex flex-col items-center justify-center h-[75vh] text-white `} style={{background:`url(${window.location.origin+headerSection.image})`}}>
    <p className='text-5xl font-bold '>{headerSection.title}</p>
        <p className=" text-3xl">{headerSection.description}</p>
       <div className='hover:text-pink-500 mt-2  top-0 hover:top-2 transition-[top] '><Link  to="about" smooth duration={100}><FaAngleDoubleDown  fontSize={70} /></Link></div> 
    </section>
    </div>
  )
}
