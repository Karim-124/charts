import { Chart, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

export const pieChartData = {
  labels: [
    'No Production Time',
    'Break Downtime',
    'Planned Stop',
    'Availability Loss',
    'Operational Time',
    'Net Production Time'
  ],
  datasets: [
    {
      label: 'Time Distribution',
      data: [10, 20, 15, 25, 30, 100], // Example data
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export const pieChartOptions = {
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Time Distribution',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const label = tooltipItem.label || '';
          const value = tooltipItem.raw || 0;
          return `${label}: ${value} hours`;
        },
      },
    },
  },
};
