// src/components/charts/AreaCharts.jsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { areaChartData, areaChartOptions } from '../dataCharts/areaChartData';

function AreaCharts() {
  return <Line data={areaChartData} options={areaChartOptions} />;
}

export default AreaCharts;
