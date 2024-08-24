// src/components/charts/DoughnutChart.jsx

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { doughnutChartData, doughnutChartOptions } from '../dataCharts/doughnutChartData';

const DoughnutChart = () => {
  return (
    <div className="w-full">
      <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
    </div>
  );
};

export default DoughnutChart;
