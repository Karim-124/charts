// src/components/charts/columnChartConfig.js

import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const columnChartData = {
  labels: [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ],
  datasets: [
    {
      label: 'Performance',
      data: [10, 20, 30, 50, 40, 60, 70, 80, 90, 50, 60, 70], // Sample data for each month
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

export const columnChartOptions = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months',
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
      text: 'Performance Throughout the Year',
    },
  },
};
