import React, { useEffect } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Element, Link } from 'react-scroll';
import colors from 'tailwindcss/colors';
import { useDispatch, useSelector } from 'react-redux';
import PortFolioActions from '../RequestServices/PortFolioActions';

export default function HeaderImageSection({ theme }) {
  const { portfolio } = useSelector((store) => store);
  const data = portfolio.user?.data;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(PortFolioActions.generalapi());
  }, []);
  
  return (
    <>
      <Element name="home">
        <section 
          className={`flex flex-col items-center justify-center h-[75vh] text-white`} 
          style={{ background: `url(${data?.banner_image})` }}
        >
          <div 
            className="text-5xl font-bold font-Agbalumo" 
            style={{ color: colors[theme][500] }}
            dangerouslySetInnerHTML={{ __html: data?.header_title }}
          />
          <div 
            className="text-3xl font-ChakraPetch mt-4" 
            style={{ color: colors[theme][200] }}
            dangerouslySetInnerHTML={{ __html: data?.header_description }}
          />
          <div 
            style={{ color: colors[theme][400] }} 
            className="hover:text-violet-50 mt-2 relative top-0 hover:top-2 transition-[top]"
          >
            <Link to="about" smooth duration={100}>
              <FaAngleDoubleDown fontSize={70} />
            </Link>
          </div>
        </section>
      </Element>
    </>
  );
}
