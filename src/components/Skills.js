import React, { useEffect } from 'react';
import AnimatedProgressBar from './AnimatedProgressBar';
import colors from 'tailwindcss/colors';
import { Element } from 'react-scroll';
import PortFolioActions from '../RequestServices/PortFolioActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Skills({ theme }) {
  const { portfolio } = useSelector((store) => store);
  const data = portfolio.skills?.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PortFolioActions.skillsapi());
  }, [dispatch]);

  return (
    <>
      <Element name='skills'>
        <div className="pb-16"></div>
      </Element>
      <div className="mx-auto bg-[linear-gradient(#e5e7eb,white)] font-ChakraPetch">
        <div className="container mx-auto px-4 py-6">
          <div>
            <h2
              className="text-4xl font-bold text-gray-900 pb-3 border-b-4 w-min font-RobotoSlab"
              style={{ borderColor: colors[theme][800], whiteSpace: 'nowrap' }}
            >
              {data?.title}
            </h2>
            <p
              className="text-gray-600 mt-4 text-xl"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data?.items.map(({ name, value }, index) => (
              <AnimatedProgressBar k={name} val={value} key={index} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
