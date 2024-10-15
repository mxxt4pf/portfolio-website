import React from 'react';
import { Typography, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        Here's a brief introduction about yourself and your background. Highlight your passion for technology,
        your key skills, and what drives you as a developer.
      </Typography>
    </Paper>
  );
};

export default About;