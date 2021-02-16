import React from 'react';

import './daycard.css';

function DayCard(props) {
  const d = new Date(props.fecha * 1000);
  const nday = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(d);
  const sday = new Intl.DateTimeFormat('es', { weekday: "long" }).format(d);

  return (
    <div className="container-fluid day-card text-center">
      <div className="row">

        <div className="cell-2 mg-auto">
          <h5 className="h5-clim">{sday.charAt(0).toUpperCase().concat(sday.slice(1))}<br /><span className="daynum">{nday}</span></h5>
        </div>

        <div className="cell-1 mg-auto">
          <div className="img-container">
            <img src={props.img} />
          </div>
        </div>
        <div className="cell-4 mg-auto">
          <span className="maxima">{Math.trunc(props.max)}<span className="mif-celsius"></span> </span>
          <span className="minima">{Math.trunc(props.min)}<span className="mif-celsius"></span></span>
        </div>

        <div className="cell-2 mg-auto">
          {props.wind} Km/H
        </div>

        <div className="cell-2 mg-auto">
          {props.humidity}%
        </div>

      </div>
    </div>
  );
}

export default DayCard;
