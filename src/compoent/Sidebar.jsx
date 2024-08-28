import React, { useState } from 'react';
import { FaHome, FaChartBar, FaUser, FaCog, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`flex flex-col  p-3 bg-gray-800 text-white shadow-lg ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 overflow-y-auto`}
    >
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${!isOpen && 'hidden'}`}>Dashboard</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-xl cursor-pointer ml-2" />
        </button>
      </div>
      <div className="mt-10 flex-1">
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            <FaHome className="text-xl" />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Overview</span>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
