/* ============================================
   MAIN.JS - COMMON FUNCTIONS
   ============================================
   This file contains functions used across
   multiple pages: navigation, utilities, etc.
   ============================================ */

/**
 * Initialize page when DOM is loaded
 * This runs on every page
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("SportZone website loaded successfully!");

  // Add smooth scrolling for anchor links
  initSmoothScrolling();
});

/**
 * Smooth Scrolling: Smoothly scroll to sections when clicking anchor links
 */
function initSmoothScrolling() {
  // Get all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only handle internal anchor links (not empty or just #)
      if (href && href !== "#" && href.length > 1) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

/**
 * Utility: Show error message for a form field
 * @param {string} fieldId - The ID of the input field
 * @param {string} errorId - The ID of the error message element
 * @param {string} message - Error message to display
 */
function showError(fieldId, errorId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(errorId);

  if (field) {
    field.classList.add("error");
  }

  if (errorElement) {
    errorElement.textContent = message;
  }
}

/**
 * Utility: Clear error message for a form field
 * @param {string} fieldId - The ID of the input field
 * @param {string} errorId - The ID of the error message element
 */
function clearError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(errorId);

  if (field) {
    field.classList.remove("error");
  }

  if (errorElement) {
    errorElement.textContent = "";
  }
}

/**
 * Utility: Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
