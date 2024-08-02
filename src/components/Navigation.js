import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';
import colors from 'tailwindcss/colors';
import ThemeSetter from './ThemeSetter';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Navigation({ theme, handleTheme }) {
  const [navbar, setNavbar] = useState({ navItems: [], name: '' });

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const response = await axios.get('https://single-portfolio.skytravelsjeddah.com/api/settings');
        const data = response.data.data;
        setNavbar({ navItems: data['nav_items'], name: data['name'] });
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
    };

    fetchNavbarData();
  }, []);

  const [activeNav, setActiveNav] = useState(false);
  const handleToggleNav = () => {
    setActiveNav(!activeNav);
  };

  const { portfolio } = useSelector((store) => store);
  const data = portfolio.user?.data;

  return (
    <>
      <ul className={`list-none bg-white flex gap-6 flex-col absolute z-50 top-0 left-0 h-[76vh] justify-center items-center w-full text-black ${activeNav ? 'block' : 'hidden'} font-Poppins`}>
        {navbar.navItems.map((item, i) => (
          <li key={i} className="hover:bg-gray-300 capitalize cursor-pointer font-bold">
            <Link to={item} smooth duration={100}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <header className="sticky top-0 z-30 text-white" style={{ backgroundColor: colors[theme][400] }}>
        <nav className="h-[70px] shadow-lg">
          <div className="flex justify-between items-center w-[85%] h-full mx-auto">
            <div className="uppercase text-4xl font-semibold font-RobotoSlab" dangerouslySetInnerHTML={{ __html: navbar.name }} />
            <div className="h-min font-sans hidden lg:block font-Poppins">
              <ul className="list-none flex items-center gap-6">
                {navbar.navItems.map((item, i) => (
                  <li key={i} className="capitalize cursor-pointer font-bold h-min">
                    <Link to={item} smooth duration={100}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button className="px-3 py-1 lg:hidden block" onClick={handleToggleNav}>
              <GiHamburgerMenu fontSize={30} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
