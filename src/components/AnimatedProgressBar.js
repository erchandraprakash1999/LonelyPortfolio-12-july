import React, { useEffect, useState } from 'react'

export default function AnimatedProgressBar({k,val}) {
        const [progress,setProgress] = useState(0);
        useEffect(()=>{
                const interval = setInterval(()=>{
                        setProgress((prevpro)=> (prevpro>= val ? val : prevpro+15 ))
                },100)
                return ()=> clearInterval(interval);
        },[])
  return (
    <div className=' rounded-md'>
    <div class="flex justify-between  py-5 font-bold">
                    <span class="text-gray-600 uppercase">{k}</span>
                    <span class="text-gray-600">{progress}%</span>
        </div>
      <div class="w-full bg-pink-200 rounded-full h-1.5">
                    <div class="bg-pink-500 h-1.5 rounded-full transition-[width] duration-500" style={{width:`${progress}%`}}></div>
                </div>
    </div>
  )
}
