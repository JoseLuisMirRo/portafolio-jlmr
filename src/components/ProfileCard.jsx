import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { FaBriefcase, FaHome, FaEnvelope, FaPhone, FaAsterisk, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePhoto from '../assets/profilephoto.png';

const ProfileCard = ({ isDarkMode }) => (
  <Card className={`text-start mb-4 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} shadow`}>
    <Card.Img variant="top" src={profilePhoto} className="w-50 mx-auto rounded-circle" />
    <Card.Body>
      <Card.Title><h3>Jose Luis Miranda Roldán</h3></Card.Title>
      <Card.Text>
        <p><FaBriefcase className="text-success" /> T.S.U T.I Desarrollo de Software Multiplataforma</p>
        <p><FaHome className="text-success" /> Morelos, Mexico</p>
        <p><FaEnvelope className="text-success" /> <a href="mailto:20233tn052@utez.edu.mx" className={isDarkMode ? "text-light" : "text-dark"}>20233tn052@utez.edu.mx</a></p>
        <p><FaEnvelope className="text-success" /> <a href="mailto:jluismiranda1920@gmail.com" className={isDarkMode ? "text-light" : "text-dark"}>jluismiranda1920@gmail.com</a></p>
        <p><FaPhone className="text-success" /> 7773696787</p>
        <p>
          <a href="https://www.linkedin.com/in/jose-luis-miranda-rold%C3%A1n-82ba6b247/" target="_blank" rel="noopener noreferrer" className={isDarkMode ? "text-light mx-2" : "text-dark mx-2"}><FaLinkedin size={20} /></a>
          <a href="https://github.com/JoseLuisMirRo" target="_blank" rel="noopener noreferrer" className={isDarkMode ? "text-light mx-2" : "text-dark mx-2"}><FaGithub size={20} /></a>
        </p>
      </Card.Text>
      <hr />
      <h5><FaAsterisk className="text-success" /> Habilidades</h5>
      <div className="mb-4">
        <p className="mb-1">Java Spring</p>
        <ProgressBar now={90} label="90%" variant="success" />
      </div>
      <div className="mb-4">
        <p className="mb-1">React</p>
        <ProgressBar now={70} label="70%" variant="success" />
      </div>
      <div className="mb-4">
        <p className="mb-1">React Native</p>
        <ProgressBar now={70} label="70%" variant="success" />
      </div>
      <div className="mb-4">
        <p className="mb-1">JavaScript</p>
        <ProgressBar now={80} label="80%" variant="success" />
      </div>
      <br />
      <h5><FaGlobe className="text-success" /> Idiomas</h5>
      <div className="mb-4">
        <p className="mb-1">Español (Nativo)</p>
        <ProgressBar now={100} label="100%" variant="success" />
      </div>
      <div className="mb-4">
        <p className="mb-1">Inglés (B2 - Certificado)</p>
        <ProgressBar now={70} label="70%" variant="success" />
      </div>
    </Card.Body>
  </Card>
);

export default ProfileCard;