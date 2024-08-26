import { Chart, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Register the components
Chart.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

export const areaChartData = {
  labels: [
    'Week 1-3', 'Week 4-6', 'Week 7-9', 'Week 10-12', 'Week 13-15', 'Week 16-18', 'Week 19-21', 'Week 22-24', 'Week 25-27'
  ],
  datasets: [
    {
      label: 'Performance',
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90], // Example data for each 3-week interval
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color under the points
      borderColor: 'rgba(75, 192, 192, 1)',       // Border color of the area
      borderWidth: 0,  // No border line
      tension: 0.1,
      pointRadius: 5,  // Size of the points
      pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Color of the points
    },
  ],
};

export const areaChartOptions = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Three-Week Intervals',
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
      text: 'Performance Over Three-Week Intervals',
    },
  },
};
