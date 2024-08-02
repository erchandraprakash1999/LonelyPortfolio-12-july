import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import PortFolioActions from '../RequestServices/PortFolioActions';
import colors from 'tailwindcss/colors';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

export default function About({ theme }) {
  const { portfolio } = useSelector((store) => store);
  const data = portfolio.about?.data;
  const dispatch = useDispatch();
  const isMedium = useMediaQuery({ query: '(min-width: 1150px)' });

  const [socialLinks, setSocialLinks] = useState([]);
  const [resume, setResume] = useState('');
  const [resumeKey, setResumeKey] = useState('');

  useEffect(() => {
    dispatch(PortFolioActions.aboutapi());
    AOS.init(); // Initialize AOS
    const fetchNavbarData = async () => {
      try {
        const response = await axios.get('https://single-portfolio.skytravelsjeddah.com/api/settings');
        const data = response.data.data;
        setSocialLinks(data['social_links']);
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
      try {
        const response = await axios.get('https://single-portfolio.skytravelsjeddah.com/api/resume');
        const resumeData = response.data.data;
        setResume(resumeData.resume);
        setResumeKey(Object.keys(resumeData).find(key => key.toLowerCase().includes('resume')));
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };
    fetchNavbarData();
  }, [dispatch]);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Transform the about_information object into an array of key-value pairs
  const aboutInformationEntries = data.about_information
    ? Object.entries(data.about_information)
    : [];
    
  const halfLength = Math.ceil(aboutInformationEntries.length / 2);

  return (
    <section id="about" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
      <div className="bg-gray-100 p-6">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 pl-15">
            <h2
              className="text-4xl font-bold pb-3 border-b-4 w-min font-RobotoSlab whitespace-nowrap text-black"
              style={{ borderColor: colors[theme][800] }}
            >
              {data.title}
            </h2>
            <p className="pt-2 text-xl text-gray-600">{data.description}</p>
            <img src={data.image} alt="About" className="w-4/5 mt-4" />
            <div className="flex gap-4 mt-4">
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
          </div>
          <div className="md:w-1/2 mt-20">
            <h1 className="text-3xl font-bold pb-3 w-min font-RobotoSlab whitespace-nowrap text-black">
              {data.my_title}
            </h1>
            <h6 className="text-lg mt-0 font-RobotoSlab text-gray-600">
              A Lead <span className="text-gradient ">Stack & Mern Stack Developer</span> based in <span className="text-gradient">INDIA</span>
            </h6>
            <p className="text-sm mt-4 font-RobotoSlab text-gray-600">
              {data.my_description}
            </p>

            {isMedium ? (
              <div className="flex flex-wrap mt-4">
                <div className="md:w-1/2 p-3">
                  <table className="table-auto w-full border-collapse border">
                    <tbody>
                      {aboutInformationEntries.slice(0, halfLength).map(([key, value]) => (
                        <tr className="border-b p-4" key={key}>
                          <td className="font-semibold border-r pr-2 p-2">{key}</td>
                          <td className="p-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="md:w-1/2 p-3">
                  <table className="table-auto w-full border-collapse border">
                    <tbody>
                      {aboutInformationEntries.slice(halfLength).map(([key, value]) => (
                        <tr className="border-b p-4" key={key}>
                          <td className="font-semibold border-r pr-2 p-2">{key}</td>
                          <td className="p-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 text-white py-2 px-4 rounded font-RobotoSlab font-bold" style={{ backgroundColor: colors[theme][400] }}>
                    {resumeKey}
                  </button>
                </a>
              </div>
            ) : (
              <div className="flex flex-wrap mt-4">
                <div className="md:w-full p-3">
                  <table className="table-auto w-full border-collapse border">
                    <tbody>
                      {aboutInformationEntries.map(([key, value]) => (
                        <tr className="border-b p-4" key={key}>
                          <td className="font-semibold border-r pr-2 p-2">{key}</td>
                          <td className="p-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 text-white py-2 px-4 rounded font-RobotoSlab font-bold" style={{ backgroundColor: colors[theme][400] }}>
                    {resumeKey}
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
