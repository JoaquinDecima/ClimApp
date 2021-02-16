import React from 'react';

import './currenttemp.css';

function CurrentTemp(props) {

  return (
    <div data-size="large" data-role="tile" className="cli-card">
      <div className="container-fluid">
        <div className="row">

          <div className="cell-md-12">
            <h2><span class="mif-location"></span> {props.city}</h2>
          </div>

          <div className="cell-md-4">
            <div className="img-container">
              <img src={props.img} />
            </div>
          </div>

          <div className="cell-md-8 text-center">
            <span className="temp">{Math.trunc(props.temp)}<span class="mif-celsius"></span></span>
          </div>

          <div className="cell-md-12 text-center">
            {props.description}
          </div>

        </div>
      </div>

    </div>
  );
}

export default CurrentTemp;
