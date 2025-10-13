import React, { useState } from 'react';
import { User, Phone, Mail, Calendar, Search, Filter, Edit, Trash2, Plus, Eye } from 'lucide-react';

export const ClinicPatients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const patients = [
    {
      id: 1,
      name: "John Smith",
      email: "john@email.com",
      phone: "(555) 123-4567",
      dateOfBirth: "1985-03-15",
      lastVisit: "2024-01-10",
      nextAppointment: "2024-01-15",
      status: "Active",
      totalVisits: 12,
      medicalHistory: ["Hypertension", "Diabetes Type 2"],
      notes: "Regular patient, good compliance with treatment"
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@email.com",
      phone: "(555) 987-6543",
      dateOfBirth: "1990-07-22",
      lastVisit: "2024-01-08",
      nextAppointment: "2024-01-20",
      status: "Active",
      totalVisits: 8,
      medicalHistory: ["Allergies"],
      notes: "New patient, excellent response to treatment"
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@email.com",
      phone: "(555) 456-7890",
      dateOfBirth: "1978-11-08",
      lastVisit: "2024-01-05",
      nextAppointment: null,
      status: "Inactive",
      totalVisits: 5,
      medicalHistory: ["High Cholesterol"],
      notes: "Patient moved to different city"
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@email.com",
      phone: "(555) 321-0987",
      dateOfBirth: "1992-04-12",
      lastVisit: "2024-01-12",
      nextAppointment: "2024-01-25",
      status: "Active",
      totalVisits: 3,
      medicalHistory: [],
      notes: "New patient, first visit completed"
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@email.com",
      phone: "(555) 654-3210",
      dateOfBirth: "1983-09-30",
      lastVisit: "2024-01-14",
      nextAppointment: "2024-02-01",
      status: "Active",
      totalVisits: 15,
      medicalHistory: ["Asthma", "Seasonal Allergies"],
      notes: "Long-term patient, well-managed conditions"
    }
  ];

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
        <div className="flex items-center gap-4">
          <button className="btn btn-primary">
            <Plus className="w-4 h-4" />
            Add Patient
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-group">
            <label className="form-label">Search Patients</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
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
              <option value="all">All Patients</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Actions</label>
            <button className="btn btn-outline w-full">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </button>
          </div>
        </div>
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                  <p className="text-sm text-gray-600">Age: {calculateAge(patient.dateOfBirth)}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                patient.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {patient.status}
              </span>
            </div>

            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{patient.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{patient.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Last visit: {formatDate(patient.lastVisit)}</span>
              </div>
            </div>

            {patient.medicalHistory.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Medical History</h4>
                <div className="flex flex-wrap gap-1">
                  {patient.medicalHistory.map((condition, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>Total visits: {patient.totalVisits}</span>
              {patient.nextAppointment && (
                <span>Next: {formatDate(patient.nextAppointment)}</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button className="btn btn-outline flex-1 text-sm py-2">
                <Eye className="w-4 h-4" />
                View Details
              </button>
              <button className="btn btn-outline text-sm py-2 px-3">
                <Edit className="w-4 h-4" />
              </button>
              <button className="btn btn-outline text-sm py-2 px-3 text-red-600 hover:text-red-700">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="card text-center py-12">
          <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No patients found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search criteria or add a new patient.</p>
          <button className="btn btn-primary">
            <Plus className="w-4 h-4" />
            Add First Patient
          </button>
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {patients.length}
          </div>
          <div className="text-sm text-gray-600">Total Patients</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {patients.filter(p => p.status === 'Active').length}
          </div>
          <div className="text-sm text-gray-600">Active Patients</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {patients.filter(p => p.nextAppointment).length}
          </div>
          <div className="text-sm text-gray-600">With Upcoming Appointments</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {Math.round(patients.reduce((acc, p) => acc + p.totalVisits, 0) / patients.length)}
          </div>
          <div className="text-sm text-gray-600">Avg Visits per Patient</div>
        </div>
      </div>
    </div>
  );
};