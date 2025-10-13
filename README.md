# Clinic Appointment Booking App

A modern, responsive appointment booking application built with React and TypeScript, featuring separate interfaces for patients and clinic staff.

## Features

### Patient Interface
- **Landing Page**: Choose between patient and clinic interfaces
- **Patient Home**: Overview of upcoming appointments and featured clinics
- **Appointment Booking**: Multi-step booking form with clinic/doctor selection, date/time picking, and patient information
- **Booking Confirmation**: Detailed confirmation page with appointment details
- **My Appointments**: View and manage upcoming and past appointments

### Clinic Interface
- **Clinic Dashboard**: Overview of clinic statistics, today's appointments, and recent patients
- **Appointment Management**: View, filter, and manage all appointments with search functionality
- **Patient Management**: Comprehensive patient records with medical history and contact information
- **Clinic Settings**: Configure working hours, appointment settings, and notification preferences

## Technology Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Lucide React** for icons
- **CSS3** with modern styling and responsive design
- **Date-fns** for date manipulation

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── pages/
│   ├── LandingPage.tsx          # Main landing page
│   ├── PatientInterface.tsx     # Patient portal wrapper
│   ├── ClinicInterface.tsx      # Clinic portal wrapper
│   ├── patient/
│   │   ├── PatientHome.tsx      # Patient dashboard
│   │   ├── PatientBooking.tsx   # Appointment booking form
│   │   ├── PatientBookingConfirmation.tsx
│   │   └── PatientAppointments.tsx
│   └── clinic/
│       ├── ClinicDashboard.tsx  # Clinic overview
│       ├── ClinicAppointments.tsx
│       ├── ClinicPatients.tsx
│       └── ClinicSettings.tsx
├── App.tsx                      # Main app component
├── App.css                      # Global styles
└── index.tsx                    # Entry point
```

## Key Features Implemented

### Patient Features
- ✅ Clinic selection and doctor booking
- ✅ Multi-step appointment booking process
- ✅ Appointment confirmation with details
- ✅ View and manage personal appointments
- ✅ Responsive design for mobile and desktop

### Clinic Features
- ✅ Comprehensive dashboard with statistics
- ✅ Appointment management with filtering and search
- ✅ Patient records management
- ✅ Clinic settings configuration
- ✅ Working hours and availability management

### Technical Features
- ✅ TypeScript for type safety
- ✅ Modern React patterns with hooks
- ✅ Responsive CSS Grid and Flexbox layouts
- ✅ Clean component architecture
- ✅ Intuitive user interface design

## Usage

1. **For Patients**: Navigate to `/patient` to access the patient portal
2. **For Clinic Staff**: Navigate to `/clinic` to access the clinic management portal

## Future Enhancements

- Backend API integration
- Real-time notifications
- Payment processing
- Calendar integration
- Advanced reporting and analytics
- Multi-clinic support
- Mobile app development

## Development

The app is built with modern React best practices and is ready for production deployment. All components are fully typed with TypeScript and include comprehensive error handling and user feedback.