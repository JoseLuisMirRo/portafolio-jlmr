import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaSuitcase, FaCalendar, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, isDarkMode, handleShowModal }) => (
    <Card className={`mb-4 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} shadow`}>
        <Card.Body>
            <Card.Title><FaSuitcase className="text-success" /> {project.title}</Card.Title>
            <Card.Text>
                <p><FaCalendar className="text-success" /> {project.date}</p>
                <p>{project.summary}</p>
                <Button variant={isDarkMode ? "outline-light" : "outline-dark"} onClick={() => handleShowModal(project)} className="me-2">Ver más</Button>
                {project.github && (
                    <Button variant={isDarkMode ? "outline-light" : "outline-dark"} href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub Repo
                    </Button>
                )}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default ProjectCard;