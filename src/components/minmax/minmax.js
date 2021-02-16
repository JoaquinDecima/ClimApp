import React from 'react';

import './minmax.css';

function MinMax(props) {

  return (
    <div className="cell-md-3 text-center cli-cont">
      <div className="cli-card">
        <h3>Maxima</h3>
        <span className="temp">{Math.trunc(props.max)}<span class="mif-celsius"></span></span>
        <h3>Minima</h3>
        <span className="temp">{Math.trunc(props.min)}<span class="mif-celsius"></span></span>
      </div>
    </div>
  );
}

export default MinMax;
