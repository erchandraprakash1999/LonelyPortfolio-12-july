import React from 'react'
import { FaEarthAmericas } from 'react-icons/fa6'
import { GrNotes } from 'react-icons/gr'
import { IoBaseballOutline, IoBasketballOutline } from 'react-icons/io5'
import { MdSpeed } from 'react-icons/md'

export default function Services() {
  return (
    <div className='bg-[linear-gradient(180deg,#f2f6f9,#fff)] p-8'>
       <div class="mx-auto  p-8 rounded-lg w-[90%]">
        <section class=" mb-8">
            <h2 class="text-4xl font-bold text-gray-900 pb-3 border-b-4 border-pink-500 w-min">Services</h2>
            <p class="mt-2 text-xl text-gray-600">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </section>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xl text-center ">
            <div class="bg-white p-6 rounded-lg shadow-md group  hover:bg-pink-600 transition-[background-color]  ">
                <div class="flex justify-center mb-4">
                    <div class="bg-pink-500 group-hover:bg-white p-3 rounded-full mb-5 text-white group-hover:text-pink-600">
                       <IoBasketballOutline fontSize={45} />
                    </div>
                </div>
                <h3 class=" mb-5 text-2xl font-semibold text-gray-900  group-hover:text-white">Lorem Ipsum</h3>
                <p class="mt-2 text-gray-600 group-hover:text-slate-100">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md group  hover:bg-pink-600 transition-[background-color]">
                <div class="flex justify-center mb-4">
                <div class="bg-pink-500 p-3 rounded-full mb-5 text-white group-hover:text-pink-600 group-hover:bg-white">
                       <GrNotes fontSize={45} />
                    </div>
                </div>
                <h3 class=" mb-5 text-2xl font-semibold text-gray-900 group-hover:text-white ">Sed ut perspiciatis</h3>
                <p class="mt-2 text-gray-600 group-hover:text-slate-100">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md group  hover:bg-pink-600 transition-[background-color]">
                <div class="flex justify-center mb-4">
                <div class="bg-pink-500 p-3 rounded-full mb-5 text-white group-hover:text-pink-600 group-hover:bg-white">
                       <MdSpeed fontSize={45} />
                    </div>
                </div>
                <h3 class=" mb-5 text-2xl font-semibold text-gray-900 group-hover:text-white ">Magni Dolores</h3>
                <p class="mt-2 text-gray-600 group-hover:text-slate-100">Excepturi sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md group  hover:bg-pink-600 transition-[background-color]">
                <div class="flex justify-center mb-4">
                <div class="bg-pink-500 p-3 rounded-full mb-5 text-white group-hover:text-pink-600 group-hover:bg-white">
                       <FaEarthAmericas fontSize={45} />
                    </div>
                </div>
                <h3 class=" mb-5 text-2xl font-semibold text-gray-900 group-hover:text-white ">Nemo Enim</h3>
                <p class="mt-2 text-gray-600 group-hover:text-slate-100">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
        </div>
    </div>
    </div>
  )
}
