import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Edit, Trash2, Plus } from 'lucide-react';

export const PatientAppointments: React.FC = () => {
  const [appointments] = useState([
    {
      id: 1,
      clinic: "Downtown Medical Center",
      doctor: "Dr. Sarah Johnson",
      date: "2024-01-15",
      time: "2:00 PM",
      type: "General Checkup",
      status: "confirmed",
      address: "123 Main St, Downtown",
      phone: "(555) 123-4567"
    },
    {
      id: 2,
      clinic: "City Health Clinic",
      doctor: "Dr. Michael Chen",
      date: "2024-01-18",
      time: "10:30 AM",
      type: "Follow-up",
      status: "pending",
      address: "456 Oak Ave, Midtown",
      phone: "(555) 987-6543"
    },
    {
      id: 3,
      clinic: "Wellness Center",
      doctor: "Dr. Emily Davis",
      date: "2024-01-12",
      time: "3:15 PM",
      type: "Consultation",
      status: "completed",
      address: "789 Pine St, Uptown",
      phone: "(555) 456-7890"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const upcomingAppointments = appointments.filter(apt => 
    apt.status === 'confirmed' || apt.status === 'pending'
  );

  const pastAppointments = appointments.filter(apt => 
    apt.status === 'completed' || apt.status === 'cancelled'
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">My Appointments</h2>
        <button className="btn btn-primary">
          <Plus className="w-4 h-4" />
          Book New Appointment
        </button>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Upcoming Appointments ({upcomingAppointments.length})
        </h3>
        
        {upcomingAppointments.length === 0 ? (
          <div className="card text-center py-8">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Appointments</h4>
            <p className="text-gray-600 mb-4">You don't have any upcoming appointments scheduled.</p>
            <button className="btn btn-primary">
              <Plus className="w-4 h-4" />
              Book an Appointment
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{appointment.clinic}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-1">{appointment.doctor}</p>
                      <p className="text-sm text-gray-500 mb-3">{appointment.type}</p>
                      
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{formatDate(appointment.date)} at {appointment.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{appointment.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{appointment.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Past Appointments */}
      {pastAppointments.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Past Appointments ({pastAppointments.length})
          </h3>
          
          <div className="space-y-4">
            {pastAppointments.map((appointment) => (
              <div key={appointment.id} className="card opacity-75">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-gray-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{appointment.clinic}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-1">{appointment.doctor}</p>
                      <p className="text-sm text-gray-500 mb-3">{appointment.type}</p>
                      
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{formatDate(appointment.date)} at {appointment.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{appointment.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};