import React from 'react'
import AnimatedProgressBar from './AnimatedProgressBar';
import { skills } from '../data';
export default function Skills() {
  return (
    <>
      <div className=" mx-auto px-5 sm:px-8  py-9 bg-[linear-gradient(#e5e7eb,white)]">
        <div className="w-[90%] mx-auto">
        <div className="">
            <h2 className="text-4xl font-bold text-gray-900 pb-3 border-b-4 border-pink-500 w-min">{skills.title}</h2>
            <p className="text-gray-600 mt-4 text-xl">{skills.description}</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.progressBars.map(({key,value},index)=>{
                        return <AnimatedProgressBar k={key} val={value} key={index}/>
                })}
        </div>
        </div>
    </div>
    </>
  )
}
