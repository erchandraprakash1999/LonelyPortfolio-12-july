import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import colors from 'tailwindcss/colors';
import { useDispatch, useSelector } from 'react-redux';
import PortFolioActions from '../RequestServices/PortFolioActions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaSquareInstagram, FaTwitter } from 'react-icons/fa6';

export default function Resume({ theme }) {
    const { portfolio } = useSelector((store) => store);
    const data = portfolio.resume?.data; // Accessing API data
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PortFolioActions.resumeapi());
        AOS.init();
    }, [dispatch]);

    return (
        <>
            <Element name='resume'>
                <div className="pb-16"></div>
            </Element>
            <div className="mx-auto bg-[linear-gradient(180deg,#f2f6f9,#fff)] rounded-lg shadow-lg text-[#5a656e] text-xl font-ChakraPetch" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
                <div className="container mx-auto px-4 py-6">
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-[#345676] pb-3 border-b-4 w-min font-RobotoSlab" style={{ borderColor: colors[theme][800] }} dangerouslySetInnerHTML={{ __html: data?.title || 'Resume' }}></h1>
                        <p className="mt-2 text-gray-600 text-xl" dangerouslySetInnerHTML={{ __html: data?.description || '' }}></p>
                    </header>
                    <section className='flex flex-col lg:flex-row gap-3'>
                        <div className="w-full lg:w-[50%]">
                            <div className="mb-6">
                                <h2 className="text-3xl font-semibold text-[#4b7dab] mb-4" dangerouslySetInnerHTML={{ __html: data?.summary_heading || 'Summary' }}></h2>
                                <div className="border-l-2 pl-4 relative before:absolute before:top-0 before:content-[''] before:w-[16px] before:h-[16px] before:rounded-full before:left-[-9px] before:bg-white before:border-2 before:border-black" style={{ borderColor: colors[theme][600] }}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3" dangerouslySetInnerHTML={{ __html: data?.summary_title || '' }}></h3>
                                    <p className="text-gray-700 mb-4 italic" dangerouslySetInnerHTML={{ __html: data?.summary_content || '' }}></p>
                                    <ul className="text-gray-700 flex flex-col gap-2">
                                        {/* Add list items dynamically if needed */}
                                    </ul>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-3xl font-semibold text-[#4b7dab] mb-4" dangerouslySetInnerHTML={{ __html: data?.education_heading || 'Education' }}></h2>
                                {data?.educations?.map((course, index) => (
                                    <div key={index} className="border-l-2 pl-4 relative before:absolute before:top-0 before:content-[''] before:w-[16px] before:h-[16px] before:rounded-full before:left-[-9px] before:bg-white before:border-2 before:border-black" style={{ borderColor: colors[theme][600] }}>
                                        <div className="space-y-4 pb-8">
                                            <h3 className="text-xl font-bold text-[#2c4964] mb-3" dangerouslySetInnerHTML={{ __html: course.course_name }}></h3>
                                            <span className="text-gray-600 p-2 bg-[#e4ebf3] px-4 py-2">{course.batch}</span>
                                            <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: course.course_content }}></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full lg:w-[50%]'>
                            <h2 className="text-3xl font-semibold text-[#4b7dab] mb-4" dangerouslySetInnerHTML={{ __html: data?.experience_heading || 'Experience' }}></h2>
                            {data?.experience?.map((job, index) => (
                                <div key={index} className="border-l-2 pl-4 relative before:absolute before:top-0 before:content-[''] before:w-[16px] before:h-[16px] before:rounded-full before:left-[-9px] before:bg-white before:border-2 before:border-black" style={{ borderColor: colors[theme][600] }}>
                                    <div className="pb-4">
                                        <h3 className="text-xl font-bold text-[#2c4964] mb-4" dangerouslySetInnerHTML={{ __html: job.job_role }}></h3>
                                        <span className="text-gray-600 bg-[#e4ebf3] px-4 py-2" dangerouslySetInnerHTML={{ __html: job.duration }}></span>
                                        <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: job.location }}></p>
                                        <ul className="text-gray-600 mt-2 list-disc flex flex-col gap-4 ml-6">
                                            <li><p dangerouslySetInnerHTML={{ __html: job.job_description }}></p></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
