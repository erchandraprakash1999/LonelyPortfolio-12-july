import React from 'react'
import { services } from '../data'
import colors from 'tailwindcss/colors';
import ServiceItem from './ServiceItem';
import { Element } from 'react-scroll';

export default function Services({theme}) {
  return (
    <>
    <Element name='services'> <div className="pb-16"></div> </Element>
    <div className='bg-[linear-gradient(180deg,#f2f6f9,#fff)] font-ChakraPetch'>
       <div className="container mx-auto px-4 py-6">
        <section className=" mb-8">
            <h2 className="text-4xl font-bold text-gray-900 pb-3 border-b-4 w-min font-RobotoSlab" style={{borderColor:colors[theme][800]}}>{services.title}</h2>
            <p className="mt-2 text-xl text-gray-600 font-Poppins">{services.description}</p>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xl text-center ">
            {
                services.itemList.map((item,index)=>{
                    return <ServiceItem item={item} key={index} theme={theme}/>
                })
            }
        </div>
    </div>
    </div>
    </>
  )
}
