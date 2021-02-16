import React from 'react';

import './humidity.css';

function Humidity(props) {

  return (
    <div data-role="tile" data-size="medium" className="cli-card">
      <div className="text-center">
        <h2><span class="mif-water"></span></h2>
        <span className="temp-mediun">{props.humidity}%</span>
      </div>
    </div>
  );
}

export default Humidity;
