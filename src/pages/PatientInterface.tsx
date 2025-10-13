import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Calendar, User, Home, ArrowLeft } from 'lucide-react';
import { PatientHome } from './patient/PatientHome';
import { PatientBooking } from './patient/PatientBooking';
import { PatientAppointments } from './patient/PatientAppointments';
import { PatientBookingConfirmation } from './patient/PatientBookingConfirmation';

export const PatientInterface: React.FC = () => {
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
              <h1 className="text-xl font-semibold text-gray-900">Patient Portal</h1>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">Patient</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <Link
              to="/patient"
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                isActive('/patient')
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              to="/patient/book"
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                isActive('/patient/book')
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
            <Link
              to="/patient/appointments"
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                isActive('/patient/appointments')
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Calendar className="w-4 h-4" />
              My Appointments
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<PatientHome />} />
          <Route path="/book" element={<PatientBooking />} />
          <Route path="/appointments" element={<PatientAppointments />} />
          <Route path="/booking-confirmation" element={<PatientBookingConfirmation />} />
        </Routes>
      </main>
    </div>
  );
};