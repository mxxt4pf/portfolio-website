import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Chip, Box } from '@mui/material';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "TypeScript", "Node.js"],
      image: "https://via.placeholder.com/300x200"
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip key={index} label={tech} sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;