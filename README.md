# 📝 Todo App with JWT Authentication

A full-stack Todo application with user authentication using JSON Web Tokens (JWT). Users can register, log in, and manage their own personal to-do list securely.

---

## 🚀 Features

- ✅ User Registration & Login
- 🔒 JWT-based Authentication
- 📄 Create, Read, Update, Delete (CRUD) Todos
- 👤 Each user sees only their own tasks
- 🧼 Clean UI (React frontend)
- 📦 Node.js + Express.js Backend
- 💾 MongoDB Database

---

## 🛠 Tech Stack

**Frontend:**
- React
- Axios
- React Router DOM
- Tailwind CSS (optional)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcrypt.js

---

## 📁 Project Structure

```
todo-jwt-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/SivasankariM24/Todo-App-with-JWT.git
cd Todo-App-with-JWT
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```ini
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 🧪 API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register new user |
| POST | `/api/login` | Login user |
| GET | `/api/todos` | Get user's todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

---

## 📸 Screenshots

*Add your screenshots here if needed.*

---


## 🙋‍♀️ Author

Made by **Sivasankari M**
