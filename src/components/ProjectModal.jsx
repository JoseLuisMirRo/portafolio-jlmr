import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaCalendar } from 'react-icons/fa';

const ProjectModal = ({ show, handleClose, project, isDarkMode }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header
      closeButton
      className={isDarkMode ? "bg-dark text-light border-0" : "bg-light text-dark border-0"}
      style={{ display: 'flex', alignItems: 'flex-start' }} // Ajuste de estilo
    >
      <Modal.Title style={{ flex: 1, marginRight: '1rem', fontSize: '1.25rem' }}>{project.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body className={isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <div className="mb-4 d-flex align-items-center">
        <FaCalendar className="text-success me-2" />
        <span style={{ fontSize: '0.95rem' }}>{project.date}</span>
      </div>
      <ul className="list-unstyled">
        {project.details.map((detail, index) => (
          <li key={index} className="mb-3">
            <strong style={{ fontSize: '0.95rem' }}>{detail.label}:</strong>
            <span style={{ fontSize: '0.9rem', color: isDarkMode ? '#ccc' : '#666', display: 'block', marginTop: '0.25rem' }}>
              {detail.value}
            </span>
          </li>
        ))}
      </ul>
    </Modal.Body>
  </Modal>
);

export default ProjectModal;