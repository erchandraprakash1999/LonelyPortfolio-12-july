import React, { useEffect } from 'react'
import { about } from '../data'
import colors from 'tailwindcss/colors';
import { Element } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import PortFolioActions from '../RequestServices/PortFolioActions';

export default function About({theme}) {
  const {portfolio} = useSelector((store)=>store)
  const data = portfolio.about?.data;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(PortFolioActions.aboutapi())
  },[])
  return (
    <>
      <Element name='about'> <div className="pb-16"></div> </Element>
      <main >
    <div id='about' className="flex flex-col lg:flex-row items-center gap-6 justify-center container mx-auto px-4 py-6 font-ChakraPetch">
        <div className="w-full lg:w-[45%] ">
            <img src={data?.image} alt="Woman on Phone" className="rounded"/>
        </div>
        <div className="w-full lg:w-[60%] ">
            <h1 className= " text-3xl md:text-5xl font-semibold mb-4 font-RobotoSlab " style={{color:colors[theme][700]}}>{data?.title}</h1>
            <p className="text-gray-600 mb-8 text-lg" dangerouslySetInnerHTML={{__html:data?.description}}></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data?.items.map((item,index)=>{
                        return <div className='flex' key={index}>
                        <div className=' px-2' style={{color:colors[theme][600]}}>
                                {item.icons}
                        </div>
                        <div className='text-gray-600'>
                                <div className=" text-5xl font-bold  mb-2">{item.number}</div>
                                <p ><strong>{item.text}</strong></p>
                        </div>
                </div>})}
            </div>
        </div>
    </div>
    </main>
    </>
  )
}
