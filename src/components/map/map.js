import React from 'react';

function Map(props) {

  return (
    <div data-size="large" data-role="tile" className="cli-card">
      <iframe
        className="map-ifm"
        src={props.url}
        frameBorder="0">
      </iframe>
    </div>
  );
}

export default Map;
