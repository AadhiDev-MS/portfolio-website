const projects = [{"id":1077283885,"name":"Tic-Tac-Toe","full_name":"AadhiDev-MS/Tic-Tac-Toe","description":"A simple Tic-Tac-Toe game.","html_url":"https://github.com/AadhiDev-MS/Tic-Tac-Toe","language":"JavaScript","stargazers_count":0,"forks_count":0,"open_issues_count":0,"updated_at":"2025-10-16T03:48:19Z","created_at":"2025-10-16T03:35:16Z","private":false,"fork":false,"archived":false,"default_branch":"main"},{"id":1078699707,"name":"portfolio-website","full_name":"AadhiDev-MS/portfolio-website","description":"A modern, single-page portfolio website.","html_url":"https://github.com/AadhiDev-MS/portfolio-website","stargazers_count":0,"forks_count":0,"open_issues_count":0,"updated_at":"2025-10-18T08:24:12Z","created_at":"2025-10-18T08:24:11Z","private":false,"fork":false,"archived":false,"default_branch":"main"},{"id":920614363,"name":"image","full_name":"AadhiDev-MS/image","html_url":"https://github.com/AadhiDev-MS/image","stargazers_count":0,"forks_count":0,"open_issues_count":0,"updated_at":"2025-10-18T08:18:36Z","created_at":"2025-01-22T13:21:19Z","private":false,"fork":false,"archived":false,"default_branch":"main"},{"id":1076606327,"name":"Calculator","full_name":"AadhiDev-MS/Calculator","html_url":"https://github.com/AadhiDev-MS/Calculator","language":"HTML","stargazers_count":0,"forks_count":1,"open_issues_count":0,"updated_at":"2025-10-15T11:30:56Z","created_at":"2025-10-15T05:19:26Z","private":false,"fork":false,"archived":false,"default_branch":"main"}];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const projectName = document.createElement('h2');
    const projectLink = document.createElement('a');
    projectLink.href = project.html_url;
    projectLink.textContent = project.name;
    projectName.appendChild(projectLink);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    projectElement.appendChild(projectName);
    projectElement.appendChild(projectDescription);

    projectsContainer.appendChild(projectElement);
});
