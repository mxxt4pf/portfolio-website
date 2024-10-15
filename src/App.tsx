import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Header />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
