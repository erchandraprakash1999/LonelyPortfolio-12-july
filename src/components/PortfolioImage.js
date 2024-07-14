import React, { useState } from 'react'
import { IoIosLink, IoMdAdd } from 'react-icons/io'
import { filterImages } from '../data';
import colors from 'tailwindcss/colors';
import { Element } from 'react-scroll';
export default function PortfolioImage({theme}) {
    const [active,setActive] = useState('all');

    function handleTab(val){
        setActive(val);
    }
  return (
    <>
        <Element name='portfolio'> <div className="pb-16"></div> </Element>
      <section id="portfolio" className="portfolio section-bg bg-[linear-gradient(180deg,#f2f6f9,#fff)]">
        <div className="container mx-auto p-5 sm:p-8  rounded-lg ">
            <div className=" mb-8">
                <h2 className="text-4xl font-bold text-[#345676] pb-3 border-b-4 w-min" style={{borderColor:colors[theme][800]}}>{filterImages.title}</h2>
                <p className="mt-2 text-xl text-gray-600">{filterImages.description}</p>
            </div>

            <div className="flex justify-center mb-8 bg-white py-3 px-4 rounded-full w-min mx-auto ">
                <ul id="portfolio-filters" className="flex gap-6 cursor-pointer">
                    <li  style={{color:active==='all'?colors[theme][500]:''}} onClick={()=>handleTab('all')}>All</li>
                    <li style={{color:active==='app'?colors[theme][500]:''}} onClick={()=>handleTab('app')}>App</li>
                    <li style={{color:active==='card'?colors[theme][500]:''}} onClick={()=>handleTab('card')}>Card</li>
                    <li style={{color:active==='web'?colors[theme][500]:''}} onClick={()=>handleTab('web')}>Web</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

                {filterImages.images.filter((e)=>{return active==='all'?true:e.name===active}).map((item,index)=>{
                    return <div className=" bg-white  rounded-lg shadow-md " key={index}>
                    <div className="relative group">
                        <div className=''>
                        <img src={item.link} alt="" />
                        </div>
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 w-full h-full bg-[#2c496499]  flex space-x-4 z-2 text-white flex-col gap-2 ">
                            <div className=' my-auto'>
                        <div className=" text-center">
                            <h4 className="text-xl font-semibold ">{item.name} {index}</h4>
                            <p className="mt-2 text-gray-100 uppercase">{item.name}</p>
                        </div>
                        <div className='flex justify-center'>
                            <span  ><IoMdAdd fontSize={30}/></span>
                            <span><IoIosLink fontSize={30}/></span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </div>
    </section>
    </>
  )
}
