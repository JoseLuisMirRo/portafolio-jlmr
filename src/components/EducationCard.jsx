import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCertificate, FaCalendar } from 'react-icons/fa';

const EducationCard = ({ isDarkMode }) => (
  <Card bg={isDarkMode ? "dark" : "light"} text={isDarkMode ? "light" : "dark"} className="shadow">
    <Card.Body>
      <Card.Title className="mb-4">
        <FaCertificate className="text-success me-2" />
        <span style={{ fontSize: '1.25rem' }}>Educación</span>
      </Card.Title>
      <Card.Text>
        <div className="mb-4">
          <h5 style={{ fontSize: '1.1rem', fontWeight: '500' }}>Universidad Tecnológica Emiliano Zapata del Estado de Morelos (UTEZ)</h5>
          <p className="mb-2 d-flex align-items-center">
            <FaCalendar className="text-success me-2" />
            <span style={{ fontSize: '0.95rem', color: isDarkMode ? '#ccc' : '#666' }}>Septiembre 2023 - Mayo 2027</span>
          </p>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Ingeniería en Desarrollo y Gestión de Software</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Técnico Superior Universitario en Tecnologías de la Información.</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Área: Desarrollo de Software Multiplataforma</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Promedio: 9.9</p>
        </div>
        <hr className={isDarkMode ? "bg-secondary" : "bg-dark"} />
        <div className="mt-4">
          <h5 style={{ fontSize: '1.1rem', fontWeight: '500' }}>Escuela de Técnicos Laboratoristas - (ETL-UAEM)</h5>
          <p className="mb-2 d-flex align-items-center">
            <FaCalendar className="text-success me-2" />
            <span style={{ fontSize: '0.95rem', color: isDarkMode ? '#ccc' : '#666' }}>Agosto 2018 - Junio 2021</span>
          </p>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Título: Técnico Laboratorista en Electrónica Digital</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Promedio: 9.6</p>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default EducationCard;