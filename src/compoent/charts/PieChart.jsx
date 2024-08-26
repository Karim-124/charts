// src/components/charts/PieChart.jsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { pieChartData, pieChartOptions } from '../dataCharts/pieChartData';
import { Chart, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

const PieChart = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4">
      <header className="px-4 py-3 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Real Time Value</h2>
      </header>
      <div className="flex justify-center items-center">
        <Pie
          data={pieChartData}
          options={pieChartOptions}
          width={300}  // Adjust width as needed
          height={300} // Adjust height as needed
        />
      </div>
    </div>
  );
};

export default PieChart;
