document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Display notification
    const notification = document.getElementById("notification");
    notification.innerText =
      "Thank you! Your message has been sent. We’ll get back to you soon.";
    notification.style.display = "block";

    // Clear form fields
    this.reset();
  });
