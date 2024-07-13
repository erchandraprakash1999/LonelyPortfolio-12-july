import React from 'react'
import { about } from '../data'
export default function About() {
  return (
    <>
      <main >
    <div id='about' className="flex flex-col lg:flex-row items-center gap-6 justify-center p-4 sm:p-8 w-[90%] mx-auto m-6 ">
        <div className="w-full lg:w-[45%] ">
            <img src={about.image} alt="Woman on Phone" className="rounded"/>
        </div>
        <div className="w-full lg:w-[60%] ">
            <h1 className= " text-3xl md:text-5xl font-semibold mb-4">{about.title}</h1>
            <p className="text-gray-600 mb-8 text-lg">{about.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {about.subItem.map((item,index)=>{
                        return <div className='flex' key={index}>
                        <div className='text-pink-500 px-2'>
                                {item.icons}
                        </div>
                        <div className='text-gray-600'>
                                <div className=" text-5xl font-bold  mb-2">{item.value}</div>
                                <p ><strong>{item.strong}</strong>{item.text} </p>
                        </div>
                </div>})}
            </div>
        </div>
    </div>
    </main>
    </>
  )
}
