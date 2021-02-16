import React from 'react';

function Map(props) {

  return (
    <div data-size="large" data-role="tile" className="cli-card">
      <iframe
        class="map-ifm"
        src={props.url}
        frameborder="0">
      </iframe>
    </div>
  );
}

export default Map;
