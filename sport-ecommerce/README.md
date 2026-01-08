# SportZone - Sport E-commerce Website

A modern, responsive sport e-commerce website built with React + Vite, featuring a clean and sporty UI design.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
sport-ecommerce/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header component
│   │   ├── Header.css
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Footer.css
│   │   ├── FormInput.jsx       # Reusable form input component
│   │   └── FormInput.css
│   ├── pages/
│   │   ├── Home.jsx            # Home page with hero & products
│   │   ├── Home.css
│   │   ├── Login.jsx           # Login page
│   │   ├── Register.jsx        # Registration page
│   │   └── Auth.css            # Shared auth page styles
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & CSS variables
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features

### Home Page

- **Hero Section**: Eye-catching banner with call-to-action buttons
- **Featured Products**: Grid display of 6 mock products with hover effects
- **Features Section**: Highlights key benefits (Free Shipping, Returns, etc.)
- **Responsive Design**: Adapts beautifully to mobile, tablet, and desktop

### Login Page

- **Form Validation**:
  - Email format validation
  - Password length validation (min 6 characters)
  - Real-time error messages
- **User Experience**:
  - Password visibility toggle
  - Remember me checkbox
  - Forgot password link
  - Smooth animations

### Register Page

- **Comprehensive Validation**:
  - First/Last name validation
  - Email format validation
  - Strong password requirements (8+ chars, uppercase, lowercase, number)
  - Password confirmation matching
- **User Experience**:
  - Two-column layout for names (responsive)
  - Terms & Conditions checkbox
  - Clear error messaging

### Reusable Components

- **Header**: Fixed navigation with logo, menu, and action buttons
- **Footer**: Multi-column layout with links and social media
- **FormInput**: Reusable input component with validation display

## 🎯 Design Features

- **Sport Theme**: Orange (#ff6b35) and blue (#004e89) color scheme
- **Modern UI**: Clean, minimalist design with smooth animations
- **Typography**: Oswald for headings, Inter for body text
- **Responsive**: Mobile-first approach with breakpoints at 768px and 968px
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🛠️ Installation & Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📱 Pages Overview

### Home Page (`/`)

- Displays hero section with gradient background
- Shows 6 featured products in a responsive grid
- Includes features section highlighting store benefits
- All product images use Unsplash placeholders

### Login Page (`/login`)

- Email and password input fields
- Client-side validation with error messages
- Password visibility toggle
- Remember me and forgot password options
- Redirects to home on successful login (demo)

### Register Page (`/register`)

- First name, last name, email, password, and confirm password fields
- Comprehensive form validation
- Terms & Conditions agreement checkbox
- Redirects to login page on successful registration (demo)

## 🎨 CSS Architecture

- **CSS Variables**: Centralized color and spacing system
- **Component-scoped CSS**: Each component has its own stylesheet
- **Utility Classes**: Reusable button and container classes
- **Responsive Design**: Mobile-first with media queries

## 🔒 Form Validation

### Login Form

- Email: Required, valid email format
- Password: Required, minimum 6 characters

### Register Form

- First Name: Required, minimum 2 characters
- Last Name: Required, minimum 2 characters
- Email: Required, valid email format
- Password: Required, minimum 8 characters, must contain uppercase, lowercase, and number
- Confirm Password: Required, must match password

## 🚀 Future Enhancements

- Product detail pages
- Shopping cart functionality
- User dashboard
- Product search and filtering
- Backend integration
- Payment processing
- Order management

## 📝 Notes

- All product data is currently mock data
- Authentication is simulated (no backend)
- Images use Unsplash placeholders
- Form submissions show alerts (replace with actual API calls)

---

Built with ❤️ for sports enthusiasts
