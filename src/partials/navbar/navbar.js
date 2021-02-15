import React from 'react';
import {Link} from "react-router-dom";

import './navbar.css';

function NavBar() {

  return (
    <nav data-role="appbar" data-expand-point="md">
      <a href="#" className="brand no-hover">
        ClimApp
      </a>

      <ul className="app-bar-menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Provincias</a></li>
        <li><a href="#">Sobre Mi</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
