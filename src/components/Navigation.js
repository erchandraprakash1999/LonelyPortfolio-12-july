import React from 'react'
import { navbar } from '../data'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll'
import { CgClose } from 'react-icons/cg';
import colors from 'tailwindcss/colors';
import ThemeSetter from './ThemeSetter';
export default function Navigation({theme,handleTheme}) {
        const [activeNav, setActiveNav] = React.useState(false);
        const handleCloseNav =()=>{
                setActiveNav(!activeNav);
        }
  return (
    <>
    <ul className={` list-none bg-white flex gap-6 flex-col absolute z-50 top-0 left-0 h-[75vh] justify-center items-center w-full  text-black ${activeNav?'block':'hidden'} `}>
        <button onClick={handleCloseNav}  className=' float-right'><CgClose fontSize={30}/></button>
                                {navbar.navitem.map((item,i)=>{
                                return <li className='hover:bg-gray-300 capitalize cursor-pointer font-bold'><Link to={item} smooth duration={100}>{item}</Link></li>
                                })  }       
                                <ThemeSetter handleTheme={handleTheme}/>                          
        </ul>
      <header className='sticky top-0  z-30  text-white' style={{backgroundColor:colors[theme][400]}}>
        <nav className=' h-[70px] shadow-lg  '>
                <div className="flex justify-between items-center w-[85%] h-full mx-auto ">
                <div className=" uppercase text-4xl font-semibold">
                        {navbar.name}
                </div>
                <div className='h-min font-sans hidden lg:block'>
                        <ul className=' list-none flex items-center gap-6  '>
                                {navbar.navitem.map((item,i)=>{
                                return <li className=' capitalize cursor-pointer font-bold h-min'><Link to={item} className='' smooth duration={100}>{item}</Link></li>
                                })  }         
                                <ThemeSetter handleTheme={handleTheme}/>             
                        </ul>
                        
                </div>
                 <button className='px-3 py-1  lg:hidden block' onClick={()=>setActiveNav(true)}>  <GiHamburgerMenu fontSize={30}/></button>
                </div>
        </nav>
    </header>
    </>
  )
}
