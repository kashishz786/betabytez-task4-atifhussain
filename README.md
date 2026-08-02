# Beta Bytez Task 4 – Full Stack MERN Blog Application

## Project Overview

This project is developed as part of **Beta Bytez Task 4**.

The goal of this project is to build a complete **MERN (MongoDB, Express.js, React.js, Node.js)** Blog Application by connecting a React frontend with a Node.js/Express backend and storing data in MongoDB Atlas.

The application allows users to:

- Register a new account
- Login securely
- Create blog posts
- Edit their own posts
- Delete their own posts
- View all blog posts
- Add comments to posts
- Store authentication using JWT
- Protect private routes
- Store all data in MongoDB Atlas

---

# 🛠 Technologies Used

## Frontend

- React.js
- React Router DOM
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- cors

---

# Features

## User Authentication

- User Registration
- User Login
- Password Encryption
- JWT Authentication

---

## Blog Management

- Create Blog Post
- Read Blog Posts
- Update Own Posts
- Delete Own Posts

---

## Comments

- Add Comments
- View Comments
- Store Comments in MongoDB

---

## Security

- JWT Protected Routes
- Password Hashing using bcryptjs
- Environment Variables

---

## Database

- MongoDB Atlas Cloud Database
- Mongoose Models
- Data Validation

---

# Installation Guide

## Step 1

Clone the repository

```bash
git clone https://github.com/yourusername/betabytez-task4-kashif.git
```

---

## Step 2

Open the project

```bash
cd betabytez-task4-kashif
```

---

# Backend Setup

Open terminal

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

Example

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal

```bash
cd client
```

Install dependencies

```bash
npm install
```

Start React application

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Environment Variables

Create a `.env` file inside the **server** folder.

```
PORT=5000

MONGO_URI=your_connection_string

JWT_SECRET=your_secret_key
```

---

# API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## Posts

### Get All Posts

```
GET /api/posts
```

### Create Post

```
POST /api/posts
```

### Update Post

```
PUT /api/posts/:id
```

### Delete Post

```
DELETE /api/posts/:id
```

---

## Comments

### Add Comment

```
POST /api/comments
```

### Get Comments

```
GET /api/comments/:postId
```

---

# Authentication

The application uses **JWT (JSON Web Token)** for authentication.

After successful login:

- JWT token is generated.
- Token is stored in Local Storage.
- Token is sent with protected API requests.

---

# 🗄 Database

The project uses:

- MongoDB Atlas
- Mongoose ODM

Collections:

- Users
- Posts
- Comments

---

# Validation

The application includes validation for:

### User

- Name Required
- Email Required
- Unique Email
- Password Minimum Length

### Post

- Title Required
- Content Required
- Category Required

### Comment

- Comment Required

---

# Learning Objectives

This project demonstrates:

- MERN Stack Development
- REST API Development
- MongoDB Integration
- Mongoose Models
- Authentication using JWT
- Password Hashing
- React Routing
- Axios API Integration
- CRUD Operations
- Environment Variables
- Cloud Database Integration

---

# Author

**Atif Hussain**

Beta Bytez – Task 4

MERN Stack Blog Application

---
# How to run Setup

# Backend:

cd server
npm install
npm run dev

# Frontend:

cd client
npm install
npm run dev
