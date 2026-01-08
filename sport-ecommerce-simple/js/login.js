/* ============================================
   LOGIN.JS - LOGIN PAGE FUNCTIONALITY
   ============================================
   This file handles:
   - Form validation
   - Form submission
   - Error display
   ============================================ */

/**
 * Initialize Login Page when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Only run on login page
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    // Add event listeners for real-time validation
    setupFormValidation();

    // Handle form submission
    loginForm.addEventListener("submit", handleLoginSubmit);
  }
});

/**
 * Setup Form Validation: Add real-time validation as user types
 */
function setupFormValidation() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Validate email on blur (when user leaves the field)
  if (emailInput) {
    emailInput.addEventListener("blur", function () {
      validateEmail(emailInput.value);
    });

    // Clear error when user starts typing
    emailInput.addEventListener("input", function () {
      clearError("email", "emailError");
    });
  }

  // Validate password on blur
  if (passwordInput) {
    passwordInput.addEventListener("blur", function () {
      validatePassword(passwordInput.value);
    });

    // Clear error when user starts typing
    passwordInput.addEventListener("input", function () {
      clearError("password", "passwordError");
    });
  }
}

/**
 * Validate Email: Check if email is valid
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail(email) {
  // Check if empty
  if (!email || email.trim() === "") {
    showError("email", "emailError", "Email là bắt buộc");
    return false;
  }

  // Check email format
  if (!isValidEmail(email)) {
    showError("email", "emailError", "Vui lòng nhập địa chỉ email hợp lệ");
    return false;
  }

  // Email is valid
  clearError("email", "emailError");
  return true;
}

/**
 * Validate Password: Check if password meets requirements
 * @param {string} password - Password to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validatePassword(password) {
  // Check if empty
  if (!password || password.trim() === "") {
    showError("password", "passwordError", "Mật khẩu là bắt buộc");
    return false;
  }

  // Check minimum length
  if (password.length < 6) {
    showError(
      "password",
      "passwordError",
      "Mật khẩu phải có ít nhất 6 ký tự"
    );
    return false;
  }

  // Password is valid
  clearError("password", "passwordError");
  return true;
}

/**
 * Handle Login Submit: Process form submission
 * @param {Event} e - Form submit event
 */
function handleLoginSubmit(e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Validate all fields
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  // If validation fails, stop submission
  if (!isEmailValid || !isPasswordValid) {
    return;
  }

  // All validation passed
  console.log("Login attempt:", { email });

  // In a real application, you would send this data to a server
  // For now, we'll just show a success message
  alert("Đăng nhập thành công! (Đây là bản demo)\n\nEmail: " + email);
  
  // In a real app, you might redirect to home page:
  // window.location.href = "../index.html";
}
