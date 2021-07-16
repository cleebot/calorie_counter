import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      Caleb Lee
      <a href="https://github.com/cleebot"><FontAwesomeIcon icon={faGithub} className="git" target="_blank" /></a>
      <a href="https://linkedin.com/in/caleblee92"><FontAwesomeIcon icon={faLinkedin} className="git" target="_blank"/></a>
    </div>
  )
}
