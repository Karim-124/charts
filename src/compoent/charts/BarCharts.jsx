// src/components/charts/BarCharts.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { barChartData, barChartOptions } from '../dataCharts/barChartData';

function BarCharts() {
  return <Bar data={barChartData} options={barChartOptions} />;
}

export default BarCharts;
