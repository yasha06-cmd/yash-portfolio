
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");

// Mobile menu
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});

// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Dark mode
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀";
  } else {
    themeBtn.textContent = "☾";
  }
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form: prepares an email
document.getElementById("contactForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(
      "Portfolio message from " + name
    );

    const body = encodeURIComponent(
      "Name: " + name +
      "\nEmail: " + email +
      "\n\nMessage:\n" + message
    );

    document.getElementById("formStatus").textContent =
      "Email app उघडेल. तिथून message पाठव.";

    window.location.href =
      "mailto:?subject=" + subject + "&body=" + body;
  }
);