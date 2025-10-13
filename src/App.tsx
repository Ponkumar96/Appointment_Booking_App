import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PatientInterface } from './pages/PatientInterface';
import { ClinicInterface } from './pages/ClinicInterface';
import { LandingPage } from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/patient/*" element={<PatientInterface />} />
          <Route path="/clinic/*" element={<ClinicInterface />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;