import React from 'react';
import {Link} from "react-router-dom";

import './navbar.css';
import Search from '../../components/search/search.js'

function NavBar() {

  return (
    <nav data-role="appbar" data-expand-point="md">
      <a href="#" className="brand no-hover">
        ClimApp
      </a>

      <Search />

      <ul className="app-bar-menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Provincias</a></li>
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
