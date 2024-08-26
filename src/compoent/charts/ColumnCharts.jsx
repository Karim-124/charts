// src/components/charts/ColumnCharts.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { columnChartData, columnChartOptions } from '../dataCharts/columnChartData';

function ColumnCharts() {
  return(
    <>
   <div className="flex flex-col bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4">
      <header className="px-4 py-3 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Real Time Value</h2>
      </header>
      <div className="flex justify-center items-center p-4">
           <Bar data={columnChartData} options={columnChartOptions} />;

      </div>
    </div> 
    </>
  )
}

export default ColumnCharts;
