import React from 'react';
import { Typography, Chip, Paper, Box } from '@mui/material';

const Skills: React.FC = () => {
  const skills = ["JavaScript", "TypeScript", "React", "Node.js", "HTML", "CSS", "Python", "Git"];

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        My Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" variant="outlined" />
        ))}
      </Box>
    </Paper>
  );
};

export default Skills;