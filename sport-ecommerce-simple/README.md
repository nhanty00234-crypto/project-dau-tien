# SportZone - Sport E-Commerce Website

A simple and clean frontend website for a sport products store, built as a course project.

## 📋 Project Overview

This is a **student course project** demonstrating a complete frontend e-commerce website for sports equipment. The project uses **HTML5, CSS3, and JavaScript (ES6)** with a clean, easy-to-understand structure.

## 🎯 Project Goals

- Build a simple but complete frontend website
- Demonstrate HTML5, CSS3, and JavaScript skills
- Create a responsive design (mobile & desktop)
- Implement form validation
- Use semantic HTML and clean code structure

## 📁 Project Structure

```
sport-ecommerce-simple/
├── index.html              # Home page
├── pages/
│   ├── login.html          # Login page
│   └── register.html       # Register page
├── css/
│   ├── styles.css          # Common styles (header, footer, buttons)
│   ├── home.css            # Home page specific styles
│   └── auth.css            # Login/Register page styles
├── js/
│   ├── main.js             # Common JavaScript functions
│   ├── home.js             # Home page functionality
│   ├── login.js            # Login page validation
│   └── register.js         # Register page validation
├── assets/                 # Images and other assets (if needed)
└── README.md               # This file
```

## 🚀 Features

### 1. Home Page (`index.html`)
- **Hero Section**: Sport-themed banner with call-to-action buttons
- **Featured Products**: Grid display of 6 mock products
- **Features Section**: Highlights store benefits (Free Shipping, Returns, etc.)
- **Responsive Layout**: Adapts to mobile, tablet, and desktop screens

### 2. Login Page (`pages/login.html`)
- **Login Form**: Email and password inputs
- **Form Validation**: 
  - Email format validation
  - Password required (minimum 6 characters)
  - Real-time error messages
- **User-Friendly**: Clear error messages and smooth interactions

### 3. Register Page (`pages/register.html`)
- **Registration Form**: First name, last name, email, password, confirm password
- **Form Validation**:
  - Name validation (minimum 2 characters)
  - Email format validation
  - Password validation (minimum 8 characters)
  - Password confirmation matching
  - Terms & Conditions checkbox
- **Responsive Design**: Two-column layout for names on desktop, single column on mobile

## 🎨 Design Features

- **Sport Theme**: Orange (#ff6b35) and blue (#004e89) color scheme
- **Clean UI**: Simple, modern design that's easy to understand
- **Responsive**: Mobile-first approach with breakpoints
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **Accessibility**: Clear labels, error messages, and keyboard navigation

## 💻 How to Use

1. **Open the website**: Simply open `index.html` in a web browser
2. **Navigate**: Use the header menu to navigate between pages
3. **View Products**: Scroll down on the home page to see featured products
4. **Login/Register**: Click "Login" or "Sign Up" buttons to access authentication pages

## 📝 Code Explanation

### Home Page (`index.html` + `js/home.js`)
- **Purpose**: Display the main landing page with products
- **How it works**: 
  - HTML structure defines the page layout
  - JavaScript loads mock product data and dynamically creates product cards
  - CSS styles the page with a sporty theme
- **Key Features**: Hero banner, product grid, features section

### Login Page (`pages/login.html` + `js/login.js`)
- **Purpose**: Allow users to sign in to their account
- **How it works**:
  - Form collects email and password
  - JavaScript validates inputs in real-time (as user types)
  - Shows error messages if validation fails
  - On successful validation, shows success message (demo)
- **Validation Rules**:
  - Email: Required, must be valid email format
  - Password: Required, minimum 6 characters

### Register Page (`pages/register.html` + `js/register.js`)
- **Purpose**: Allow new users to create an account
- **How it works**:
  - Form collects user information
  - JavaScript validates all fields
  - Checks password confirmation matches
  - Requires Terms & Conditions agreement
  - Shows error messages for invalid inputs
- **Validation Rules**:
  - First/Last Name: Required, minimum 2 characters
  - Email: Required, must be valid email format
  - Password: Required, minimum 8 characters
  - Confirm Password: Must match password
  - Terms: Must be checked

## 🔧 Technical Details

### HTML5
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Form elements with proper labels and input types
- Accessible markup with ARIA attributes where needed

### CSS3
- CSS Variables for easy theming
- Flexbox and Grid for layouts
- Responsive design with media queries
- Smooth transitions and hover effects

### JavaScript (ES6)
- Arrow functions
- Template literals
- Event listeners
- DOM manipulation
- Form validation

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎓 For Presentation

### Key Points to Explain:

1. **Project Structure**: Show the organized folder structure
2. **Home Page**: 
   - Explain the hero section and product grid
   - Show how JavaScript dynamically loads products
3. **Login Page**: 
   - Demonstrate form validation
   - Show error messages
4. **Register Page**: 
   - Show comprehensive validation
   - Explain password confirmation matching
5. **Responsive Design**: 
   - Resize browser to show mobile/desktop views
6. **Code Quality**: 
   - Show comments in code
   - Explain reusable functions

## 🚧 Future Enhancements (Not Required)

- Backend integration for real authentication
- Shopping cart functionality
- Product detail pages
- Search and filter products
- User dashboard

## 📄 License

This is a course project for educational purposes.

---

**Built with ❤️ for sports enthusiasts**
