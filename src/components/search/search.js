import React from 'react';
import { useHistory } from "react-router-dom";

import './search.css';

function Search(props) {
  const history = useHistory();

  const Buscar = city => {
    if (city == "none") {
      history.push('/');
    }else{
      let path = `/city/`.concat(city);
      console.log(path);
      history.push(path);
    }
  }

  return (
    <select
      data-role="select"
      onChange={event => Buscar(event.target.value)} >
      <option value="none">Local</option>
      <option value="Buenos%20Aires">Buenos Aires</option>
      <option value="Tucuman">Tucuman</option>
      <option value="Mendoza">Mendoza</option>
      <option value="Entre%20Rios">Entre Rios</option>
      <option value="Cordoba">Cordoba</option>
      <option value="Rio%20Negro">Rio Negro</option>
      <option value="Salta">Salta</option>
      <option value="Chaco">Chaco</option>
      <option value="Santiago%20del%20Estero">Santiago del Estero</option>
      <option value="La%20Rioja">La Rioja</option>
    </select>
  );
}

export default Search;
