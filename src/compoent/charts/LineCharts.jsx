// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date-fns adapter for time scale

// Register necessary components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, TimeScale);

const LineChart = () => {
  // Data for the line chart
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], // X-axis labels as hourly intervals
    datasets: [
      {
        label: 'Hourly Sales',
        data: [13, 23, 33, 43, 53, 63, 73, 83, 93], // Y-axis data corresponding to each hour
        fill: false,
        borderColor: '#4A90E2',
        tension: 0.1,
      },
    ],
  };

  // Options for the line chart
  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },  
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Hour',
        },
        ticks: {
          callback: function (value) {
            return `${value}:00`; // Append ':00' to each hour for better readability
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4">
      <header className="px-4 py-3 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Real Time Value</h2>
      </header>
      <div className="flex justify-center items-center">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
