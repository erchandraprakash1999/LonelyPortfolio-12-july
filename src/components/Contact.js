import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook, FaSquareInstagram, FaTwitter } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { Element } from 'react-scroll';
import colors from 'tailwindcss/colors';
import { contact } from '../data';
const ContactForm = ({theme}) => {
  return (
        <div className='bg-[linear-gradient(180deg,#f2f6f9,#fff)] text-lg font-ChakraPetch'>
        <Element name='contact'> <div className="pb-16"></div> </Element>
    <div className="container mx-auto px-4 py-6  ">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-[#345676] pb-3 border-b-4  w-min font-RobotoSlab" style={{borderColor:colors[theme][800]}}>{contact.title}</h2>
        <p className="mt-6 text-xl text-gray-600 font-Poppins">
          {contact.description}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col justify-between mb-8 w-full lg:w-[60%]">
        <div className="mb-4 md:mb-0">
        <div>
          <h3 className="text-2xl font-bold uppercase " style={{color:colors[theme][600]}}>{contact.webName}</h3>
          <p className="mt-2 text-gray-600">
          {contact.webDescription}
          </p>
          <div className="flex space-x-4 mt-4">
            <a href={contact.socialLinks.twitterURL} className="p-2 rounded-full " style={{border:`2px solid ${colors[theme][500]}`}}><FaTwitter style={{color:colors[theme][500]}} fontSize={30}></FaTwitter></a>
            <a href={contact.socialLinks.facebookURL} className="p-2 rounded-full " style={{border:`2px solid ${colors[theme][500]}`}}><FaFacebook style={{color:colors[theme][500]}} fontSize={30}></FaFacebook></a>
            <a href={contact.socialLinks.instagramURL} className="p-2 rounded-full " style={{border:`2px solid ${colors[theme][500]}`}}><FaSquareInstagram style={{color:colors[theme][500]}} fontSize={30}></FaSquareInstagram></a>
            <a href={contact.socialLinks.linkedInURL} className="p-2 rounded-full " style={{border:`2px solid ${colors[theme][500]}`}}><FaLinkedin style={{color:colors[theme][500]}} fontSize={30}></FaLinkedin></a>

          </div>
          </div>
        <div className="space-y-4 my-5 text-gray-600">
          <p  className='flex items-center' ><LuMapPin fontSize={40} className=" mr-2" style={{color:colors[theme][500]}}></LuMapPin> <span>{contact.ContactDetails.Address}</span></p>
          <a href={`mailto:${contact.ContactDetails.Gmail}`} className='flex items-center'><IoMailOutline   fontSize={40} className=" mr-2" style={{color:colors[theme][500]}}></IoMailOutline><span>{contact.ContactDetails.Gmail}</span></a>
          <a href={`tel:${contact.ContactDetails.phoneNumber}`} style={{color:colors[theme][500]}} className='flex items-center'><MdOutlinePhoneIphone  fontSize={40} className="fas fa-phone  mr-2" ></MdOutlinePhoneIphone><span>{contact.ContactDetails.phoneNumber}</span></a>
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
        <p>&copy; Copyright <span style={{color:colors[theme][500]}}>Lonely</span>. All Rights Reserved</p>
        <p>Designed by <a href="https://devanti.com" style={{color:colors[theme][500]}}>Devanti Technologies Pvt.Ltd</a></p>
      </footer>
    </div>
    </div>
  );
};

export default ContactForm;
