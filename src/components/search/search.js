import React from 'react';
import { useHistory } from "react-router-dom";

function Search(props) {
  const history = useHistory();

  const Buscar = city => {
    let path = `/city/`.concat(city);
    console.log(path);
    history.push(path);
  }

  return (
    <select
      data-role="select"
      onChange={event => Buscar(event.target.value)} >
      <option value="Buenos%20Aires">Buenos Aires</option>
      <option value="Tucuman">Tucuman</option>
      <option value="Chubut">Chubut</option>
    </select>
  );
}

export default Search;
