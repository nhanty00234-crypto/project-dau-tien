/* ============================================
   REGISTER.JS - REGISTER PAGE FUNCTIONALITY
   ============================================
   This file handles:
   - Form validation (name, email, password, confirm password)
   - Form submission
   - Error display
   ============================================ */

/**
 * Initialize Register Page when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Only run on register page
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    // Add event listeners for real-time validation
    setupFormValidation();

    // Handle form submission
    registerForm.addEventListener("submit", handleRegisterSubmit);
  }
});

/**
 * Setup Form Validation: Add real-time validation as user types
 */
function setupFormValidation() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  // Validate first name on blur
  if (firstNameInput) {
    firstNameInput.addEventListener("blur", function () {
      validateName(firstNameInput.value, "firstName", "First name");
    });
    firstNameInput.addEventListener("input", function () {
      clearError("firstName", "firstNameError");
    });
  }

  // Validate last name on blur
  if (lastNameInput) {
    lastNameInput.addEventListener("blur", function () {
      validateName(lastNameInput.value, "lastName", "Last name");
    });
    lastNameInput.addEventListener("input", function () {
      clearError("lastName", "lastNameError");
    });
  }

  // Validate email on blur
  if (emailInput) {
    emailInput.addEventListener("blur", function () {
      validateEmail(emailInput.value);
    });
    emailInput.addEventListener("input", function () {
      clearError("email", "emailError");
    });
  }

  // Validate password on blur
  if (passwordInput) {
    passwordInput.addEventListener("blur", function () {
      validatePassword(passwordInput.value);
      // Also re-validate confirm password if it has a value
      const confirmPassword = document.getElementById("confirmPassword").value;
      if (confirmPassword) {
        validateConfirmPassword(confirmPassword, passwordInput.value);
      }
    });
    passwordInput.addEventListener("input", function () {
      clearError("password", "passwordError");
    });
  }

  // Validate confirm password on blur
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("blur", function () {
      const password = document.getElementById("password").value;
      validateConfirmPassword(confirmPasswordInput.value, password);
    });
    confirmPasswordInput.addEventListener("input", function () {
      clearError("confirmPassword", "confirmPasswordError");
    });
  }
}

/**
 * Validate Name: Check if name is valid
 * @param {string} name - Name to validate
 * @param {string} fieldId - ID of the input field
 * @param {string} fieldLabel - Label for the field (for error messages)
 * @returns {boolean} - True if valid, false otherwise
 */
function validateName(name, fieldId, fieldLabel) {
  // Check if empty
  if (!name || name.trim() === "") {
    showError(fieldId, fieldId + "Error", fieldLabel + " is required");
    return false;
  }

  // Check minimum length
  if (name.trim().length < 2) {
    showError(
      fieldId,
      fieldId + "Error",
      fieldLabel + " must be at least 2 characters"
    );
    return false;
  }

  // Name is valid
  clearError(fieldId, fieldId + "Error");
  return true;
}

/**
 * Validate Email: Check if email is valid
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail(email) {
  // Check if empty
  if (!email || email.trim() === "") {
    showError("email", "emailError", "Email is required");
    return false;
  }

  // Check email format
  if (!isValidEmail(email)) {
    showError("email", "emailError", "Please enter a valid email address");
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
    showError("password", "passwordError", "Password is required");
    return false;
  }

  // Check minimum length
  if (password.length < 8) {
    showError(
      "password",
      "passwordError",
      "Password must be at least 8 characters"
    );
    return false;
  }

  // Password is valid
  clearError("password", "passwordError");
  return true;
}

/**
 * Validate Confirm Password: Check if passwords match
 * @param {string} confirmPassword - Confirmed password value
 * @param {string} password - Original password value
 * @returns {boolean} - True if valid, false otherwise
 */
function validateConfirmPassword(confirmPassword, password) {
  // Check if empty
  if (!confirmPassword || confirmPassword.trim() === "") {
    showError(
      "confirmPassword",
      "confirmPasswordError",
      "Please confirm your password"
    );
    return false;
  }

  // Check if passwords match
  if (confirmPassword !== password) {
    showError(
      "confirmPassword",
      "confirmPasswordError",
      "Passwords do not match"
    );
    return false;
  }

  // Confirm password is valid
  clearError("confirmPassword", "confirmPasswordError");
  return true;
}

/**
 * Handle Register Submit: Process form submission
 * @param {Event} e - Form submit event
 */
function handleRegisterSubmit(e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  // Validate all fields
  const isFirstNameValid = validateName(firstName, "firstName", "First name");
  const isLastNameValid = validateName(lastName, "lastName", "Last name");
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isConfirmPasswordValid = validateConfirmPassword(
    confirmPassword,
    password
  );

  // Check terms checkbox
  if (!terms) {
    alert("Please agree to the Terms & Conditions");
    return;
  }

  // If any validation fails, stop submission
  if (
    !isFirstNameValid ||
    !isLastNameValid ||
    !isEmailValid ||
    !isPasswordValid ||
    !isConfirmPasswordValid
  ) {
    return;
  }

  // All validation passed
  console.log("Registration attempt:", {
    firstName,
    lastName,
    email,
  });

  // In a real application, you would send this data to a server
  // For now, we'll just show a success message
  alert(
    "Registration successful! Welcome to SportZone!\n\n" +
      "Name: " +
      firstName +
      " " +
      lastName +
      "\n" +
      "Email: " +
      email +
      "\n\n" +
      "(This is a demo)"
  );

  // In a real app, you might redirect to login page:
  // window.location.href = "login.html";
}
