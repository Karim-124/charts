import React from 'react';
import Sidebar from './Sidebar';
import AreaChart from './charts/AreaCharts';
import BarCharts from './charts/BarCharts';
import PieChart from './charts/PieChart';
import ColumnCharts from './charts/ColumnCharts';
import LineCharts from './charts/LineCharts';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1">
      <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">Your overview and performance metrics</p>
        </div>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2  lg:grid-cols-6  ">
          <div className="bg-white p-6 shadow rounded-lg col-span-3">
            <h2 className="text-xl font-medium mb-4 text-gray-700">Area Chart</h2>
            <AreaChart />
          </div>
          <div className="bg-white p-6 shadow rounded-lg col-span-3">
            <h2 className="text-xl font-medium mb-4 text-gray-700">Bar Chart</h2>
            <BarCharts />
          </div>
          <div className="bg-white p-6 shadow rounded-lg col-span-2">
            <h2 className="text-xl font-medium mb-4 text-gray-700">Pie Chart</h2>
            <PieChart />
          </div>
          <div className="bg-white p-6 shadow rounded-lg col-span-4 ">
            <h2 className="text-xl font-medium mb-4 text-gray-700">Line Chart</h2>
            <LineCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
