import React from 'react';
import {Link} from "react-router-dom";

import './footer.css';

function Footer() {

  return (
    <footer>
      <div className="container-fluid">
        <div className="row">

          <div className="cell-md-8 foot-section">
            <h3>ClimApp</h3>
            <p className="text-just">
            La siguiente prueba plantea el desarrollo de una aplicación de consulta de clima que pueda visualizar el pronóstico actual, próximos 5 días para la ciudad actual y de otras 5 ciudades seleccionables.
            </p>
            <p className="text-just">
              Además del desarrollo específico de las funcionalidades, se requiere identificar y generar los casos de test que se consideren necesarios.
            </p>
            <p className="text-just">
              La entrega del código se espera que se entregue en algún repositorio público.
            </p>
          </div>

          <div className="cell-md-4 text-center foot-section">
            <h3>APIs Usadas</h3>
            <p className="text-just">
            APIs utilizadas para este proyecto, recomiendo leer la documentación de las mismas.
            </p>
            <ul className="ul-list">
              <li><a target="_blank" href="https://openweathermap.org/">OpenWeather</a></li>
              <li><a target="_blank" href="http://ip-api.com/">IP-API</a></li>
              <li><a target="_blank" href="https://datos.gob.ar/apis">Datos Gob AR</a></li>
            </ul>
          </div>


          <div className="cell-12 text-center">
            ClimApp <span className="copyleft">&copy;</span> <a className="a-foot" href="https://joaquindecima.gitlab.io">Joaquin (Pato) Decima</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
