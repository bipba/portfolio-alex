import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="sidebar" role="complementary">
      <div className="id" role="banner">
        <div className="idContent">
        <img
    src="./media/IMG_world.png"
    alt="Logo AlexCoding"
    style={{
      width: "203px",
      height: "199px",
      objectFit: "cover"
    }}
  />
        </div>
      </div>

      <div className="navBar" role="navigation">
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "navActive" : "")}
              aria-label="Page d'accueil">
              <i className="fas fa-home" aria-hidden="true"></i>
              <span>Acceuil</span>
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => (isActive ? "navActive" : "")}
              aria-label="Portfolio">
              <i className="fas fa-images" aria-hidden="true"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/competences" 
              className={({ isActive }) => (isActive ? "navActive" : "")}
              aria-label="Compétences">
              <i className="fas fa-mountain" aria-hidden="true"></i>
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? "navActive" : "")}
              aria-label="Contact">
              <i className="fas fa-address-book" aria-hidden="true"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork" role="contentinfo">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/bipba" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter Profile">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a 
              href="https://codepen.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="CodePen Profile">
              <i className="fab fa-codepen" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
