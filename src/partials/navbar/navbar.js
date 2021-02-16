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
        <li><Link to="/">Inicio</Link></li>
        <li>
          <button className="bar-button" id="openMenu">
            Sobre Mi
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
