import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StepsPage = () => {
    const { id, step } = useParams();

    // Dark mode state
    const [darkMode, setDarkMode] = useState(true);

    // Steps data with 6 steps for every process
    const stepsData = {
        Batch_Preparation: [
            "Gather raw materials",
            "Check material specifications",
            "Measure and mix materials",
            "Calibrate batching equipment",
            "Start batching process",
            "Inspect batched material for consistency",
        ],
        Milling: [
            "Inspect and select the milling tool",
            "Secure material on the milling machine",
            "Adjust milling speed and settings",
            "Start milling process",
            "Check dimensions and surface finish",
            "Finalize and remove milled parts",
        ],
        Forming: [
            "Configure forming equipment",
            "Load material or components",
            "Preheat forming tools if necessary",
            "Perform forming operation",
            "Inspect formed parts for defects",
            "Clean and reset equipment",
        ],
        Annealing: [
            "Preheat annealing furnace",
            "Place material in furnace",
            "Set and monitor temperature profile",
            "Cool material gradually to avoid stress",
            "Inspect material post-annealing",
            "Document annealing cycle parameters",
        ],
        Cutting_and_Finishing: [
            "Mark cutting lines or guides",
            "Secure material on the cutting platform",
            "Perform precise cutting operations",
            "Polish edges and apply finishing touches",
            "Inspect for smoothness and accuracy",
            "Prepare finished pieces for delivery",
        ],
        Inspection_and_Quality_Control: [
            "Define inspection criteria and checklist",
            "Perform visual inspection",
            "Conduct dimensional accuracy tests",
            "Check for structural integrity",
            "Document inspection findings",
            "Approve or reject based on quality standards",
        ],
    };


    const steps = stepsData[step] || ["No steps available"];
    const completedSteps = 3; // Example of how many steps are completed dynamically

    // Dynamic styles for dark/light mode
    const bgColor = darkMode ? "bg-gray-900" : "bg-gray-100";
    const cardBg = darkMode ? "bg-gray-800" : "bg-gray-200";
    const completedBg = "bg-green-600 text-white";
    const pendingBg = darkMode ? "bg-gray-700 text-green-300" : "bg-gray-300 text-green-700";

    return (
        <div className={`${bgColor} min-h-screen p-6 transition-all duration-300`}>
            {/* Toggle Button */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="mb-6 px-4 py-2 rounded-lg font-medium shadow-md bg-green-600 hover:bg-green-500 text-white flex items-center justify-center"
            >
                {darkMode ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.343 6.343L4.93 4.93m12.728 12.728l-1.414-1.414M6.343 17.657L4.93 19.07M12 7a5 5 0 100 10 5 5 0 000-10z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                        />
                    </svg>
                )}
            </button>

            {/* Header Section */}
            <div className={`flex justify-between items-center ${cardBg} p-4 rounded-lg shadow-md mb-8`}>
                <h1 className="text-3xl font-bold text-green-500">
                    Status <span className="text-green-300">{id}</span>
                </h1>
                <span className={`${darkMode ? "text-white" : "text-gray-700"} text-lg`}>
                    {new Date().toLocaleString()}
                </span>
            </div>

            {/* Steps Section */}
            <div className={`${cardBg} p-6 rounded-lg shadow-md`}>
                <h2 className="text-2xl font-bold text-green-300 mb-6">
                    Steps in <span className="text-green-500">{step}</span>
                </h2>
                <div className="grid grid-cols-6 gap-4">
                    {steps.map((stepName, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-md flex items-center justify-between ${index < completedSteps ? completedBg : pendingBg
                                }`}
                        >
                            <span className="text-lg font-medium">{stepName}</span>
                            {index < completedSteps && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 ml-2"
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
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-8">
                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg">
                        Uncheck Step
                    </button>
                    <button className="bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-lg">
                        Step Completed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StepsPage;
