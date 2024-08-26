import React, { useState } from 'react';
import { FaHome, FaChartBar, FaUser, FaCog, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`flex flex-col h-[100vh] p-3 bg-gray-800 text-white shadow-lg ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${!isOpen && 'hidden'}`}>Dashboard</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-xl cursor-pointer" />
        </button>
      </div>
      <div className="mt-10">
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            <FaHome className="text-xl" />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Home</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            <FaChartBar className="text-xl" />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Analytics</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            <FaUser className="text-xl" />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Users</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            <FaCog className="text-xl" />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
