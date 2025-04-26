# 🛡️ AI Safety Incident Dashboard

A modern, responsive web application to **view**, **filter**, **sort**, and **report AI safety incidents**.  
Built with **React.js**, focused on clean design, user experience, and mobile responsiveness.

---

## 🌐 Live Demo

> **Visit the Deployed App**: [AI Safety Incident Dashboard](https://ai-safety-incident-dashboard.netlify.app/)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router
- **Styling**: CSS3 (Custom responsive design, 3D card effects)
- **Package Manager**: npm
- **Deployment**: Netlify / Vercel / GitHub Pages

---

## ✨ Features

- 📋 **Display** a list of AI-related safety incidents.
- 🔍 **Filter** incidents based on severity (Low, Medium, High).
- 🧹 **Sort** incidents by date (Newest First or Oldest First).
- 📝 **Submit** a new AI incident using a clean, interactive form.
- 🖌️ 3D-style **card design** for a modern and aesthetic user experience.
- 📱 **Fully responsive** for Mobile, Tablet, and Desktop devices.
- 🚀 **Smooth navigation** between Home, Dashboard, and Report pages.

---

## 📁 Project Structure

```bash
public/
src/
├── components/
│   ├── IncidentCard.css
│   ├── IncidentCard.js
│   ├── IncidentList.css
│   ├── IncidentList.js
│   ├── Navbar.css
│   └── Navbar.js
├── data/
│   └── incidents.js
├── pages/
│   ├── Dashboard.css
│   ├── Dashboard.js
│   ├── Home.css
│   ├── Home.js
│   ├── ReportIncident.css
│   └── ReportIncident.js
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
README.md
package-lock.json
package.json




📦 Getting Started
Prerequisites
Node.js (v14 or above)

npm (node package manager)

Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/ai-safety-dashboard.git
cd ai-safety-dashboard
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
Open http://localhost:3000 to view the app in your browser.

🚀 Deployment
You can deploy this project on platforms like:

Vercel

Netlify

GitHub Pages

Build your project first:

bash
Copy
Edit
npm run build
Deploy the generated /build folder to your preferred hosting service.

For example, if you use Netlify, follow these steps:

Push your code to GitHub (if not already done).

Sign in to your Netlify account.

Click on "New site from Git" and connect to GitHub.

Choose your repository and deploy!
