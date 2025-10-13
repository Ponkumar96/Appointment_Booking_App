import React from 'react';
import { Calendar, Users, Clock, TrendingUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export const ClinicDashboard: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const stats = {
    totalAppointments: 156,
    todayAppointments: 12,
    pendingAppointments: 8,
    completedAppointments: 142,
    totalPatients: 89,
    newPatients: 5
  };

  const todayAppointments = [
    {
      id: 1,
      patientName: "John Smith",
      time: "9:00 AM",
      type: "General Checkup",
      status: "confirmed",
      doctor: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      patientName: "Jane Doe",
      time: "9:30 AM",
      type: "Follow-up",
      status: "confirmed",
      doctor: "Dr. Michael Chen"
    },
    {
      id: 3,
      patientName: "Bob Johnson",
      time: "10:00 AM",
      type: "Consultation",
      status: "pending",
      doctor: "Dr. Emily Davis"
    },
    {
      id: 4,
      patientName: "Alice Brown",
      time: "10:30 AM",
      type: "Vaccination",
      status: "confirmed",
      doctor: "Dr. Sarah Johnson"
    },
    {
      id: 5,
      patientName: "Charlie Wilson",
      time: "11:00 AM",
      type: "Physical Exam",
      status: "completed",
      doctor: "Dr. Michael Chen"
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: "John Smith",
      lastVisit: "2024-01-10",
      nextAppointment: "2024-01-15",
      status: "Active"
    },
    {
      id: 2,
      name: "Jane Doe",
      lastVisit: "2024-01-08",
      nextAppointment: "2024-01-20",
      status: "Active"
    },
    {
      id: 3,
      name: "Bob Johnson",
      lastVisit: "2024-01-05",
      nextAppointment: null,
      status: "Inactive"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

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

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to Clinic Management</h2>
        <p className="text-blue-100">
          Here's an overview of your clinic's performance and today's schedule.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Appointments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalAppointments}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+12% from last month</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.todayAppointments}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span>8 confirmed, 4 pending</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Patients</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalPatients}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span>+{stats.newPatients} new this week</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedAppointments}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span>91% completion rate</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Today's Appointments</h3>
          <div className="card">
            <div className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(appointment.status)}
                    <div>
                      <p className="font-medium text-gray-900">{appointment.patientName}</p>
                      <p className="text-sm text-gray-600">{appointment.type} - {appointment.doctor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{appointment.time}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Patients */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Patients</h3>
          <div className="card">
            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{patient.name}</p>
                      <p className="text-sm text-gray-600">
                        Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      patient.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {patient.status}
                    </span>
                    {patient.nextAppointment && (
                      <p className="text-xs text-gray-500 mt-1">
                        Next: {new Date(patient.nextAppointment).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card text-center">
          <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Manage Appointments</h4>
          <p className="text-sm text-gray-600 mb-4">View and manage all appointments</p>
          <button className="btn btn-primary w-full">View Appointments</button>
        </div>

        <div className="card text-center">
          <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Patient Records</h4>
          <p className="text-sm text-gray-600 mb-4">Access patient information</p>
          <button className="btn btn-primary w-full">View Patients</button>
        </div>

        <div className="card text-center">
          <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Clinic Settings</h4>
          <p className="text-sm text-gray-600 mb-4">Configure clinic preferences</p>
          <button className="btn btn-primary w-full">Open Settings</button>
        </div>
      </div>
    </div>
  );
};