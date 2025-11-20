# Task Manager Fullstack
A full-stack task management app built with React (Vite) and Spring Boot, featuring CRUD operations and Jenkins CI/CD.

# 🛠️ Tech Stack
- Frontend: React + Vite
- Backend: Spring Boot
- Database: MySQL
- DevOps: Jenkins CI/CD

# 🚀 Features
- Add, view, and delete tasks
- RESTful API integration
- Responsive UI
- CI/CD pipeline with Jenkins

# 🧪 Local Setup

# Backend
```bash
cd task-manager-backend
mvn spring-boot:run

# Frontend
cd task-manager-frontend
npm install
npm run dev

#  **API Endpoints**
Document your backend routes.

## 🔄 API Endpoints
| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | /api/tasks       | Fetch all tasks   |
| POST   | /api/tasks       | Create a new task |
| DELETE | /api/tasks/{id}  | Delete a task     |

## 🔁 Jenkins CI/CD
- Clones the GitHub repo
- Builds backend with Maven
- Builds frontend with npm
- Deploys both parts

## 📄 License
This project is licensed under the MIT License.
