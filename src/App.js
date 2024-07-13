import React from 'react'
import './portfolio.css'
import { FaAngleDoubleDown } from 'react-icons/fa';
import { CiFaceSmile } from 'react-icons/ci';
import { CgNotes } from 'react-icons/cg';
import AnimatedProgressBar from './components/AnimatedProgressBar';
import Resume from './components/Resume';
import Services from './components/Services';
import PortfolioImage from './components/PortfolioImage';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Contact';
function App() {
        const skills = [
                {key:"HTML",value:100},
                {key:"CSS",value:90},
                {key:"JavaScript",value:75},
                {key:"Php",value:80},
                {key:"WordPress/CMS",value:90},
                {key:"Photoshop",value:55},
        ]
  return (
    <>
    <section className={`flex flex-col items-center justify-center h-[75vh] text-white bg-[url(http://${window.location.host}/image/hero-bg.jpg)]`}>
    <p className='text-5xl font-bold '>Hi, I'm Alice!</p>
        <p className=" text-3xl">I am a graphic designer</p>
        <a href="#about" className='hover:text-pink-500 mt-2 relative top-0 hover:top-2 transition-[top] dura'><FaAngleDoubleDown  fontSize={70} /></a>
    </section>
    <header>
        <nav className=' h-[70px] shadow-lg '>
                <div className="flex justify-between items-center w-[85%] h-full mx-auto ">
                <div className=" uppercase text-4xl font-semibold">
                        Lonely
                </div>
                <div className='h-min font-sans '>
                        <ul className=' list-none flex gap-6 '>
                                <li className=" text-lg text-pink-600">Home</li>
                                <li className=" text-lg text-gray-800 hover:text-pink-600">About</li>
                                <li className=" text-lg text-gray-800 hover:text-pink-600">Resume</li>
                                <li className=" text-lg text-gray-800 hover:text-pink-600">Services</li>
                                <li className=" text-lg text-gray-800 hover:text-pink-600">Portfolio</li>
                                <li className=" text-lg text-gray-800 hover:text-pink-600">Drop Down</li>
                                <li className=" text-lg text-gray-800 hover:text-pink-600">Contact</li>
                        </ul>
                </div>
                </div>
        </nav>
    </header>

    <main>
    <div className="flex flex-col md:flex-row items-center gap-6 justify-center p-8 w-[90%] mx-auto m-6">
        <div className="w-full md:w-[45%] p-4">
            <img src="./image/girlCall.jpg" alt="Woman on Phone" className="rounded"/>
        </div>
        <div className="w-full md:w-[60%] p-4">
            <h1 className="text-5xl font-semibold mb-4">Voluptatem dignissimos provident quasi</h1>
            <p className="text-gray-600 mb-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.</p>
            <div className="grid grid-cols-2 gap-8">
                <div className='flex'>
                        <div className='text-pink-500 px-2'>
                                <CiFaceSmile fontSize={55}/>
                        </div>
                        <div className='text-gray-600'>
                                <div className=" text-5xl font-bold  mb-2">65</div>
                                <p ><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                        </div>
                </div>
                <div className='flex'>
                        <div className='text-pink-500 px-2'>
                                <CgNotes fontSize={55}/>
                        </div>
                        <div className='text-gray-600'>
                                <div className=" text-5xl font-bold  mb-2">85</div>
                                <p ><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                        </div>
                </div>
                <div className='flex'>
                        <div className='text-pink-500 px-2'>
                                <CiFaceSmile fontSize={55}/>
                        </div>
                        <div className='text-gray-600'>
                                <div className=" text-5xl font-bold  mb-2">12</div>
                                <p ><strong>Years of experience</strong>  aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                        </div>
                </div>
                <div className='flex'>
                        <div className='text-pink-500 px-2'>
                                <CgNotes fontSize={55}/>
                        </div>
                        <div className='text-gray-600'>
                                <div className=" text-5xl font-bold  mb-2">15</div>
                                <p ><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                        </div>
                </div>
             
            </div>
        </div>
    </div>
    </main>

    <div className=" mx-auto p-8  bg-[linear-gradient(#e5e7eb,white)]">
        <div className="w-[90%] mx-auto">
        <div className="">
            <h2 className="text-5xl font-bold pb-3 border-b-4 border-pink-500 w-min">Skills</h2>
            <p className="text-gray-600 mt-4 text-xl">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className=" grid grid-cols-2 gap-6">
                {skills.map(({key,value},index)=>{
                        return <AnimatedProgressBar k={key} val={value} key={index}/>
                })}
        </div>
        </div>
    </div>

    <Resume/>
    <Services/>
    <PortfolioImage/>
    <Testimonials/>
    <ContactForm/>
    </>
  )
}
export default App;