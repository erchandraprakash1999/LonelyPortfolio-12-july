import React, { useState } from 'react';
import colors from 'tailwindcss/colors';

export default function ServiceItem({ item, theme }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="p-6 rounded-lg shadow-md group transition-[background-color]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ backgroundColor: hover ? colors[theme][700] : 'white' }}
    >
      <div className="flex justify-center mb-4">
        <div
          className="group-hover:bg-white p-3 rounded-full mb-5 text-white group-hover:text-pink-600"
          style={{ backgroundColor: hover ? 'white' : colors[theme][600], color: hover ? colors[theme][600] : 'white' }}
        >
          <i
            className={`fa-brands ${item.icon} p-3 rounded-full border-2`}
            style={{
              borderColor: colors[theme][400],
              
            }}
          ></i>
        </div>
      </div>
      <h3 className="mb-5 text-2xl font-semibold text-gray-900 group-hover:text-white" dangerouslySetInnerHTML={{ __html: item.name }} />
      <p className="mt-2 text-gray-600 group-hover:text-slate-100 text-justify" dangerouslySetInnerHTML={{ __html: item.description }} />
    </div>
  );
}
