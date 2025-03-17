# MERN Stack Student Management System

This is a **MERN Stack** (MongoDB, Express.js, React.js, Node.js) application built as part of the **Full Stack Developer & Software Engineering Internship Assignment**. The application allows admins to manage student records with CRUD operations and includes authentication features.

---

## Features

1. **Admin Authentication**:
   - Login and register using **username/password**.
   - **Google Authentication** (currently facing an issue with `Error 401: invalid_client`).

2. **Admin Dashboard**:
   - Redirect to the dashboard upon successful login.

3. **CRUD Operations for Students**:
   - **Create**: Add new students with details (ID, Name, Image, Age, Status).
   - **Read**: View a list of all students.
   - **Update**: Edit student details.
   - **Delete**: Remove students from the system.

4. **Student Status Management**:
   - Change student status to **Active** or **Inactive**.

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS (or Bootstrap)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Passport.js (Local and Google OAuth)
- **Other Libraries**: Axios, React Router, Bcrypt, JSON Web Token (JWT)

---

## Setup Instructions

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB** (local or MongoDB Atlas)

### Step 1: Clone the Repository

```bash
git clone https://github.com/07themiya/Student_Management_System.git
cd mern-student-management
```

### Step 2: Set Up the Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add the following environment variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/mern-student-management
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Step 3: Set Up the Frontend

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

4. The frontend will run on `http://localhost:3000`.

---

## Folder Structure

```
mern-student-management/
├── backend/                  # Backend (Node.js + Express.js)
│   ├── config/               # Database and Passport configuration
│   ├── controllers/          # Logic for handling routes
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   ├── .env                  # Environment variables
│   └── server.js             # Entry point for the backend
│
├── frontend/                 # Frontend (React.js)
│   ├── public/               # Static assets
│   ├── src/                  # React components and pages
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Pages (e.g., Login, Dashboard)
│   │   ├── App.js            # Main application component
│   │   └── index.js          # Entry point for the frontend
│   └── package.json          # Frontend dependencies
│
└── README.md                 # Project documentation
```

---

## Known Issues

- **Google Authentication**: Currently facing an issue with `Error 401: invalid_client`. The issue is being investigated, and I am working on resolving it.

---

## Future Improvements

- Resolve the Google Authentication issue.
- Add pagination and search functionality for the student list.
- Implement role-based access control (e.g., Admin vs. User).
- Deploy the application to a live server (e.g., Heroku, Vercel).

---

## Contact

If you have any questions or feedback, feel free to reach out:

- **Name**: Thushan Themiya Chathuranga
- **Email**: thushanthemiya@gmail.com
- **GitHub**: https://github.com/07themiya  
- **LinkedIn**: https://www.linkedin.com/in/thushan-themiya-0579201aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app 

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
```

---

### **Key Points to Include**:
1. **Project Overview**: Briefly describe the project and its purpose.
2. **Features**: Highlight the key features you implemented.
3. **Setup Instructions**: Provide clear steps to set up and run the project locally.
4. **Known Issues**: Mention any unresolved issues (e.g., Google Authentication).
5. **Future Improvements**: Show that you’re thinking ahead about how to enhance the project.
6. **Contact Information**: Make it easy for the evaluators to reach out to you.

---
