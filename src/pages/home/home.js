import React from 'react';
import API from '../../services/api.js';

import './home.css';
import CurrentTemp from '../../components/currenttemp/currenttemp.js';
import DateFecha from '../../components/date/date.js';
import Humidity from '../../components/humidity/humidity.js';
import Map from '../../components/map/map.js';
import MinMax from '../../components/minmax/minmax.js';
import WindSpeed from '../../components/windspeed/windspeed.js';

function Home() {
  const [data, setData] = React.useState({
    "hoy":{
      "name": "",
      "weather":[
        {
          "icon":"",
          "description":""
        }
      ],
      "main":{
        "temp":0,
        "temp_max":0,
        "temp_min":0,
        "humidity":0
      },
      "wind":{
        "speed":0
      },
      "coord":{
        "lon":0,
        "lat":0
      }
    }
  });
  var img =

  React.useEffect(() => {
    const setClima = async () => {
      const result = await API.current();
      console.log(result);
      setData({"hoy":result});
    };
    setClima()
  }, []);


  return (
    <div className="container-fluid">
      <div className="row">

        <div className="cell-md-6">
          <div className="tiles-grid" >
            <DateFecha />
            <CurrentTemp
            img={'http://openweathermap.org/img/wn/'.concat(data.hoy.weather[0].icon).concat('@2x.png')}
              city={data.hoy.name}
              temp={data.hoy.main.temp}
              description={data.hoy.weather[0].description.charAt(0).toUpperCase().concat(data.hoy.weather[0].description.slice(1))} />
            <MinMax
              min={data.hoy.main.temp_min}
              max={data.hoy.main.temp_max} />
            <Map url={'https://embed.windy.com/embed2.html?lat='.concat(data.hoy.coord.lat).concat('&lon=').concat(data.hoy.coord.lon).concat('&detailLat=').concat(data.hoy.coord.lat).concat('&detailLon=').concat(data.hoy.coord.lon).concat('&zoom=4&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1')}/>
            <WindSpeed viento={data.hoy.wind.speed} />
            <Humidity humidity={data.hoy.main.humidity} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
