// src/components/charts/PieChart.jsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { pieChartData, pieChartOptions } from '../dataCharts/pieChartData';

const PieChart = () => {
  return (
    <div className="w-full">
      <Pie data={pieChartData} options={pieChartOptions} />
    </div>
  );
};

export default PieChart;
