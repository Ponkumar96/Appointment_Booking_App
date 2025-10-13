import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export const PatientBooking: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clinic: '',
    doctor: '',
    date: '',
    time: '',
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    reason: ''
  });

  const clinics = [
    { id: 1, name: "Downtown Medical Center", address: "123 Main St, Downtown" },
    { id: 2, name: "City Health Clinic", address: "456 Oak Ave, Midtown" },
    { id: 3, name: "Wellness Center", address: "789 Pine St, Uptown" }
  ];

  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "General Practice" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Family Medicine" },
    { id: 3, name: "Dr. Emily Davis", specialty: "Internal Medicine" }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Booking submitted:', formData);
    navigate('/patient/booking-confirmation', { state: { appointment: formData } });
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Select Clinic & Doctor</h3>
      
      <div className="form-group">
        <label className="form-label">Choose Clinic</label>
        <select
          name="clinic"
          value={formData.clinic}
          onChange={handleInputChange}
          className="form-select"
          required
        >
          <option value="">Select a clinic</option>
          {clinics.map(clinic => (
            <option key={clinic.id} value={clinic.name}>
              {clinic.name} - {clinic.address}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Choose Doctor</label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleInputChange}
          className="form-select"
          required
        >
          <option value="">Select a doctor</option>
          {doctors.map(doctor => (
            <option key={doctor.id} value={doctor.name}>
              {doctor.name} - {doctor.specialty}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Select Date & Time</h3>
      
      <div className="form-group">
        <label className="form-label">Choose Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="form-input"
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Available Time Slots</label>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map(time => (
            <button
              key={time}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, time }))}
              className={`p-3 text-sm border rounded-lg text-center transition-colors ${
                formData.time === time
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Patient Information</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="patientPhone"
            value={formData.patientPhone}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          name="patientEmail"
          value={formData.patientEmail}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Reason for Visit</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
          className="form-input"
          rows={3}
          placeholder="Briefly describe the reason for your visit"
          required
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate('/patient')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNumber
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Clinic & Doctor</span>
          <span>Date & Time</span>
          <span>Patient Info</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="card">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1}
            className="btn btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary"
            >
              Book Appointment
            </button>
          )}
        </div>
      </form>
    </div>
  );
};