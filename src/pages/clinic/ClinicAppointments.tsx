import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Search, Filter, Edit, Trash2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export const ClinicAppointments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const appointments = [
    {
      id: 1,
      patientName: "John Smith",
      patientPhone: "(555) 123-4567",
      patientEmail: "john@email.com",
      doctor: "Dr. Sarah Johnson",
      date: "2024-01-15",
      time: "9:00 AM",
      type: "General Checkup",
      status: "confirmed",
      notes: "Regular checkup, no specific concerns"
    },
    {
      id: 2,
      patientName: "Jane Doe",
      patientPhone: "(555) 987-6543",
      patientEmail: "jane@email.com",
      doctor: "Dr. Michael Chen",
      date: "2024-01-15",
      time: "9:30 AM",
      type: "Follow-up",
      status: "confirmed",
      notes: "Follow-up for previous treatment"
    },
    {
      id: 3,
      patientName: "Bob Johnson",
      patientPhone: "(555) 456-7890",
      patientEmail: "bob@email.com",
      doctor: "Dr. Emily Davis",
      date: "2024-01-15",
      time: "10:00 AM",
      type: "Consultation",
      status: "pending",
      notes: "New patient consultation"
    },
    {
      id: 4,
      patientName: "Alice Brown",
      patientPhone: "(555) 321-0987",
      patientEmail: "alice@email.com",
      doctor: "Dr. Sarah Johnson",
      date: "2024-01-15",
      time: "10:30 AM",
      type: "Vaccination",
      status: "confirmed",
      notes: "Annual flu vaccination"
    },
    {
      id: 5,
      patientName: "Charlie Wilson",
      patientPhone: "(555) 654-3210",
      patientEmail: "charlie@email.com",
      doctor: "Dr. Michael Chen",
      date: "2024-01-14",
      time: "2:00 PM",
      type: "Physical Exam",
      status: "completed",
      notes: "Annual physical examination completed"
    },
    {
      id: 6,
      patientName: "Diana Prince",
      patientPhone: "(555) 789-0123",
      patientEmail: "diana@email.com",
      doctor: "Dr. Emily Davis",
      date: "2024-01-13",
      time: "3:00 PM",
      type: "Consultation",
      status: "cancelled",
      notes: "Patient cancelled due to emergency"
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

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    
    const matchesDate = dateFilter === 'all' || 
                       (dateFilter === 'today' && appointment.date === new Date().toISOString().split('T')[0]) ||
                       (dateFilter === 'upcoming' && new Date(appointment.date) > new Date());
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Appointment Management</h2>
        <div className="flex items-center gap-4">
          <button className="btn btn-primary">
            <Calendar className="w-4 h-4" />
            Add Appointment
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="form-group">
            <label className="form-label">Search</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients, doctors, or types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="form-select"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Date</label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="form-select"
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Actions</label>
            <button className="btn btn-outline w-full">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Patient</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Doctor</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Date & Time</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{appointment.patientName}</p>
                      <p className="text-sm text-gray-600">{appointment.patientPhone}</p>
                      <p className="text-sm text-gray-500">{appointment.patientEmail}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{appointment.doctor}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{formatDate(appointment.date)}</p>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">{appointment.type}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(appointment.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAppointments.length === 0 && (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {appointments.filter(apt => apt.status === 'confirmed').length}
          </div>
          <div className="text-sm text-gray-600">Confirmed</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {appointments.filter(apt => apt.status === 'pending').length}
          </div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {appointments.filter(apt => apt.status === 'completed').length}
          </div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-red-600 mb-1">
            {appointments.filter(apt => apt.status === 'cancelled').length}
          </div>
          <div className="text-sm text-gray-600">Cancelled</div>
        </div>
      </div>
    </div>
  );
};