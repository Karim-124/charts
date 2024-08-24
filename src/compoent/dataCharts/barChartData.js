    // src/components/charts/barChartConfig.js
// src/components/charts/barChartConfig.js

import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export const barChartData = {
    labels: [
      '01:00', '02:00', '03:00', '04:00', '05:00',
      '06:00', '07:00', '08:00', '09:00'
    ],
    datasets: [
      {
        label: 'Performance',
        data: [10, 20, 30, 50, 40, 60, 70, 80, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  export const barChartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (Hours)',
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Percentage (%)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Performance Over Time',
      },
    },
  };
  