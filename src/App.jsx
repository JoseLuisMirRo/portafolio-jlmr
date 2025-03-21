import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import ProfileCard from './components/ProfileCard';
import ProjectCard from './components/ProjectCard';
import EducationCard from './components/EducationCard';
import ThemeToggleButton from './components/ThemeToggleButton';
import ProjectModal from './components/ProjectModal';
import projects from './data/projects';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className={`d-flex flex-column min-vh-100 ${isDarkMode ? "bg-black text-light" : "bg-light text-dark"}`}>
      <Container className="mt-3 flex-grow-1 py-5">
        <Row>
          <Col md={4}>
            <ProfileCard isDarkMode={isDarkMode} />
          </Col>
          <Col md={8}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isDarkMode={isDarkMode}
                handleShowModal={handleShowModal}
              />
            ))}
            <Row>
              <Col md={12}>
                <EducationCard isDarkMode={isDarkMode} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

<footer className={`text-center py-4 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} border-top ${isDarkMode ? "border-secondary" : "border-dark"} mt-auto`}>
  <p className="mb-0 px-5">
    Desarrollado con{' '}
    <a
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-decoration-none ${isDarkMode ? "text-light" : "text-dark"} hover-effect`}
    >
      <FaReact className="me-1" /> React
    </a>
    ,{' '}
    <a
      href="https://react-bootstrap.github.io/"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-decoration-none ${isDarkMode ? "text-light" : "text-dark"} hover-effect`}
    >
      React Bootstrap
    </a>
    {' '}y{' '}
    <a
      href="https://vitejs.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-decoration-none ${isDarkMode ? "text-light" : "text-dark"} hover-effect`}
    >
      <SiVite className="me-1" /> Vite
    </a>
    .
  </p>
</footer>
      <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {selectedProject && (
        <ProjectModal
          show={showModal}
          handleClose={handleCloseModal}
          project={selectedProject}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default App;