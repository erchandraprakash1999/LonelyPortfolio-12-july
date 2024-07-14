import React from 'react';
import { Element } from 'react-scroll';
import colors from 'tailwindcss/colors';

const ContactForm = ({theme}) => {
  return (
        <div className='bg-[linear-gradient(180deg,#f2f6f9,#fff)] text-lg'>
        <Element name='contact'> <div className="pb-16"></div> </Element>
    <div className="container mx-auto px-4 py-6  ">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-[#345676] pb-3 border-b-4  w-min" style={{borderColor:colors[theme][800]}}>Contact</h2>
        <p className="mt-6 text-xl text-gray-600">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col justify-between mb-8 w-full lg:w-[60%]">
        <div className="mb-4 md:mb-0">
        <div>
          <h3 className="text-2xl font-bold " style={{color:colors[theme][600]}}>LONELY</h3>
          <p className="mt-2 text-gray-600">
            Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.
          </p>
          {/* <div className="flex space-x-4 mt-4">
            <a href="#" className="text-pink-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-pink-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-pink-500"><i className="fab fa-linkedin"></i></a>
          </div> */}
          </div>
        <div className="space-y-4 text-gray-600">
          <p><i className="fas fa-map-marker-alt  mr-2" style={{color:colors[theme][500]}}></i>A108 Adam Street, New York, NY 535022</p>
          <p><i className="fas fa-envelope  mr-2" style={{color:colors[theme][500]}}></i>info@example.com</p>
          <p><i className="fas fa-phone  mr-2" style={{color:colors[theme][500]}}></i>+1 5589 55488 55s</p>
        </div>
        </div>
      </div>
      <form className="space-y-4 w-full lg:w-[40%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>
        <input type="text" placeholder="Subject" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
        <textarea placeholder="Message" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"></textarea>
        <button type="submit" className=" mx-auto w-fit px-6 py-3 opacity-70  text-white rounded-md hover:opacity-100" style={{backgroundColor:colors[theme][500]}}>Send Message</button>
      </form>
      </div>
      <footer className="mt-16 text-center text-gray-600">
        <p>&copy; Copyright <span className="text-pink-500">Lonely</span>. All Rights Reserved</p>
        <p>Designed by <a href="https://bootstrapmade.com" className="text-pink-500">BootstrapMade</a></p>
      </footer>
    </div>
    </div>
  );
};

export default ContactForm;
