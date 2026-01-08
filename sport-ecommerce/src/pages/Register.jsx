import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Registration data:", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });
      setIsSubmitting(false);
      // In a real app, you would handle registration here
      alert("Registration successful! Welcome to SportZone! (This is a demo)");
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>
              Join SportZone and start shopping for premium sports equipment
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-row">
              <FormInput
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder="Enter your first name"
                required
              />
              <FormInput
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                placeholder="Enter your last name"
                required
              />
            </div>

            <FormInput
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Enter your email"
              required
            />

            <FormInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Create a strong password"
              required
            />

            <FormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Confirm your password"
              required
            />

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>
                  I agree to the <Link to="/terms">Terms & Conditions</Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
