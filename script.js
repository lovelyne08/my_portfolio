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

// GitHub API - Live Projects

const githubProjects = document.getElementById("githubProjects");

if (githubProjects) {

  fetch("https://api.github.com/users/Lovelyne08/repos")
    .then(response => {

      if (!response.ok) {
        throw new Error("Unable to fetch GitHub projects.");
      }

      return response.json();
    })

    .then(repositories => {

      githubProjects.textContent = "";

      // Select repositories that are suitable for the portfolio
      const selectedRepositories = repositories.filter(repository =>
        ["my_portfolio", "hairstyle", "chuisokogardenfrontend"].includes(repository.name)
      );

      selectedRepositories.forEach(repository => {

        const project = document.createElement("div");
        project.className = "project-card";

        const content = document.createElement("div");
        content.className = "project-content";

        const title = document.createElement("h3");
        title.textContent = repository.name;

        const description = document.createElement("p");
        description.textContent =
          repository.description || "Explore this project on GitHub.";

        const tech = document.createElement("div");
        tech.className = "tech";

        const language = document.createElement("span");
        language.textContent =
          repository.language || "Web Development";

        tech.appendChild(language);

        const link = document.createElement("a");
        link.href = repository.html_url;
        link.textContent = "View Repository";
        link.className = "project-btn";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(tech);
        content.appendChild(link);

        project.appendChild(content);

        githubProjects.appendChild(project);
      });

      if (selectedRepositories.length === 0) {
        githubProjects.textContent =
          "No selected GitHub projects were found.";
      }

    })

    .catch(error => {

      githubProjects.textContent =
        "Unable to load GitHub projects. Please try again later.";

      console.error(error);
    });
}