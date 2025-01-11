import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import darkLogo from "../assets/logoDark.png";
import lightLogo from "../assets/logoLight.png";

const ordersData = [
  { id: "A-312", process: "NAUSBO", steps: ["completed", "completed", "completed"] },
  { id: "A-313", process: "BASGA2", steps: ["completed", "completed", "completed"] },
  { id: "A-317", process: "NAUSBO", steps: ["completed", "in-progress", "pending"] },
  { id: "B-461", process: "NAUSBO", steps: ["completed", "in-progress", "pending"] },
  { id: "B-462", process: "BASGA2", steps: ["completed", "completed", "pending"] },
  { id: "C-514", process: "BASGA2", steps: ["in-progress", "pending", "pending"] },
  { id: "C-515", process: "NAUSBO", steps: ["completed", "completed", "in-progress"] },
  { id: "D-618", process: "NAUSBO", steps: ["completed", "completed", "completed"] },
  { id: "D-619", process: "BASGA2", steps: ["pending", "pending", "pending"] },
  { id: "E-721", process: "BASGA2", steps: ["in-progress", "completed", "pending"] },
  { id: "E-722", process: "NAUSBO", steps: ["completed", "completed", "completed"] },
  { id: "F-823", process: "NAUSBO", steps: ["pending", "in-progress", "completed"] },
  { id: "F-824", process: "BASGA2", steps: ["completed", "completed", "completed"] },
  { id: "G-925", process: "BASGA2", steps: ["pending", "in-progress", "completed"] },
  { id: "G-926", process: "NAUSBO", steps: ["in-progress", "in-progress", "completed"] },
  { id: "H-101", process: "NAUSBO", steps: ["completed", "completed", "pending"] },
  { id: "H-102", process: "BASGA2", steps: ["completed", "pending", "pending"] },
  { id: "I-203", process: "BASGA", steps: ["in-progress", "completed", "completed"] },
  { id: "I-204", process: "NAUSBO", steps: ["completed", "completed", "completed"] },
  { id: "J-305", process: "BASGA2", steps: ["pending", "in-progress", "completed"] },
  { id: "J-306", process: "NAUSBO", steps: ["in-progress", "in-progress", "pending"] },
  { id: "K-407", process: "BASGA", steps: ["completed", "completed", "pending"] },
  { id: "K-408", process: "BASGA2", steps: ["in-progress", "pending", "completed"] },
  { id: "L-509", process: "NAUSBO", steps: ["pending", "in-progress", "in-progress"] },
  { id: "L-510", process: "BASGA", steps: ["completed", "pending", "pending"] },
  { id: "M-611", process: "BASGA2", steps: ["completed", "completed", "in-progress"] },
  { id: "M-612", process: "NAUSBO", steps: ["completed", "in-progress", "completed"] },
  { id: "N-713", process: "BASGA", steps: ["pending", "completed", "completed"] },
  { id: "N-714", process: "BASGA2", steps: ["completed", "completed", "completed"] },
  { id: "O-815", process: "NAUSBO", steps: ["in-progress", "pending", "completed"] },


];



// Step Switcher Component
function StepSwitcher({ step, index, onStepChange }) {
  const statusStyles = {
    completed: "bg-green-500 text-white shadow-md",
    "in-progress": "bg-yellow-500 text-black animate-pulse shadow-md",
    pending: "bg-gray-400 text-black",
  };

  const handleToggle = () => {
    const nextStep =
      step === "completed" ? "in-progress" : step === "in-progress" ? "pending" : "completed";
    onStepChange(index, nextStep);
  };

  return (
    <div
      className="relative z-10 flex items-center justify-center cursor-pointer"
      onClick={handleToggle}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${statusStyles[step]}`}
      >
        {step === "completed" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </div>
  );
}


// Order Card Component
function OrderCard({ id, process, steps, onStepsUpdate, darkMode }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white" : "bg-gradient-to-br from-white to-gray-100 text-gray-900"
        } border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:shadow-xl`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-extrabold tracking-tight">{id}</h3>
        <p
          className={`text-sm font-semibold uppercase ${darkMode ? "text-gray-400" : "text-green-600"
            }`}
        >
          {process}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative flex items-center justify-between mt-6">
        {/* Background Progress Line */}
        <div
          className={`absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
        ></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <StepSwitcher
            key={index}
            step={step}
            index={index}
            onStepChange={(index, newStep) => onStepsUpdate(index, newStep)}
          />
        ))}
      </div>

      {/* Footer */}
      <div
        className={`mt-6 flex justify-center text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
          }`}
      >
        <p>Click a step to update its status</p>
      </div>
    </div>
  );
}




export default function OpenOrdersPage() {
  const [orders, setOrders] = useState(ordersData);
  const [filters, setFilters] = useState({ NAUSBO: true, BASGA: true, BASGA2: true });
  const [darkMode, setDarkMode] = useState(true);

  const updateStep = (orderId, stepIndex, newStep) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, steps: order.steps.map((step, index) => (index === stepIndex ? newStep : step)) }
          : order
      )
    );
  };

  const handleToggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredOrders = orders.filter((order) => filters[order.process]);

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      <div className="flex justify-between items-center mb-8">
        <img className="w-56" src={darkMode ? darkLogo : lightLogo} alt="Logo" />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-green-600 hover:bg-green-500 text-white shadow-lg"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.343 6.343L4.93 4.93m12.728 12.728l-1.414-1.414M6.343 17.657L4.93 19.07M12 7a5 5 0 100 10 5 5 0 000-10z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Open Orders</h1>
        <div className="flex gap-6">
          {Object.keys(filters).map((key) => (
            <div key={key} className="flex items-center gap-2">
              <label className="text-sm font-medium">{key}</label>
              <Toggle
                defaultChecked={filters[key]}
                icons={false}
                className="react-toggle"
                onChange={() => handleToggleFilter(key)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              {...order}
              darkMode={darkMode}
              onStepsUpdate={(index, newStep) => updateStep(order.id, index, newStep)}
            />
          ))
        ) : (
          <p className="text-gray-500">No orders available for the selected filters.</p>
        )}
      </div>
    </div>
  );
}
