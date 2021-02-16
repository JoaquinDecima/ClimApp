import React from 'react';

function WindSpeed(props) {

  return (
    <div data-role="tile" data-size="medium" className="cli-card">
      <div className="text-center">
        <h2>Viento</h2>
        <span className="temp-mediun">{props.viento} Km/H</span>
      </div>
    </div>
  );
}

export default WindSpeed;
