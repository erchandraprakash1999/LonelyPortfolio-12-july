import React from 'react'

export default function Resume() {
  return (
    <>
      <div className=" mx-auto bg-[linear-gradient(180deg,#f2f6f9,#fff)] p-8 rounded-lg shadow-lg text-[#5a656e] text-xl">
        <div className="w-[90%] mx-auto">
        <header className="mb-8">
            <h1 className="text-4xl font-bold text-[#345676] pb-3 border-b-4 border-pink-500 w-min">Resume</h1>
            <p className="mt-2 text-gray-600 text-xl">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </header>
        <section className='flex gap-3'>
        <div className="w-[50%]">
        <div className="mb-6">
            <h2 className="text-3xl font-semibold text-[#4b7dab] mb-4">Summary</h2>
            <div className="  border-l-4 border-pink-500 pl-4 relative before:absolute before:top-0.5 before:content-[''] before:w-[16px] before:h-[16px]  before:rounded-full  before:left-[-10px]  before:bg-white  before:border-2  before:border-[#d43076]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 ">Alice Barkley</h3>
                <p className="text-gray-700 mb-4 italic ">Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                <ul className="text-gray-700 flex flex-col gap-2">
                    <li><p>Portland par 127, Orlando, FL</p></li>
                    <li><p>(123) 456-7891</p></li>
                    <li><p>alice.barkley@example.com</p></li>
                </ul>
            </div>
        </div>
        
        <div className="mb-6">
            <h2 className="text-3xl font-semibold text-[#4b7dab] mb-4 ">Education</h2>
            <div className="border-l-4 border-pink-500 pl-4 pb-4 relative before:absolute before:top-0.5 before:content-[''] before:w-[16px] before:h-[16px]  before:rounded-full  before:left-[-10px]  before:bg-white  before:border-2  before:border-[#d43076]">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#2c4964] mb-3">Master of Fine Arts & Graphic Design</h3>
                    <span className="text-gray-600 p-2 bg-[#e4ebf3] px-4 py-2 ">2015 - 2016</span>
                    <p className="text-gray-700 mt-2">Rochester Institute of Technology, Rochester, NY</p>
                    <p className="text-gray-600 mt-2">Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                </div>
                
            </div>
            <div className="border-l-4 border-pink-500 pl-4 relative before:absolute before:top-1 before:content-[''] before:w-[16px] before:h-[16px]  before:rounded-full  before:left-[-10px]  before:bg-white  before:border-2  before:border-[#d43076]">
            <div className='space-y-4'>
                    <h3 className="text-xl font-bold text-[#2c4964] mb-3">Bachelor of Fine Arts & Graphic Design</h3>
                    <span className="text-gray-600 bg-[#e4ebf3] px-4 py-2">2010 - 2014</span>
                    <p className="text-gray-700 mt-2">Rochester Institute of Technology, Rochester, NY</p>
                    <p className="text-gray-600 mt-2">Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                </div>
            </div>
        </div>
        </div>
        
        
        <div className='w-[50%]'>
            <h2 className="text-3xl font-semibold text-[#4b7dab] mb-4">Professional Experience</h2>
            <div className="border-l-4 border-pink-500 pl-4 relative before:absolute before:top-0.5 before:content-[''] before:w-[16px] before:h-[16px]  before:rounded-full  before:left-[-10px]  before:bg-white  before:border-2  before:border-[#d43076]">
                <div className="pb-4">
                    <h3 className="text-xl font-bold text-[#2c4964] mb-4">Senior Graphic Design Specialist</h3>
                    <span className="text-gray-600 bg-[#e4ebf3] px-4 py-2">2019 - Present</span>
                    <p className="text-gray-700 mt-2">Experion, New York, NY</p>
                    <ul className="text-gray-600 mt-2 list-disc flex flex-col gap-4 ml-6">
                        <li><p>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</p></li>
                        <li><p>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</p></li>
                        <li><p>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</p></li>
                        <li><p>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</p></li>
                    </ul>
                </div>
            </div>
                <div className="border-l-4 border-pink-500 pl-4 relative  before:absolute before:top-1  before:content-[''] before:w-[16px] before:h-[16px]  before:rounded-full  before:left-[-10px]  before:bg-white  before:border-2  before:border-[#d43076] pb-4">
                    <h3 className="text-xl font-bold text-[#2c4964] mb-4">Graphic Design Specialist</h3>
                    <span className="text-gray-600 bg-[#e4ebf3] px-4 py-2 ">2017 - 2018</span>
                    <p className="text-gray-700 mt-2">Stepping Stone Advertising, New York, NY</p>
                    <ul className="text-gray-600 mt-2 list-disc flex flex-col gap-4 ml-6">
                        <li><p>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</p></li>
                        <li><p>Managed up to 5 projects or tasks at a given time while under pressure</p></li>
                        <li><p>Recommended and consulted with clients on the most appropriate graphic design</p></li>
                        <li><p>Created 4+ design presentations and proposals a month for clients and account managers</p></li>
                    </ul>
                </div>
        </div>
        </section>
    </div>
    </div>
    </>
  )
}
