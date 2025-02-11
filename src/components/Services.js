import React, { useEffect } from 'react';
import { services } from '../data';
import colors from 'tailwindcss/colors';
import ServiceItem from './ServiceItem';
import { Element } from 'react-scroll';
import PortFolioActions from '../RequestServices/PortFolioActions';
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Services({ theme }) {
  const { portfolio } = useSelector((store) => store);
  const data = portfolio.service?.data;
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    dispatch(PortFolioActions.serviceapi());
  }, [dispatch]);

  return (
    <>
      <Element name='services'>
        <div className="pb-16"></div>
      </Element>
      <div className='bg-[linear-gradient(180deg,#f2f6f9,#fff)] font-ChakraPetch' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
        <div className="container mx-auto px-4 py-6">
          <section className="mb-8">
            <h2
              className="text-4xl font-bold text-gray-900 pb-3 border-b-4 w-min font-RobotoSlab"
              style={{ borderColor: colors[theme][800] }}
              dangerouslySetInnerHTML={{ __html: data?.title }}
            />
            <p className="mt-2 text-xl text-gray-600 font-Poppins" dangerouslySetInnerHTML={{ __html: data?.description }} />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xl text-center">
            {data?.items.map((item, index) => (
              <ServiceItem item={item} key={index} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
