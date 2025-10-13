import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, MapPin, User, Phone, Mail, ArrowLeft } from 'lucide-react';

export const PatientBookingConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointment = location.state?.appointment;

  if (!appointment) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Appointment Found</h2>
          <p className="text-gray-600 mb-6">The appointment information could not be found.</p>
          <button
            onClick={() => navigate('/patient')}
            className="btn btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate('/patient')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Booking Confirmation</h2>
      </div>

      {/* Success Message */}
      <div className="card text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Appointment Booked Successfully!
        </h3>
        <p className="text-gray-600">
          You will receive a confirmation email shortly with all the details.
        </p>
      </div>

      {/* Appointment Details */}
      <div className="card mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{appointment.clinic}</p>
              <p className="text-sm text-gray-600">{appointment.doctor}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{appointment.date}</p>
              <p className="text-sm text-gray-600">{appointment.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{appointment.patientName}</p>
              <p className="text-sm text-gray-600">Patient</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{appointment.patientPhone}</p>
              <p className="text-sm text-gray-600">Contact Number</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{appointment.patientEmail}</p>
              <p className="text-sm text-gray-600">Email Address</p>
            </div>
          </div>

          {appointment.reason && (
            <div className="pt-4 border-t">
              <h4 className="font-medium text-gray-900 mb-2">Reason for Visit</h4>
              <p className="text-gray-600">{appointment.reason}</p>
            </div>
          )}
        </div>
      </div>

      {/* Important Notes */}
      <div className="card mb-6 bg-yellow-50 border-yellow-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Please arrive 15 minutes before your appointment time</li>
          <li>• Bring a valid ID and insurance card if applicable</li>
          <li>• If you need to reschedule or cancel, please call the clinic at least 24 hours in advance</li>
          <li>• You will receive a reminder 24 hours before your appointment</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/patient/appointments')}
          className="btn btn-primary flex-1"
        >
          View My Appointments
        </button>
        <button
          onClick={() => navigate('/patient')}
          className="btn btn-outline flex-1"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};