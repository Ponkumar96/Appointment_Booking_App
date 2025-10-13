import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Calendar, Users, Settings, Home, ArrowLeft, Stethoscope } from 'lucide-react';
import { ClinicDashboard } from './clinic/ClinicDashboard';
import { ClinicAppointments } from './clinic/ClinicAppointments';
import { ClinicPatients } from './clinic/ClinicPatients';
import { ClinicSettings } from './clinic/ClinicSettings';

export const ClinicInterface: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-semibold text-gray-900">Clinic Management</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Clinic Staff</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <Link
              to="/clinic"
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                isActive('/clinic')
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Home className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              to="/clinic/appointments"
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                isActive('/clinic/appointments')
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Appointments
            </Link>
            <Link
              to="/clinic/patients"
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                isActive('/clinic/patients')
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="w-4 h-4" />
              Patients
            </Link>
            <Link
              to="/clinic/settings"
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                isActive('/clinic/settings')
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<ClinicDashboard />} />
          <Route path="/appointments" element={<ClinicAppointments />} />
          <Route path="/patients" element={<ClinicPatients />} />
          <Route path="/settings" element={<ClinicSettings />} />
        </Routes>
      </main>
    </div>
  );
};