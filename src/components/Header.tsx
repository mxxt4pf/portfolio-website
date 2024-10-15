import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Name
        </Typography>
        <Box>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;