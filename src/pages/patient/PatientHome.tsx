import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Phone, Star, ArrowRight } from 'lucide-react';

export const PatientHome: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const featuredClinics = [
    {
      id: 1,
      name: "Downtown Medical Center",
      specialty: "General Practice",
      rating: 4.8,
      distance: "0.5 miles",
      address: "123 Main St, Downtown",
      phone: "(555) 123-4567",
      nextAvailable: "Today at 2:00 PM"
    },
    {
      id: 2,
      name: "City Health Clinic",
      specialty: "Family Medicine",
      rating: 4.6,
      distance: "1.2 miles",
      address: "456 Oak Ave, Midtown",
      phone: "(555) 987-6543",
      nextAvailable: "Tomorrow at 10:00 AM"
    },
    {
      id: 3,
      name: "Wellness Center",
      specialty: "Internal Medicine",
      rating: 4.9,
      distance: "2.1 miles",
      address: "789 Pine St, Uptown",
      phone: "(555) 456-7890",
      nextAvailable: "Today at 4:30 PM"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      clinic: "Downtown Medical Center",
      doctor: "Dr. Sarah Johnson",
      date: "Today",
      time: "2:00 PM",
      type: "General Checkup"
    },
    {
      id: 2,
      clinic: "City Health Clinic",
      doctor: "Dr. Michael Chen",
      date: "Friday, Dec 15",
      time: "10:30 AM",
      type: "Follow-up"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
        <p className="text-blue-100">
          Book your next appointment or manage your existing ones.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/patient/book" className="group">
          <div className="card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Book New Appointment</h3>
                <p className="text-gray-600">Find available slots and book your visit</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 ml-auto" />
            </div>
          </div>
        </Link>

        <Link to="/patient/appointments" className="group">
          <div className="card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">View Appointments</h3>
                <p className="text-gray-600">Manage your upcoming visits</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 ml-auto" />
            </div>
          </div>
        </Link>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{appointment.clinic}</h4>
                    <p className="text-sm text-gray-600">{appointment.doctor}</p>
                    <p className="text-sm text-gray-500">{appointment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{appointment.date}</p>
                  <p className="text-sm text-gray-600">{appointment.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Clinics */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Clinics</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredClinics.map((clinic) => (
            <div key={clinic.id} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{clinic.name}</h4>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{clinic.rating}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{clinic.specialty}</p>
              
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{clinic.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{clinic.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Next available: {clinic.nextAvailable}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{clinic.distance}</span>
                <Link 
                  to="/patient/book" 
                  className="btn btn-primary text-sm py-2 px-4"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};