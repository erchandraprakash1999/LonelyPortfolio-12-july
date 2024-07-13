import React from 'react'
import { navbar } from '../data'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll'
export default function Navigation() {
  return (
    <div>
      <header>
        <nav className=' h-[70px] shadow-lg '>
                <div className="flex justify-between items-center w-[85%] h-full mx-auto ">
                <div className=" uppercase text-4xl font-semibold">
                        {navbar.name}
                </div>
                <div className='h-min font-sans hidden lg:block'>
                        <ul className=' list-none flex gap-6 '>
                                {navbar.navitem.map((item,i)=>{
                                return <li className=' capitalize cursor-pointer'><Link to={item} smooth duration={100}>{item}</Link></li>
                                })  }                              
                        </ul>
                </div>
                 <button className='px-3 py-1 border-2 border-gray-600 lg:hidden block'>  <GiHamburgerMenu fontSize={25}/></button>
                </div>
        </nav>
    </header>
    </div>
  )
}
