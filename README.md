# 🏨 StayVN - Hotel Booking Platform

StayVN is a modern hotel booking web platform built with **ReactJS**, **Node.js**, **Express**, and **MongoDB**.
The system allows users to search hotels, view hotel details, book rooms, manage bookings, and supports hotel manager operations.

---

# 🚀 Features

## 👤 Authentication

* User registration & login
* JWT authentication
* Protected API routes
* Role-based authorization

---

## 🏨 Hotel System

* Browse hotels
* Search & filter hotels
* View hotel details
* Hotel image gallery
* Hotel amenities
* Hotel ratings

---

## 🛏 Room Booking

* Room availability checking
* Create booking
* Booking status management
* Payment flow integration
* Booking history

---

## 💳 Payment

* VNPay integration
* Online payment support
* Booking confirmation after payment success

---

## 🧑‍💼 Hotel Manager

* Manage hotel information
* Upload hotel images
* Manage bookings
* Confirm check-in/check-out
* Booking statistics

---

# 🛠 Tech Stack

## Frontend

* ReactJS
* React Router DOM
* Axios
* CSS3
* Lucide React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Cloudinary

---

# 📂 Project Structure

```bash

```

---

# ⚙️ Installation

## 1️⃣ Clone project

```bash
git clone https://github.com/yourusername/stayvn.git
```

---

## 2️⃣ Install dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

# 🔐 Environment Variables

## Backend `.env`

```env
MONGODB_URL = 'mongodb://nhatanh:211005@ac-thpmn6j-shard-00-00.9umiqjc.mongodb.net:27017,ac-thpmn6j-shard-00-01.9umiqjc.mongodb.net:27017,ac-thpmn6j-shard-00-02.9umiqjc.mongodb.net:27017/hotel_booking?ssl=true&replicaSet=atlas-mftwsb-shard-0&authSource=admin&appName=Cluster0'

JWT_SECRET = "nhatanh"

API_PREFIX = "/api/v1"

CLOUDINARY_CLOUD_NAME = "duo4hucul"
CLOUDINARY_API_KEY = "442932861116436"
CLOUDINARY_API_SECRET = "loPZ4m7I8QullfiQLgUUnc561iY"

# VNPay
VNP_TMN_CODE = "1QXE7F08"
VNP_HASH_SECRET = "W2Z6SCRFK5M4LEMU8AACKNZ4U7DRV3W4"
VNP_URL = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"
VNP_RETURN_URL = "http://localhost:5000/api/v1/payments/vnpay-return"

# Frontend
CLIENT_URL = "http://localhost:5173"
```

---

## Frontend `.env`

```env
/* ====== ENVIRONMENT VARIABLES ====== */
VITE_API_URL=http://localhost:5000/api/v1

VITE_FALLBACK_IMAGE=https://images.unsplash.com/photo-1566073771259-6a8506099945
```

---

# ▶️ Run Project

## Start Backend

```bash
cd backend
npm run start
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# 📌 Booking Flow

```text
User selects hotel
↓
View hotel detail
↓
Choose room & dates
↓
Create temporary booking
↓
Redirect to VNPay
↓
Payment success
↓
Booking confirmed
↓
Manager check-in/check-out
```

---

# 🔒 Authentication Flow

* JWT token generated after login
* Token stored in localStorage
* Axios interceptor automatically attaches token
* Protected APIs validate token using middleware

---

# 📸 Main Pages

* Home Page
* Hotel Listing Page
* Hotel Detail Page
* Booking Page
* Login/Register Page
* My Bookings Page
* Manager Dashboard

---

# 👨‍💻 Author

Developed by:

* Frontend Developer
* Fullstack Developer
* Hotel Booking System Project

---

# 📄 License

This project is for educational and portfolio purposes.
