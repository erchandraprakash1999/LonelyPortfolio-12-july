import React from 'react'
import AnimatedProgressBar from './AnimatedProgressBar';
import { skills } from '../data';
import colors from 'tailwindcss/colors';
import { Element } from 'react-scroll';
export default function Skills({theme}) {
  return (
    <>
    <Element name='skills'> <div className="pb-16"></div> </Element>
      <div className=" mx-auto  bg-[linear-gradient(#e5e7eb,white)] font-ChakraPetch">
        <div className="container mx-auto px-4 py-6">
        <div className="">
            <h2 className="text-4xl font-bold text-gray-900 pb-3 border-b-4 w-min font-RobotoSlab" style={{borderColor:colors[theme][800]}}>{skills.title}</h2>
            <p className="text-gray-600 mt-4 text-xl">{skills.description}</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.progressBars.map(({key,value},index)=>{
                        return <AnimatedProgressBar k={key} val={value} key={index} theme={theme}/>
                })}
        </div>
        </div>
    </div>
    </>
  )
}
