// src/components/charts/lineChartConfig.js

export const lineChartData = {
    labels: [
      new Date('2024-08-25T01:00:00Z'),
      new Date('2024-08-25T02:00:00Z'),
      new Date('2024-08-25T03:00:00Z'),
      new Date('2024-08-25T04:00:00Z'),
      new Date('2024-08-25T05:00:00Z'),
      new Date('2024-08-25T06:00:00Z'),
      new Date('2024-08-25T07:00:00Z'),
      new Date('2024-08-25T08:00:00Z'),
      new Date('2024-08-25T09:00:00Z'),
    ],
    datasets: [
      {
        label: 'Performance',
        data: [10, 20, 30, 50, 40, 60, 70, 80, 90],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };
  
  export const lineChartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'hour',
          stepSize: 1,
          tooltipFormat: 'HH:mm',
          displayFormats: {
            hour: 'HH:mm',  // Format to display the hour on the x-axis
          },
        },
        title: {
          display: true,
          text: 'Time (Hours)',
        },
        ticks: {
          callback: function(value, index, values) {
            const date = new Date(value);
            return date.getUTCHours(); // Display the hour in the x-axis
          },
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
  