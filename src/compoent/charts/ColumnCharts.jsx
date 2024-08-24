// src/components/charts/ColumnCharts.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { columnChartData, columnChartOptions } from '../dataCharts/columnChartData';

function ColumnCharts() {
  return <Bar data={columnChartData} options={columnChartOptions} />;
}

export default ColumnCharts;
