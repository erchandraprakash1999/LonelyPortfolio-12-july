import React, { useEffect, useState } from 'react'
import colors from 'tailwindcss/colors';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AnimatedProgressBar({ k, val, theme }) {
        const [progress, setProgress] = useState(0);
        useEffect(() => {
                AOS.init();
                const interval = setInterval(() => {
                
                        setProgress((prevpro) => (prevpro >= val ? val : prevpro + 15))
                }, 100)
                return () => clearInterval(interval);
        }, [val])
        return (
                <div className=' rounded-md ' data-aos="flip-left"data-aos-easing="linear"
                data-aos-duration="1500">
                        <div className="flex justify-between  py-5 font-bold">
                                <span className="text-gray-600 uppercase">{k}</span>
                                <span className="text-gray-600">{progress}%</span>
                        </div>
                        <div className="w-full bg-pink-200 rounded-full h-1.5" style={{ backgroundColor: colors[theme][200] }}>
                                <div className=" h-1.5 rounded-full transition-[width] duration-500" style={{ width: `${progress}%`, backgroundColor: colors[theme][500] }}></div>
                        </div>
                </div>
        )
}
