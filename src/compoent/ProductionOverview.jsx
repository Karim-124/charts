import React, { useState } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { useNavigate } from 'react-router-dom';

import darkLogo from '../assets/logoDark.png'
import lightLogo from '../assets/logoLight.png'


const ProductionOverview = () => {
    const [darkMode, setDarkMode] = useState(true); // State to toggle dark and light modes

    const data = [
        { id: 'PO001', Batch_Preparation: 100, Milling: 100, Forming: 100, Annealing: 33, Cutting_and_Finishing: 0, Inspection_and_Quality_Control: 0 },
        { id: 'PO002', Batch_Preparation: 100, Milling: 100, Forming: 100, Annealing: 100, Cutting_and_Finishing: 100, Inspection_and_Quality_Control: 80 },
        { id: 'PO003', Batch_Preparation: 100, Milling: 20, Forming: 100, Annealing: 0, Cutting_and_Finishing: 0, Inspection_and_Quality_Control: 0 },
        { id: 'PO004', Batch_Preparation: 100, Milling: 100, Forming: 100, Annealing: 0, Cutting_and_Finishing: 0, Inspection_and_Quality_Control: 0 },
        { id: 'PO005', Batch_Preparation: 50, Milling: 0, Forming: 0, Annealing: 0, Cutting_and_Finishing: 0, Inspection_and_Quality_Control: 0 },
        { id: 'PO006', Batch_Preparation: 50, Milling: 0, Forming: 0, Annealing: 0, Cutting_and_Finishing: 0, Inspection_and_Quality_Control: 0 },

    ];

    const navigate = useNavigate();

    const handleCellClick = (id, step) => {
        navigate(`/steps/${id}/${step}`);
    };

    // Determine styles based on the mode
    const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-100';
    const textColor = darkMode ? 'text-green-300' : 'text-green-700';
    const tableHeaderBg = darkMode ? ' text-white' : ' text-black';
    const tableRowBg = darkMode ? '' : '';
    const hoverColor = darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-900';
    const calculateTimeDetails = (percent) => {
        const totalDuration = 8; // Total duration assumed to be 8 hours
        const duration = (percent / 100) * totalDuration; // Duration based on percentage
        const startTime = new Date(2025, 0, 11, 8); // Fixed start time: 8:00 AM
        const endTime = new Date(startTime.getTime() + duration * 60 * 60 * 1000); // Calculate end time

        return {
            startTime: startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            endTime: endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            duration: `${duration.toFixed(1)} hrs`,
        };
    };

    return (
        <div className={`${bgColor} min-h-screen p-6 transition-all duration-300 `}>
            {/* Toggle Button */}

            <div className='flex justify-between mb-2'>
                <div>
                    <img className='w-52 ' src={`${darkMode ? darkLogo : lightLogo}`} loading='lazy' alt="" />
                </div>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="mb-2 px-4 py-2 rounded-lg font-medium shadow-md bg-green-600 hover:bg-green-500 text-white flex items-center justify-center"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? (
                        // Sun Icon for Light Mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.343 6.343L4.93 4.93m12.728 12.728l-1.414-1.414M6.343 17.657L4.93 19.07M12 7a5 5 0 100 10 5 5 0 000-10z"
                            />
                        </svg>
                    ) : (
                        // Moon Icon for Dark Mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                            />
                        </svg>
                    )}
                </button>
            </div>


            {/* Page Title */}
            <div
                className={`p-6 rounded-lg shadow-md mb-2  ${darkMode ? "bg-gray-800" : "bg-gray-200"
                    }`}
            >
                <h1 className={`text-3xl font-bold text-center ${textColor}`}>
                    Production Overview <span className="text-orange-500">Work Center 001</span>
                </h1>
            </div>


            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full  ">
                    <thead>
                        <tr className={tableHeaderBg}>
                            <th className=""></th>
                            <th className="px-4 py-3 text-left">Batch Preparation</th>
                            <th className="px-4 py-3 text-left">Milling</th>
                            <th className="px-4 py-3 text-left">Forming</th>
                            <th className="px-4 py-3 text-left">Annealing</th>
                            <th className="px-4 py-3 text-left">Cutting_and_Finishing</th>
                            <th className="px-4 py-3 text-left">Inspection_and_Quality_Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? tableRowBg : ''} ${textColor}`}
                            >
                                <td className="px-4 py-4 font-bold">{row.id}</td>
                                {Object.entries(row)
                                    .filter(([key]) => key !== "id")
                                    .map(([key, value]) => {
                                        const { startTime, endTime, duration } = calculateTimeDetails(value);
                                        return (
                                            <td
                                                key={key}
                                                className="px-4 py-6 cursor-pointer align-top"
                                                onClick={() => handleCellClick(row.id, key)}
                                            >
                                                <div
                                                    className={`p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 ${darkMode ? "bg-gray-800" : "bg-green-200"
                                                        }`}
                                                >
                                                    {/* Step Name */}
                                                    <h3
                                                        className={`text-sm font-semibold mb-2 ${darkMode ? "text-green-300" : "text-green-800"
                                                            }`}
                                                    >
                                                        {key.replace(/_/g, " ")}
                                                    </h3>

                                                    {/* Progress Bar */}
                                                    <div className="flex space-x-3">
                                                        <Progress
                                                            percent={value || 0}
                                                            status={
                                                                value === 100
                                                                    ? 'success'
                                                                    : value > 0
                                                                        ? 'active'
                                                                        : 'default'
                                                            }
                                                            theme={{
                                                                success: { color: darkMode ? '#4caf50' : '#66bb6a' },
                                                                active: {
                                                                    symbol: ' ',
                                                                    trailColor: '#e5e5e5', color: darkMode ? '#FE8D0D' : '#FE8D0D'
                                                                },
                                                                default: { symbol: " ", color: darkMode ? '#a5d6a7' : '#81c784' },
                                                            }}
                                                            style={{
                                                                width: "100"
                                                            }}
                                                        />

                                                        {value == 100 ? <></> : <p className={`${darkMode ? "text-orange-400" : "text-orange-900"}`} >{value || 0}%</p>}
                                                    </div>

                                                    {/* Time Details */}
                                                    <div
                                                        className={`text-xs space-y-2 font-medium leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-800"
                                                            }`}
                                                    >
                                                        <p className="flex items-center space-x-2">
                                                            <span className="font-semibold text-sm">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-4 w-4 inline-block"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M8 6v6h4m4 0h-2m-2-4v4h-4m4 4h4m4 0h-4m-4-4H8m0 0H4m16 0v4m-4 0v4m-4-8V6"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span className="font-bold">Start:</span>
                                                            <span className="italic">{startTime}</span>
                                                        </p>
                                                        <p className="flex items-center space-x-2">
                                                            <span className="font-semibold text-sm">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-4 w-4 inline-block"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M12 8c3.33 0 6 2.67 6 6s-2.67 6-6 6-6-2.67-6-6 2.67-6 6-6zM12 2v4M12 20v2"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span className="font-bold">End:</span>
                                                            <span className="italic">{endTime}</span>
                                                        </p>
                                                        <p className="flex items-center space-x-2">
                                                            <span className="font-semibold text-sm">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-4 w-4 inline-block"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M10 20H4v-6m16 6h-6v-4"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span className="font-bold">Duration:</span>
                                                            <span className="italic">{duration}</span>
                                                        </p>
                                                    </div>

                                                </div>
                                            </td>
                                        );
                                    })}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ProductionOverview;
