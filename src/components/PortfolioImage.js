import React, { useEffect, useState } from 'react';
import { IoIosLink, IoMdAdd } from 'react-icons/io';
import colors from 'tailwindcss/colors';
import { Element } from 'react-scroll';
import PortFolioActions from '../RequestServices/PortFolioActions';
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PortfolioImage({ theme }) {
    const [active, setActive] = useState('all');
    const [fields, setFields] = useState([]);
    const { portfolio } = useSelector((store) => store);
    const data = portfolio.portfolioImages?.data;
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init();
        dispatch(PortFolioActions.portfolioapi());
    }, [dispatch]);

    useEffect(() => {
        if (data) {
            const uniqueFields = [];
            data.items.forEach((val) => {
                if (!uniqueFields.includes(val.name)) {
                    uniqueFields.push(val.name);
                }
            });
            setFields(uniqueFields);
        }
    }, [data]); // Update fields when data changes

    function handleTab(val) {
        setActive(val);
    }

    return (
        <>
            <Element name='portfolio'>
                <div className="pb-16"></div>
            </Element>
            <section
                id="portfolio"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="1000"
                className="portfolio section-bg bg-[linear-gradient(180deg,#f2f6f9,#fff)] font-ChakraPetch"
            >
                <div className="container mx-auto px-4 py-6">
                    <div className="mb-8">
                        <h2
                            className="text-4xl font-bold text-[#345676] pb-3 border-b-4 w-min font-RobotoSlab"
                            style={{ borderColor: colors[theme][800] }}
                        >
                            {data?.title}
                        </h2>
                        <p className="mt-2 text-xl text-gray-600 font-Poppins">
                            {data?.description}
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-8 bg-white py-3 px-4 rounded-full w-min mx-auto">
                        <ul id="portfolio-filters" className="flex gap-6 cursor-pointer">
                            <li
                                style={{ color: active === 'all' ? colors[theme][500] : '' }}
                                onClick={() => handleTab('all')}
                            >
                                All
                            </li>
                            {fields.map((val, ind) => (
                                <li
                                    key={ind} // Ideally, use a unique id if available
                                    style={{ color: active === val ? colors[theme][500] : '' }}
                                    onClick={() => handleTab(val)}
                                >
                                    {val}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Portfolio Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data?.items
                            .filter((item) => active === 'all' || item.name === active)
                            .map((item, index) => (
                                <div className="bg-white rounded-lg shadow-md" key={item.id || index}>
                                    <div className="relative group">
                                        <div>
                                            <img src={item.image} alt={item.name} className="w-full h-auto block" />
                                        </div>
                                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full bg-[#2c496499] flex flex-col gap-2 z-10 text-white">
                                            <div className="my-auto text-center">
                                                <h4 className="text-xl font-semibold">{item.name} {index + 1}</h4>
                                                <p className="mt-2 text-gray-100 uppercase">{item.name}</p>
                                            </div>
                                            <div className="flex justify-center">
                                                <span>
                                                    <IoMdAdd fontSize={30} />
                                                </span>
                                                <span>
                                                    <IoIosLink fontSize={30} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}
