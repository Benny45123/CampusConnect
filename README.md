# CampusConnect 🎓

**CampusConnect** is a full-stack, campus-centric digital hub designed for students to share articles, academic resources, and insights. It features a modern, Medium-style writing experience and robust community features to foster knowledge sharing within university environments.

<p align="center">
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fcampus-connect-frontend.vercel.app%2F&style=for-the-badge" alt="Website Status">
  <img src="https://img.shields.io/github/stars/Benny45123/CampusConnect?style=for-the-badge" alt="Stars">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="License">
</p>

---

## 🚀 Tech Stack

### **Frontend**
<p align="left">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/react--router-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
</p>

### **Backend & Database**
<p align="left">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" />
</p>

### **Infrastructure & Tools**
<p align="left">
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white" alt="Cloudinary" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="Postman" />
</p>

---

## ✨ Key Features

-   **Medium-Style Editor:** A sleek, intuitive writing interface for creating and formatting articles.
-   **Image Uploads:** Seamless media integration and optimization powered by **Cloudinary**.
-   **Smart Content API:** Automated read-time calculation and auto-tagging for better discoverability.
-   **Secure Authentication:** Persistent **JWT authentication** using `HttpOnly` cookies for maximum security.
-   **Resource Sharing:** Dedicated space for students to upload, categorize, and find academic resources.
-   **Responsive Design:** A mobile-first approach ensuring a clean experience on all devices.

---

## 📁 Project Structure

```text
CampusConnect/
├── backend/                # Express & Node.js API
│   ├── config/             # Database & Cloudinary configurations
│   ├── controllers/        # Route logic (Auth, Articles, Resources)
│   ├── middleware/         # JWT verification & Error handling
│   ├── models/             # Mongoose Schemas (User, Article, Resource)
│   ├── routes/             # API Endpoints
│   └── server.js           # Entry point
├── frontend/               # React (Vite) Application
│   ├── src/
│   │   ├── components/     # Reusable UI elements (Navbar, Cards, Loaders)
│   │   ├── pages/          # Main views (Home, Editor, Profile, Login)
│   │   ├── context/        # Auth & Global State management
│   │   └── utils/          # API helpers & formatting
│   └── tailwind.config.js  # Styling configuration
└── README.md
```
🚀 Getting Started
Prerequisites

    Node.js (v18+)

    MongoDB Atlas account

    Cloudinary account

Installation

    Clone the repository:
    Bash

    git clone [https://github.com/Benny45123/CampusConnect.git](https://github.com/Benny45123/CampusConnect.git)
    cd CampusConnect

    Setup Backend:
    Bash

    cd backend
    npm install

    Create a .env file in the backend folder:
    Code snippet

    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    CLOUDINARY_CLOUD_NAME=your_name
    CLOUDINARY_API_KEY=your_key
    CLOUDINARY_API_SECRET=your_secret

    Start the server:
    Bash

    npm start

    Setup Frontend:
    Bash

    cd ../frontend
    npm install
    npm run dev

📄 License

This project is licensed under the MIT License.

---

## 👥 Contributors

<p align="center">
  <table align="center">
    <tr>
      <td align="center">
        <a href="https://github.com/Benny45123">
          <img src="https://github.com/Benny45123.png" width="100px;" alt="Benny"/><br />
          <sub><b>Benny</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="#">
          <img src="https://ui-avatars.com/api/?name=Ekshith&background=0D8ABC&color=fff&size=100" width="100px;" alt="Ekshith"/><br />
          <sub><b>Ekshith</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="#">
          <img src="https://ui-avatars.com/api/?name=Raju&background=646CFF&color=fff&size=100" width="100px;" alt="Raju"/><br />
          <sub><b>Raju</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="#">
          <img src="https://ui-avatars.com/api/?name=Vinay&background=4ea94b&color=fff&size=100" width="100px;" alt="Vinay"/><br />
          <sub><b>Vinay</b></sub>
        </a>
      </td>
    </tr>
  </table>
</p>
