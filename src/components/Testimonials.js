import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '../data';
export default function Testimonials() {
    const settings = {
        infinite:true,
        arrows:false,
        slidesToShow:3,
        slidesToScroll:1,
        dots:true,
        autoplay:true,
        speed:3000
      }
    
  return (
    <div className=' bg-[linear-gradient(180deg,#f2f6f9,#fff)] p-8'>
      <section id="testimonials" className=" py-12">
        <div className="container mx-auto">
            <div className=" mb-12">
                <h2 className="text-4xl font-bold text-[#345676] pb-3 border-b-4 border-pink-500 w-min">{testimonials.title}</h2>
                <p className="mt-2 text-xl text-gray-600">{testimonials.description}</p>
            </div>
            <div className=" space-x-5">
  <Slider {...settings}  responsive={[{breakpoint:600,settings:{slidesToShow:1}},{breakpoint:1024,settings:{slidesToShow:2},}]} >
                {testimonials.Reviews.map((review,idx) =>{return <div className="bg-white p-6 rounded-lg shadow-lg text-center relative mb-36 pb-16 " key={idx} >
                    <p className=" text-xl mb-4 text-gray-600 italic">{review.feedback}</p>
                    <div className="absolute -bottom-32">
                    <img src={review.image} className="w-28 h-28 rounded-full mx-auto mb-4 border-8 border-white" alt="Jena Karlis"/>
                    <h4 className="text-xl font-semibold text-gray-900">{review.Clientname}</h4>
                    <p className="text-gray-600">{review.proffession}</p>
                    </div>
                </div>})}
            </Slider>

            </div>
        </div>
    </section>
    </div>
  )
}
