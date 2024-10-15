import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "TypeScript", "Node.js"]
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;