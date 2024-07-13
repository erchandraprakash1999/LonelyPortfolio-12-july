import React, { useState } from 'react'
import { IoIosLink, IoMdAdd } from 'react-icons/io'
import { filterImages } from '../data';
export default function PortfolioImage() {
    const [active,setActive] = useState('all');

    function handleTab(val){
        setActive(val);
    }
  return (
    <div>
      <section id="portfolio" className="portfolio section-bg bg-[linear-gradient(180deg,#f2f6f9,#fff)]">
        <div className="container mx-auto p-5 sm:p-8  rounded-lg ">
            <div className=" mb-8">
                <h2 className="text-4xl font-bold text-[#345676] pb-3 border-b-4 border-pink-500 w-min">{filterImages.title}</h2>
                <p className="mt-2 text-xl text-gray-600">{filterImages.description}</p>
            </div>

            <div className="flex justify-center mb-8 bg-white py-3 px-4 rounded-full w-min mx-auto">
                <ul id="portfolio-filters" className="flex gap-6">
                    <li className={`${active==='all'?'text-pink-700':''} cursor-pointer`} onClick={()=>handleTab('all')}>All</li>
                    <li className={`${active==='app'?'text-pink-700':''} cursor-pointer`} onClick={()=>handleTab('app')}>App</li>
                    <li className={`${active==='card'?'text-pink-700':''} cursor-pointer`} onClick={()=>handleTab('card')}>Card</li>
                    <li className={`${active==='web'?'text-pink-700':''} cursor-pointer`} onClick={()=>handleTab('web')}>Web</li>
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
    </div>
  )
}
