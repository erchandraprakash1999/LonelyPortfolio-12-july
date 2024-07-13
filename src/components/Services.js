import React from 'react'
import { services } from '../data'

export default function Services() {
  return (
    <div className='bg-[linear-gradient(180deg,#f2f6f9,#fff)] '>
       <div className="mx-auto p-5 xl:p-8 rounded-lg w-[90%]">
        <section className=" mb-8">
            <h2 className="text-4xl font-bold text-gray-900 pb-3 border-b-4 border-pink-500 w-min">{services.title}</h2>
            <p className="mt-2 text-xl text-gray-600">{services.description}</p>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xl text-center ">
            {
                services.itemList.map((item,index)=>{return <div className="bg-white p-6 rounded-lg shadow-md group  hover:bg-pink-600 transition-[background-color]  " key={index}>
                    <div className="flex justify-center mb-4">
                        <div className="bg-pink-500 group-hover:bg-white p-3 rounded-full mb-5 text-white group-hover:text-pink-600">
                           {item.icon}
                        </div>
                    </div>
                    <h3 className=" mb-5 text-2xl font-semibold text-gray-900  group-hover:text-white">{item.itemhead}</h3>
                    <p className="mt-2 text-gray-600 group-hover:text-slate-100">{item.itemtext}</p>
                </div>})
            }
        </div>
    </div>
    </div>
  )
}
