# PlaceBridge – College Placement Management System

## Table of Contents

* Introduction
* Key Features
* Tech Stack
* System Architecture
* User Roles
* Installation Guide
* Project Structure
* Contributors

## Introduction

PlaceBridge is a full-stack College Placement Management System designed to digitize and streamline the campus recruitment process. It connects students, Training & Placement Officers (TPOs), management, and super admins into a single unified platform.

The system improves transparency, reduces manual workload, and enables real-time tracking of placement activities such as job postings, applications, interview scheduling, and offer management.

## Key Features

### Student Portal

* Register & login securely
* Update profile and upload resume
* View and apply for job opportunities
* Track application status in real time

### TPO Dashboard

* Create and manage job postings
* Shortlist and manage applications
* Schedule interviews
* Upload offer letters

### Management Dashboard

* View placement analytics
* Monitor company and student engagement
* Access reports and statistics

### Super Admin Panel

* Manage system users (TPO, Management)
* Control platform configurations
* Oversee entire placement ecosystem

###Cloud Integration

* Secure file storage using Cloudinary
* Resume and document management

---

## Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT (JSON Web Token)

### Cloud Services

* Cloudinary (File Storage)

---

## System Architecture

Frontend (React) → REST APIs (Express.js) → MongoDB Database
↘ Cloudinary (File Storage)

---

## User Roles

* **Student** → Apply for jobs, track applications, manage profile
* **TPO** → Manage job postings, applications, interviews
* **Management** → View analytics and reports
* **Super Admin** → Full system control

---

## Installation Guide

### Prerequisites

* Node.js installed
* MongoDB running
* Cloudinary account

---

### Clone Repository

```bash
git clone https://github.com/Samruddhi-techenthusiast/PlaceBridge.git
cd PlaceBridge
```

---

## Backend Setup

```bash
cd backend
npm install
```

### Create `.env`

```env
PORT=4518
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

SMTP_USER=your_email
SMTP_PASS=your_app_password
```

### Run Backend

```bash
npm start
```

---

##  Frontend Setup

```bash
cd frontend
npm install
```

### Create `.env`

```env
VITE_BACKEND_URL=http://localhost:4518
```

### Run Frontend

```bash
npm run dev
```

---

## Project Structure

```
PlaceBridge/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── index.js
│
└── README.md
```

---

## Contributors

*  Samruddhi Patil– Developer
  

---

## Project Impact

* Digitizes campus placement process
* Reduces manual coordination effort
* Improves transparency between students and TPO
* Centralized placement tracking system

---



