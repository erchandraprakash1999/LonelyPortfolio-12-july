import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaSquareInstagram, FaTwitter } from 'react-icons/fa'; // Combined imports
import { IoMailOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { Element } from 'react-scroll';
import colors from 'tailwindcss/colors';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = ({ theme }) => {
  const { portfolio } = useSelector((store) => store);
  const data = portfolio.user?.data;

  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [socialLinks, setSocialLinks] = useState([]);

  // Change function name to camelCase
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get('https://single-portfolio.skytravelsjeddah.com/api/settings');
        const data = response.data.data;
        setSocialLinks(data['social_links']);
      } catch (error) {
        console.error('Error fetching social links:', error);
      }
    };

    fetchSocialLinks();
    AOS.init(); // Initialize AOS
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          'https://single-portfolio.skytravelsjeddah.com/api/contact/create',
          fields,
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log("Data sent successfully:", response.data);
      } catch (error) {
        if (error.response && error.response.status === 422) {
          setErrors(error.response.data.errors);
        } else {
          console.error('Something went wrong!', error);
        }
      }
    }
  };

  const validate = () => {
    let errorList = {};
    let isError = false;

    if (!fields.name) {
      isError = true;
      errorList.name = "Please enter your name";
    }
    if (!fields.email) {
      isError = true;
      errorList.email = "Please enter your email";
    }
    if (!fields.message) {
      isError = true;
      errorList.message = "Please enter your message";
    }
    if (!fields.subject) {
      isError = true;
      errorList.subject = "Please enter the subject";
    }
    if (!fields.phone) {
      isError = true;
      errorList.phone = "Please enter your phone number";
    }

    setErrors(errorList);
    return !isError; // Return true if there are no errors
  };

  return (
    <div className='bg-[linear-gradient(180deg,#f2f6f9,#fff)] text-lg font-ChakraPetch'>
      <Element name='contact'>
        <div className="pb-16"></div>
      </Element>
      <div className="container mx-auto px-4 py-6" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-[#345676] pb-3 border-b-4 w-min font-RobotoSlab whitespace-nowrap" style={{ borderColor: colors[theme][800] }} dangerouslySetInnerHTML={{ __html: data?.contact_title }} />
          <p className="mt-6 text-xl text-gray-600 font-Poppins" dangerouslySetInnerHTML={{ __html: data?.contact_description }} />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-between mb-8 w-full lg:w-[60%]">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold uppercase" style={{ color: colors[theme][600] }} dangerouslySetInnerHTML={{ __html: data?.app_name }} />
              <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: data?.header_description }} />
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social) => (
                  <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
                    <i
                      className={`fa-brands ${social.icon} p-3 rounded-full border-2`}
                      style={{
                        borderColor: colors[theme][500],
                        backgroundColor: colors[theme][50],
                      }}
                    ></i>
                  </a>
                ))}
              </div>
              <div className="space-y-4 my-10 text-gray-600">
                <p className='flex items-center'>
                  <LuMapPin fontSize={40} className="mr-2" style={{ color: colors[theme][450] }} />
                  <span dangerouslySetInnerHTML={{ __html: data?.address }} />
                </p>
                <div className='mt-4 '>
                  <div className="mt-4">
    {data?.email1 && (
        <a href={`mailto:${data.email1}`} className='flex items-center mt-4'> {/* Added mt-4 for margin top */}
            <IoMailOutline fontSize={40} className="mr-2" style={{ color: colors[theme][450] }} />
            <span dangerouslySetInnerHTML={{ __html: data.email1 }} />
        </a>
    )}
    {data?.email1 && data?.email2 && (
        <h1 className='font-bold font-Agbalumo text-3xl mb-2 mt-4 ml-12' style={{ color: colors[theme][500] }}> {/* Added mt-4 for margin top */}
            OR
        </h1>
    )}
    {data?.email2 && (
        <a href={`mailto:${data.email2}`} className='flex items-center mt-4'> {/* Added mt-4 for margin top */}
            <IoMailOutline fontSize={40} className="mr-2" style={{ color: colors[theme][450] }} />
            <span dangerouslySetInnerHTML={{ __html: data.email2 }} />
        </a>
    )}
    </div>
    <div className="mt-8">

    {data?.number1 && (
        <a href={`tel:${data?.number1}`} style={{ color: colors[theme][450] }} className='flex items-center mt-4'> {/* Added mt-4 for margin top */}
            <MdOutlinePhoneIphone fontSize={40} className="mr-2" />
            <span dangerouslySetInnerHTML={{ __html: data?.number1 }} className='text-gray-600' />
        </a>
    )}
    
    {data?.number1 && data?.number2 && (
        <h1 className='font-bold font-Agbalumo text-3xl mb-2 mt-4 ml-12' style={{ color: colors[theme][500] }}> {/* Added mt-4 for margin top */}
            OR
        </h1>
    )}
    {data?.number2 && (
        <a href={`tel:${data?.number2}`} style={{ color: colors[theme][450] }} className='flex items-center mt-4'> {/* Added mt-4 for margin top */}
            <MdOutlinePhoneIphone fontSize={40} className="mr-2" />
            <span dangerouslySetInnerHTML={{ __html: data?.number2 }} className='text-gray-600' />
        </a>
    )}
    </div>
</div>


              </div>
            </div>
          </div>
          <form className="space-y-4 w-full lg:w-[40%]" onSubmit={handleSubmit} data-aos="fade-left" data-aos-offset="300" data-aos-duration="1000">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" name="name" onChange={handleChange} />
              {errors.name && <h3 style={{ color: "red" }}>{errors.name}</h3>}
              <input type="email" placeholder="Your Email" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" name="email" onChange={handleChange} />
              {errors.email && <h3 style={{ color: "red" }}>{errors.email}</h3>}
            </div>
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" name="subject" onChange={handleChange} />
            {errors.subject && <h3 style={{ color: "red" }}>{errors.subject}</h3>}
            <div>
              <input
                type="number"
                placeholder="Phone number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 custom-number-input"
                name="phone"
                onChange={handleChange}
                inputMode="numeric"
              />
              {errors.phone && <h3 style={{ color: "red" }}>{errors.phone}</h3>}
            </div>
            <textarea placeholder="Message" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32" name="message" onChange={handleChange}></textarea>
            {errors.message && <h3 style={{ color: "red" }}>{errors.message}</h3>}
            <button type="submit" className="mx-auto w-fit px-6 py-3 opacity-70 text-white rounded-md hover:opacity-100" style={{ backgroundColor: colors[theme][500] }}>Send Message</button>
          </form>
        </div>
        <footer className="mt-16 text-center text-gray-600">
          <p dangerouslySetInnerHTML={{ __html: data?.copyright_description }} />
          <p>Designed by <a href="https://devanti.com" style={{ color: colors[theme][500] }}>Devanti Technologies Pvt. Ltd</a></p>
        </footer>
      </div>
    </div>
  );
};

export default ContactForm;
