import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductionOverview from './compoent/ProductionOverview';
import StepsPage from './compoent/StepsPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductionOverview />} />
        <Route path="/steps/:id/:step" element={<StepsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
