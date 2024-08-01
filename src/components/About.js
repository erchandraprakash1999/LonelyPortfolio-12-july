import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import PortFolioActions from '../RequestServices/PortFolioActions';
import colors from 'tailwindcss/colors';

export default function About({ theme }) {
  const { portfolio } = useSelector((store) => store);
  const data = portfolio.about?.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PortFolioActions.aboutapi());
    AOS.init(); // Initialize AOS
  }, [dispatch]);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Transform the about_information object into an array of key-value pairs
  const aboutInformationEntries = data.about_information
    ? Object.entries(data.about_information)
    : [];

  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
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
            <div className="pt-2 flex space-x-2">
              <a href="">
                <i
                  className="fa-brands fa-facebook p-3 rounded-full border-2 text-blue-700"
                  style={{
                    borderColor: colors[theme][500],
                    backgroundColor: colors[theme][50],
                  }}
                ></i>
              </a>
              <a href="">
                <i
                  className="fa-brands fa-instagram p-3 rounded-full border-2 text-rose-400"
                  style={{
                    borderColor: colors[theme][500],
                    backgroundColor: colors[theme][50],
                  }}
                ></i>
              </a>
              <a href="">
                <i
                  className="fa-brands fa-twitter p-3 rounded-full border-2 text-blue-700"
                  style={{
                    borderColor: colors[theme][500],
                    backgroundColor: colors[theme][50],
                  }}
                ></i>
              </a>
              <a href="">
                <i
                  className="fa-brands fa-linkedin p-3 rounded-full border-2 text-sky-500"
                  style={{
                    borderColor: colors[theme][500],
                    backgroundColor: colors[theme][50],
                  }}
                ></i>
              </a>
              <a href="">
                <i
                  className="fa-brands fa-github p-3 rounded-full border-2 text-black"
                  style={{
                    borderColor: colors[theme][500],
                    backgroundColor: colors[theme][50],
                  }}
                ></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-20">
            <h1 className="text-3xl font-bold pb-3 w-min font-RobotoSlab whitespace-nowrap text-black">
              {data.about_information?.title || 'I am Vinay Kumar'}
            </h1>
            <h6 className="text-lg mt-0 font-RobotoSlab text-gray-600">
              A Lead <span className="text-gradient ">Stack & Mern Stack Developer</span> based in <span className="text-gradient">INDIA</span>
            </h6>
            <p className="text-sm mt-4 font-RobotoSlab text-gray-600">
              As a Creative Software Developer, I combine my technical expertise with a deep understanding of design principles to create engaging digital solutions. My services include:
            </p>
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
              <a href="">
                <button
                  className="mt-4 text-white py-2 px-4 rounded font-RobotoSlab font-bold"
                  style={{ backgroundColor: colors[theme][400] }}
                >
                  Browse Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
