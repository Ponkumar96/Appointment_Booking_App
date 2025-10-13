import React, { useState } from 'react';
import { Settings, Clock, User, MapPin, Phone, Mail, Save, Calendar, Bell } from 'lucide-react';

export const ClinicSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    clinicName: "Downtown Medical Center",
    address: "123 Main Street, Downtown, City 12345",
    phone: "(555) 123-4567",
    email: "info@downtownmedical.com",
    website: "www.downtownmedical.com",
    workingHours: {
      monday: { start: "09:00", end: "17:00", enabled: true },
      tuesday: { start: "09:00", end: "17:00", enabled: true },
      wednesday: { start: "09:00", end: "17:00", enabled: true },
      thursday: { start: "09:00", end: "17:00", enabled: true },
      friday: { start: "09:00", end: "17:00", enabled: true },
      saturday: { start: "10:00", end: "14:00", enabled: false },
      sunday: { start: "10:00", end: "14:00", enabled: false }
    },
    appointmentDuration: 30,
    bufferTime: 15,
    maxAdvanceBooking: 30,
    reminderSettings: {
      emailReminder: true,
      smsReminder: true,
      reminderTime: 24
    }
  });

  const [activeTab, setActiveTab] = useState('general');

  const handleInputChange = (section: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleWorkingHoursChange = (day: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      workingHours: {
        ...prev.workingHours,
        [day]: {
          ...prev.workingHours[day as keyof typeof prev.workingHours],
          [field]: value
        }
      }
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to an API
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  const tabs = [
    { id: 'general', label: 'General Info', icon: Settings },
    { id: 'hours', label: 'Working Hours', icon: Clock },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Clinic Information</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="form-label">Clinic Name</label>
          <input
            type="text"
            value={settings.clinicName}
            onChange={(e) => setSettings(prev => ({ ...prev, clinicName: e.target.value }))}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            value={settings.phone}
            onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Website</label>
          <input
            type="url"
            value={settings.website}
            onChange={(e) => setSettings(prev => ({ ...prev, website: e.target.value }))}
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Address</label>
        <textarea
          value={settings.address}
          onChange={(e) => setSettings(prev => ({ ...prev, address: e.target.value }))}
          className="form-input"
          rows={3}
        />
      </div>
    </div>
  );

  const renderWorkingHours = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
      
      <div className="space-y-4">
        {Object.entries(settings.workingHours).map(([day, hours]) => (
          <div key={day} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-24">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={hours.enabled}
                  onChange={(e) => handleWorkingHoursChange(day, 'enabled', e.target.checked)}
                  className="rounded border-gray-300"
                />
                <span className="font-medium capitalize">{day}</span>
              </label>
            </div>
            
            {hours.enabled ? (
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  value={hours.start}
                  onChange={(e) => handleWorkingHoursChange(day, 'start', e.target.value)}
                  className="form-input w-32"
                />
                <span>to</span>
                <input
                  type="time"
                  value={hours.end}
                  onChange={(e) => handleWorkingHoursChange(day, 'end', e.target.value)}
                  className="form-input w-32"
                />
              </div>
            ) : (
              <span className="text-gray-500">Closed</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderAppointmentSettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Appointment Settings</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="form-label">Default Appointment Duration (minutes)</label>
          <input
            type="number"
            value={settings.appointmentDuration}
            onChange={(e) => setSettings(prev => ({ ...prev, appointmentDuration: parseInt(e.target.value) }))}
            className="form-input"
            min="15"
            max="120"
            step="15"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Buffer Time Between Appointments (minutes)</label>
          <input
            type="number"
            value={settings.bufferTime}
            onChange={(e) => setSettings(prev => ({ ...prev, bufferTime: parseInt(e.target.value) }))}
            className="form-input"
            min="0"
            max="60"
            step="5"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Maximum Advance Booking (days)</label>
          <input
            type="number"
            value={settings.maxAdvanceBooking}
            onChange={(e) => setSettings(prev => ({ ...prev, maxAdvanceBooking: parseInt(e.target.value) }))}
            className="form-input"
            min="1"
            max="365"
          />
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Email Reminders</h4>
            <p className="text-sm text-gray-600">Send appointment reminders via email</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.reminderSettings.emailReminder}
              onChange={(e) => handleInputChange('reminderSettings', 'emailReminder', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">SMS Reminders</h4>
            <p className="text-sm text-gray-600">Send appointment reminders via SMS</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.reminderSettings.smsReminder}
              onChange={(e) => handleInputChange('reminderSettings', 'smsReminder', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">Reminder Time (hours before appointment)</label>
          <select
            value={settings.reminderSettings.reminderTime}
            onChange={(e) => handleInputChange('reminderSettings', 'reminderTime', parseInt(e.target.value))}
            className="form-select"
          >
            <option value={1}>1 hour</option>
            <option value={2}>2 hours</option>
            <option value={6}>6 hours</option>
            <option value={12}>12 hours</option>
            <option value={24}>24 hours</option>
            <option value={48}>48 hours</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Clinic Settings</h2>
        <button onClick={handleSave} className="btn btn-primary">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="card">
        {activeTab === 'general' && renderGeneralSettings()}
        {activeTab === 'hours' && renderWorkingHours()}
        {activeTab === 'appointments' && renderAppointmentSettings()}
        {activeTab === 'notifications' && renderNotificationSettings()}
      </div>
    </div>
  );
};