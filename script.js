// Filter Projects
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");

  projects.forEach(project => {
    if (category === "all") {
      project.style.display = "block";
    } else if (project.dataset.category === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Contact Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.style.color = "#ef4444";
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      formMessage.style.color = "#ef4444";
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    formMessage.style.color = "#22c55e";
    formMessage.textContent = "Message sent successfully!";

    form.reset();
  });
}