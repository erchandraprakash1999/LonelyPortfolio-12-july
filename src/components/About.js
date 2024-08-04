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
  const borderColor = colors[theme][600];

  return (
    <section id="about" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
      <div className="bg-gray-100 p-6">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 pl-15">
            <h2
              className="text-4xl font-bold pb-3 border-b-4 w-min font-RobotoSlab whitespace-nowrap text-black"
              style={{ borderColor: colors[theme][800] }}
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p className="pt-2 text-xl text-gray-600 mb-5" dangerouslySetInnerHTML={{ __html: data.description }} />
            <div className="relative inline-block">
              <div className="relative w-full"> {/* Changed w-11/12 to w-full */}
                <img
                  src={data.image}
                  alt="About"
                  className="w-full h-auto block cover max-h-[600px] min-w-[40vw]"
                  style={{
                    border: `6px solid ${borderColor}`, // Use backticks here
                    borderRadius: '8px', // Optional: adjust border radius as needed
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 flex gap-4 p-2 mx-3 my-1 flex-wrap ">
                {socialLinks.map((social) => (
                  <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
                    <i
                      className={`fa-brands ${social.icon} p-3 rounded-full border-2`}
                      style={{
                        borderColor: colors[theme][500],
                        backgroundColor: colors[theme][100],
                      }}
                    ></i>
                  </a>
                ))}
              </div>
            </div>

          </div>
          <div className="md:w-1/2 mt-20 text-center">
            <h1 className="text-3xl font-bold pb-3 font-RobotoSlab whitespace-nowrap text-black " dangerouslySetInnerHTML={{ __html: data.my_title }} />

            <p className="text-sm mt-4 font-RobotoSlab text-gray-600" dangerouslySetInnerHTML={{ __html: data.my_description }} />


            <div className="flex flex-wrap mt-4">
              <div className="md:w-full p-3 ">
              <table className="table-auto w-full border-2 shadow-lg rounded-lg p-4"   style={{ borderColor: colors[theme][600] }} >
  <tbody>
    {aboutInformationEntries.map(([key, value]) => (
      <tr className="border-b" key={key}   style={{ borderColor: colors[theme][300] }} >
        <td 
          className="font-semibold border-r pr-2 p-2 text-lg text-center font-RobotoSlab text-black rounded-l-lg" 
          style={{ borderColor: colors[theme][200] }} 
          dangerouslySetInnerHTML={{ __html: key }} 
        />
        <td 
          className="p-2 text-md text-center font-Agbalumo text-gray-500 rounded-r-lg" 
          style={{ borderColor: colors[theme][200] }} 
          dangerouslySetInnerHTML={{ __html: value }} 
        />
      </tr>
    ))}
  </tbody>
</table>



              </div>
             
            </div>
            {resume?
            <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 text-white py-2 px-4 rounded font-RobotoSlab font-bold" style={{ backgroundColor: colors[theme][400] }}>
                  {resumeKey}
                </button>
              </a>
              :""}

          </div>
        </div>
      </div>
    </section>
  );
}
