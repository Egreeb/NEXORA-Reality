# NEXORA REALTY

### Discover Your Next Address

A responsive real-estate landing page designed for **NEXORA REALTY**, focused on showcasing premium properties in Dubai and capturing potential customer enquiries.

## 🚀 Live Website

GitHub Pages:
`https://egreeb.github.io/YOUR-REPOSITORY-NAME/`

## 📌 Features

* Responsive real-estate landing page
* Bootstrap-based design
* Hero section with property-focused CTA
* Lead enquiry form
* Project selection
* Budget selection
* Client-side form validation
* Loading spinner during form submission
* Thank-you success popup
* API integration using JavaScript `fetch()`
* Mobile-friendly navigation
* SEO-friendly HTML structure
* Responsive property sections

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Bootstrap
* REST API
* Node.js / Express.js
* MongoDB

## 📋 Lead Form Flow

```text
Landing Page
     ↓
Lead Form
     ↓
JavaScript Validation
     ↓
Fetch API
     ↓
Node.js / Express API
     ↓
MongoDB
```

## 📂 Project Structure

```text
NEXORA-REALTY/
│
├── index.html
├── about-us.html
├── off-plan.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   └── properties/
│
└── README.md
```

## 🔗 Backend API

The frontend communicates with a Node.js/Express backend using REST API endpoints.

Example:

```javascript
fetch("https://your-backend.onrender.com/api/leads", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        fullName: fullName.value,
        email: email.value,
        mobile: mobile.value,
        project: project.value,
        budget: budget.value
    })
});
```

## 🌐 Deployment

### Frontend

Hosted using **GitHub Pages**.

### Backend

Hosted using **Render**.

### Database

MongoDB.

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

## 👨‍💻 Developer

**Gajendra Dube**

Frontend / Full-Stack Web Developer
