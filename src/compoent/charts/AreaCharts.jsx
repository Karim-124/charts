import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const AreaChart = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ], // x-axis labels for each month
    datasets: [
      {
        label: 'Performance',
        data: [15, 30, 45, 60, 75, 90, 55, 70, 85, 60, 40, 20], // Sample data
        fill: true, // Fill area under the line
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
        pointBorderColor: '#fff', // Point border color
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)', // Point hover color
        pointHoverBorderColor: 'rgba(220,220,220,1)', // Point hover border color
        pointRadius: 5, // Point size
        pointHoverRadius: 7, // Hover point size
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Performance in Percentage',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start y-axis from 0
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10, // Set interval of 10
          callback: function(value) {
            return value + '%'; // Append '%' to each tick label
          },
        },
      },
      x: {
        beginAtZero: true, // X-axis starts from the first month
      },
    },
  };

  return (
    <>
<div className="flex flex-col bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4">
      <header className="px-4 py-3 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Real Time Value</h2>
      </header>
      <div className="flex justify-center items-center p-4">
      <Line data={data} options={options} />

      </div>
    </div>
    </>
  );
};

export default AreaChart;
