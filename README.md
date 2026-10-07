# Lovelyne Mitchel Portfolio

A responsive personal portfolio website showcasing my skills, projects, and web development work.

## Features

- Responsive homepage
- Professional hero section
- About Me section
- Skills section
- Featured projects
- Live GitHub projects
- Project filtering
- Contact section
- Contact form with client-side validation
- Responsive design for desktop and mobile
- Optimized images
- Lazy loading for project images

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- GitHub REST API

## GitHub API

The Projects page uses the GitHub API to display live repository information from my GitHub account.

The repositories are loaded dynamically using JavaScript and Fetch API.

The page includes a loading message while the data is being fetched and displays a friendly error message if the request fails.

## Security

- No API keys or sensitive information are exposed.
- Dynamic messages are inserted safely using `textContent`.
- External links use `noopener noreferrer`.
- The website is served over HTTPS on both deployments.

## Performance Optimization

I optimized the website by:

- Compressing project images
- Reducing image dimensions and file sizes
- Adding lazy loading to below-the-fold images
- Improving the overall page loading performance

### Lighthouse Performance

| | Score |
|---|---:|
| Before Optimization | 50/100 |
| After Optimization | 93/100 |

**Performance improvement: 43 points**

## Live Links

- **GitHub Repository:** https://github.com/Lovelyne08/my_portfolio
- **GitHub Pages:** https://lovelyne08.github.io/my_portfolio/
- **Vercel:** https://my-portfolio-self-ten-15.vercel.app/

## Author

**Lovelyne Mitchel**