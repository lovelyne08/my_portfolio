// ================================
// PROJECT FILTER
// ================================

function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(function (project) {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}


// ================================
// CONTACT FORM VALIDATION
// ================================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

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


// ================================
// GITHUB LIVE API
// ================================

// ================================
// GITHUB LIVE API
// ================================

const githubProjects = document.getElementById("githubProjects");

if (githubProjects) {

    // Show loading message
    githubProjects.innerHTML =
        '<p id="githubLoading">Loading GitHub projects...</p>';

    fetch("https://api.github.com/users/Lovelyne08/repos")
        .then(function (response) {

            if (!response.ok) {
                throw new Error(
                    "GitHub API returned status " + response.status
                );
            }

            return response.json();
        })

        .then(function (repositories) {

            githubProjects.innerHTML = "";

            // Only show selected portfolio projects
            const selectedRepositories = repositories.filter(function (repository) {

                return [
                    "my_portfolio",
                    "hairstyle",
                    "chuisokogardenfrontend"
                ].includes(repository.name);

            });

            selectedRepositories.forEach(function (repository) {

                const project = document.createElement("div");
                project.className = "project-card";

                const content = document.createElement("div");
                content.className = "project-content";

                // Project title
                const title = document.createElement("h3");
                title.textContent = repository.name;

                // Project description
                const description = document.createElement("p");

                if (repository.description) {
                    description.textContent = repository.description;
                } else {
                    description.textContent =
                        "View this project on GitHub.";
                }

                // Programming language
                const tech = document.createElement("div");
                tech.className = "tech";

                const language = document.createElement("span");
                language.textContent =
                    repository.language || "Web Development";

                tech.appendChild(language);

                // GitHub link
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

            // If none of the selected repositories are found
            if (selectedRepositories.length === 0) {

                githubProjects.innerHTML =
                    "<p>No selected GitHub projects were found.</p>";
            }
        })

        .catch(function (error) {

            console.error("GitHub API Error:", error);

            githubProjects.innerHTML =
                "<p>Unable to load GitHub projects. Please try again later.</p>";
        });
}