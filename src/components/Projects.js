import React, { useEffect, useState } from 'react';
import './Projects.css'; // Add a separate CSS file for styling

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Nour-hash/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <ul className="repo-list">
        {repos.map(repo => (
          <li key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
