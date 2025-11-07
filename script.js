// Helper to show success modal
function showModal(message) {
  const modal = document.getElementById("successModal");
  const text = document.getElementById("successText");
  text.textContent = message;
  modal.style.display = "flex";

  document.getElementById("closeModal").onclick = () => {
    modal.style.display = "none";
  };
}

// Registration form validation
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }
  showModal("🎉 Registration successful!");
  e.target.reset();
});

// Feedback form handler
document.getElementById("feedbackForm").addEventListener("submit", e => {
  e.preventDefault();
  const rating = document.getElementById("rating").value;
  if (rating < 1 || rating > 5) {
    alert("Please enter a rating between 1 and 5!");
    return;
  }
  showModal("✅ Thank you for your feedback!");
  e.target.reset();
});
