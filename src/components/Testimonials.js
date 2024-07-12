import React from 'react'

export default function Testimonials() {
  return (
    <div className=' bg-[linear-gradient(180deg,#f2f6f9,#fff)] p-8'>
      <section id="testimonials" class=" py-12">
        <div class="container mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 pb-3 border-b-4 border-pink-500 w-min">Testimonials</h2>
                <p class="mt-2 text-xl text-gray-600">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p class="text-pink-500 text-xl mb-4">“Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.”</p>
                    <img src="https://via.placeholder.com/64" class="w-16 h-16 rounded-full mx-auto mb-4" alt="Jena Karlis"/>
                    <h4 class="text-xl font-semibold text-gray-900">Jena Karlis</h4>
                    <p class="text-gray-600">Store Owner</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p class="text-pink-500 text-xl mb-4">“Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.”</p>
                    <img src="https://via.placeholder.com/64" class="w-16 h-16 rounded-full mx-auto mb-4" alt="Matt Brandon"/>
                    <h4 class="text-xl font-semibold text-gray-900">Matt Brandon</h4>
                    <p class="text-gray-600">Freelancer</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p class="text-pink-500 text-xl mb-4">“Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.”</p>
                    <img src="https://via.placeholder.com/64" class="w-16 h-16 rounded-full mx-auto mb-4" alt="John Larson"/>
                    <h4 class="text-xl font-semibold text-gray-900">John Larson</h4>
                    <p class="text-gray-600">Entrepreneur</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
