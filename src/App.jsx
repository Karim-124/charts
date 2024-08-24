import React from 'react';
import { Chart, LineElement, PointElement, LinearScale, TimeScale, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date adapter
import { Line } from 'react-chartjs-2';
import LineCharts from './compoent/charts/LineCharts';
import { lineChartData, lineChartOptions } from './compoent/dataCharts/lineChartData';
import BarCharts from './compoent/charts/BarCharts';

Chart.register(LineElement, PointElement, LinearScale, TimeScale, Title, Tooltip, Legend);

function App() {
  return (
    <div className="App w-1/2 mx-auto flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-center text-2xl font-bold mb-6">Performance Dashboard</h1>
    <BarCharts />
  </div>
  
  );
}

export default App;
