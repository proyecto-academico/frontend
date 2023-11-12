import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [navChecked, setNavChecked] = useState(false);

  const handleNavToggle = (e) => {
    e.preventDefault();
    console.log('Toggle clicked');
    setNavChecked(!navChecked);
  };

  return (
    <header className="main-header">
      <label htmlFor="btn-nav" className="btn-nav" onClick={handleNavToggle}>
        <FontAwesomeIcon icon={faBars} />
      </label>
      <input type="checkbox" id="btn-nav" checked={navChecked} onChange={handleNavToggle} />

      <nav>
        <ul className="navigation">
          <li><Link to="/DocenteCursos">Mis cursos</Link></li>
          <li><Link to="/DocentesNotas">Notas</Link></li>
          <li><Link to="/DocentesMaterias">Materias</Link></li>
          <li><Link to="/DocentesAlumnos">Alumnos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
