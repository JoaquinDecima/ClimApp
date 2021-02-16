import React from 'react';

import './minmax.css';

function MinMax(props) {

  return (
    <div data-size="wide" data-role="tile" className="text-center cli-card">
      <div className="container-fluid">
        <div className="row">

          <div className="cell-6">
            <h3>Máxima</h3>
            <span className="temp-mediun">{Math.trunc(props.max)}<span class="mif-celsius"></span></span>
          </div>

          <div className="cell-6">
            <h3>Mínima</h3>
            <span className="temp-mediun">{Math.trunc(props.min)}<span class="mif-celsius"></span></span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default MinMax;
