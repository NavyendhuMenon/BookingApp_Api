# BookingApp_Api


## Description

This is a simple backend for an Activity Booking App built with **Node.js**, **Express.js**, and **MongoDB**. Users can register, log in, view available activities, book activities, and view their booked activities.

## Features

- **User Registration & Login**: Users can register with their details and log in with email and password to receive a JWT token.
- **List Activities**: Public endpoint to list available activities like cricket, football, movies, etc.
- **Book an Activity**: Authenticated users can book activities using an `activityCode`.
- **Get My Bookings**: Users can view all the activities they have booked.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT Token-based authentication

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/NavyendhuMenon/BookingApp_Api
```

### 2. Install Dependencies

Run the following command to install all the required dependencies:

```bash

npm install

```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following:

```env
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
NODE_ENV=production
```

- `MONGO_URI`: Connection string for your MongoDB database.
- `JWT_SECRET`: Secret key for signing JWT tokens.

### 4. Run the Application

To start the development server, run:

```bash
npm start
```

The server will run at `http://localhost:3000`.

### 5. Testing Endpoints in Postman

- **Register**:

  - **Method**: `POST`
  - **Endpoint**: `/register`
  - **Request Body** (JSON):
    ```json
    {
      "name": "Your Name",
      "email": "user@example.com",
      "phone": "1234567890",
      "password": "your_password"
    }
    ```
  - **Response**:  Sets a JWT token in an HTTP-only cookie and returns a success message.

- **Login**:

  - **Method**: `POST`
  - **Endpoint**: `/login`
  - **Request Body** (JSON):
    ```json
    {
      "email": "user@example.com",
      "password": "your_password"
    }
    ```
  - **Response**: Returns a success message and JWT token that should be used for authentication in subsequent requests.

- **List Activities**:

  - **Method**: `GET`
  - **Endpoint**: `/activities`
  - **Response**: Returns a list of available activities.
  - **Auth**: Not required.

- **Book an Activity**:

  - **Method**: `POST`
  - **Endpoint**: `/bookings`
  - **Authentication**:
    - 'JWT token stored in cookie (automatically sent if logged in)'
  - **Request Body** (JSON):
    ```json
    {
      "activityCode": "ACTIVITY_CODE"
    }
    ```
  - **Response**: Confirms the activity has been booked.

- **Get My Bookings**:
  - **Method**: `GET`
  - **Endpoint**: `/mybookings`
  - **Authentication**:
    - `JWT token stored in cookie`
  - **Response**: Returns the list of activities booked by the logged in user.


## Project Structure

```
/activity-booking-app
│
├── /config           # mongodb config logic
├── /controllers      # Controller logic for handling requests
├── /models           # Mongoose models for database interaction
├── /routes           # Express routes for handling endpoints
├── /middleware       # Middleware for JWT authentication
├── /config           # Configuration files (e.g., database connection)
├── .env              # Environment variables
├── index.js          # Entry point of the application
└── README.md         # Project documentation
```

