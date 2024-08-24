import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; // Required for time scales in Chart.js

const LineCharts = ({ data, options }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineCharts;
