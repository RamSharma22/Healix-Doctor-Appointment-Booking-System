<div align="center">

  <h1>🏥 HEALIX</h1>
  <h3>Full-Stack Doctor Appointment Booking & Management System</h3>

  <p>
    A powerful 3-tier healthcare management platform connecting Patients, Doctors, and Hospital Administrators seamlessly.
  </p>

  [![Live UI](https://img.shields.io/badge/Live_Demo-Patient_Portal-blue?style=for-the-badge&logo=vercel)](https://healix-frontend.vercel.app)
  [![Live Admin](https://img.shields.io/badge/Live_Demo-Admin_%26_Doctor_Portal-00c853?style=for-the-badge&logo=vercel)](https://healix-admin.vercel.app)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

  <br />
  <br />

  [![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Cloudinary](https://img.shields.io/badge/Cloudinary-Media_Storage-3448C5?style=flat-square&logo=cloudinary&logoColor=white)](https://cloudinary.com/)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
  - [1. Patient Web Portal](#1-patient-web-portal-)
  - [2. Doctor Panel](#2-doctor-panel-)
  - [3. Admin Control Center](#3-admin-control-center-)
- [Live Demos & Screenshots](#-live-demos--screenshots)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Structure](#-project-architecture--structure)
- [Getting Started & Installation](#-getting-started--installation)
  - [Prerequisites](#prerequisites)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Client Portal Setup](#3-client-portal-setup)
  - [4. Admin & Doctor Portal Setup](#4-admin--doctor-portal-setup)
- [Environment Variables](#-environment-variables)
- [API Endpoints Overview](#-api-endpoints-overview)
- [License](#-license)

---

## 🌟 Overview

**Healix** is an end-to-end full-stack web application designed for healthcare facilities, clinics, and private practices. It simplifies patient appointment scheduling and automates doctor availability and earnings tracking with a granular **3-Level Role-Based Access Control (RBAC)** architecture:

1. **Patients**: Browse specialist doctors, pick convenient date/time slots, manage appointments, and maintain personal health profile records.
2. **Doctors**: Access personal schedule, manage incoming patient bookings, mark appointments completed/cancelled, track total earnings, and adjust profile availability.
3. **Admin**: Oversee platform operations, onboard new medical staff/doctors, view global analytics, and manage system-wide appointments.

---

## ✨ Key Features

### 1. Patient Web Portal 👤
* 🔐 **Secure Authentication**: User signup, login, and JWT-backed session persistence.
* 👨‍⚕️ **Filter by Medical Specialties**: Easily browse doctors categorized by *General Physician*, *Gynecologist*, *Dermatologist*, *Pediatricians*, *Neurologist*, and *Gastroenterologist*.
* 📅 **Smart Slot Booking**: Real-time interactive calendar and time slot selector to book hassle-free consultations.
* 📋 **My Appointments Management**: View upcoming and past appointments with options to pay online or cancel bookings.
* 👤 **User Profile Customization**: Update personal info, address, phone number, DOB, and upload avatar photos powered by Cloudinary.

### 2. Doctor Panel 🧑‍⚕️
* 🔑 **Dedicated Doctor Login**: Isolated authentication workspace for medical practitioners.
* 📊 **Practitioner Dashboard**: Quick snapshot of total earnings, total completed appointments, and latest patient requests.
* 🗓️ **Appointment Controls**: Real-time status toggles to mark patient appointments as *Completed* or *Cancelled*.
* ⚙️ **Availability & Profile Setup**: Toggle online availability status instantly and adjust consultation fees, experience, and bio.

### 3. Admin Control Center 🎯
* 🛡️ **Role-Based Security**: Protected administrator dashboard route guard.
* ➕ **Doctor Onboarding**: Form to add new doctors with photo upload, specialty selection, degree, fees, experience, address, and credentials.
* 📈 **System Overview**: Insights into total registered doctors, appointment counts, and overall revenue stats.
* 🗂️ **Global Appointment Register**: Complete view and administration of all patient bookings across all registered doctors.

---

## 🌐 Live Demos & Screenshots

| Portal | Live Link |
| :--- | :--- |
| 🌐 **Patient Web App UI** | [healix-frontend.vercel.app](https://healix-frontend.vercel.app) |
| 🎯 **Admin & Doctor Panel** | [healix-admin.vercel.app](https://healix-admin.vercel.app) |

<br/>

### 📱 User Dashboard
![User UI](https://github.com/user-attachments/assets/f953ae81-7cc8-4b6b-8101-c3aa47d0aada)

---

### 🧑‍⚕️ Doctor Panel
![Doctor Panel](https://github.com/user-attachments/assets/ed488e0a-a61a-4cb1-b95a-f19b9135f9b2)

---

### 🎯 Admin Panel
![Admin Panel](https://github.com/user-attachments/assets/5479b3c0-0663-41ec-9fe2-17434249155c)

---

## 🛠️ Tech Stack

### Frontend (Clientside & Admin App)
- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **UI Notifications**: [React-Toastify](https://fkhadra.github.io/react-toastify/)

### Backend API
- **Runtime**: [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
- **Authentication**: JSON Web Tokens (`jsonwebtoken`) & `bcrypt` for password hashing
- **File Uploads**: `multer` + [Cloudinary SDK](https://cloudinary.com/) for cloud image storage
- **Input Validation**: `validator`

---

## 📂 Project Architecture & Structure

```
Healix/
├── backend/                  # Express REST API Server
│   ├── config/               # Database & Cloudinary Connection Setup
│   ├── controllers/          # Business logic for Admin, Doctor, and User
│   ├── middlewares/          # Auth middleware (Admin, Doctor, User) & Multer
│   ├── models/               # Mongoose schemas (Doctor, User, Appointment)
│   ├── routes/               # API Express routers
│   ├── server.js             # Express entry point
│   └── vercel.json           # Vercel deployment config
│
├── clientside/               # Patient Web Portal (React + Vite + Tailwind)
│   ├── src/
│   │   ├── components/       # Reusable UI components (Navbar, Header, Footer, etc.)
│   │   ├── context/          # React Context API for App State
│   │   ├── pages/            # App pages (Home, Doctors, Booking, MyProfile, etc.)
│   │   └── App.jsx           # Client router setup
│   └── vite.config.js
│
└── admin/                    # Admin & Doctor Dashboard (React + Vite + Tailwind)
    ├── src/
    │   ├── context/          # Admin & Doctor state contexts
    │   ├── pages/            # Admin & Doctor dashboard views
    │   └── App.jsx           # Protected routes setup
    └── vite.config.js
```

---

## 🚀 Getting Started & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string
- [Cloudinary](https://cloudinary.com/) account for image uploads

---

### 1. Clone Repository

```bash
git clone https://github.com/RamSharma22/Healix-Doctor-Appointment-Booking-System.git
cd Healix-Doctor-Appointment-Booking-System
```

---

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment variable file
touch .env
```

Add required variables to `backend/.env`:
```env
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/healix
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@healix.com
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

Start backend development server:
```bash
npm run server
```
> The API server will run at `http://localhost:4000`.

---

### 3. Client Portal Setup

Open a new terminal window:
```bash
# Navigate to clientside directory
cd clientside

# Install dependencies
npm install

# Create environment file
touch .env
```

Add required variable to `clientside/.env`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Start client app:
```bash
npm run dev
```
> Access Patient Web App at `http://localhost:5173`.

---

### 4. Admin & Doctor Portal Setup

Open another terminal window:
```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Create environment file
touch .env
```

Add required variable to `admin/.env`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Start Admin & Doctor app:
```bash
npm run dev
```
> Access Admin & Doctor Panel at `http://localhost:5174`.

---

## 🔑 Environment Variables

| Variable Name | Location | Description |
| :--- | :--- | :--- |
| `PORT` | Backend `.env` | Port on which Node.js Express server runs |
| `MONGODB_URI` | Backend `.env` | MongoDB Atlas database connection string |
| `JWT_SECRET` | Backend `.env` | Secret key used for signing JWT tokens |
| `ADMIN_EMAIL` | Backend `.env` | Credentials for Admin authentication |
| `ADMIN_PASSWORD` | Backend `.env` | Passcode for Admin authentication |
| `CLOUDINARY_NAME` | Backend `.env` | Cloudinary account name |
| `CLOUDINARY_API_KEY` | Backend `.env` | Cloudinary API Key |
| `CLOUDINARY_SECRET_KEY` | Backend `.env` | Cloudinary API Secret |
| `VITE_BACKEND_URL` | Frontend & Admin `.env` | Backend REST API server URL |

---

## 🛰️ API Endpoints Overview

| Module | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Admin** | `POST` | `/api/admin/login` | Admin login & token generation |
| **Admin** | `POST` | `/api/admin/add-doctor` | Onboard new doctor (with photo) |
| **Admin** | `GET` | `/api/admin/all-doctors` | Fetch list of registered doctors |
| **Admin** | `GET` | `/api/admin/appointments` | Get system-wide appointments |
| **Doctor** | `POST` | `/api/doctor/login` | Doctor login authentication |
| **Doctor** | `GET` | `/api/doctor/appointments` | Doctor's assigned appointments |
| **Doctor** | `POST` | `/api/doctor/complete-appointment` | Mark appointment completed |
| **Doctor** | `POST` | `/api/doctor/cancel-appointment` | Cancel patient appointment |
| **User** | `POST` | `/api/user/register` | Patient account signup |
| **User** | `POST` | `/api/user/login` | Patient login authentication |
| **User** | `POST` | `/api/user/book-appointment` | Reserve appointment slot |
| **User** | `GET` | `/api/user/appointments` | Patient's booked appointments |

---

## 📄 License

This project is licensed under the [MIT License].





