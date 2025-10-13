import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Stethoscope, Clock } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Clinic Appointment Booking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your healthcare experience with our easy-to-use appointment booking system
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Patient Interface Card */}
          <Link to="/patient" className="group">
            <div className="card hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Book an Appointment
                </h2>
                <p className="text-gray-600 mb-6">
                  Find available time slots, book appointments, and manage your healthcare visits with ease.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>View available time slots</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Book appointments online</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Manage your bookings</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Clinic Interface Card */}
          <Link to="/clinic" className="group">
            <div className="card hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Clinic Management
                </h2>
                <p className="text-gray-600 mb-6">
                  Manage appointments, view patient information, and handle clinic operations efficiently.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Manage appointment schedule</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>View patient information</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Set availability hours</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Choose your role to get started
          </p>
        </div>
      </div>
    </div>
  );
};