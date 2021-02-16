import React from 'react';
import API from '../../services/api.js';

import './home.css';
import CurrentTemp from '../../components/currenttemp/currenttemp.js';
import DateFecha from '../../components/date/date.js';
import DayCard from '../../components/daycard/daycard.js';
import Humidity from '../../components/humidity/humidity.js';
import Map from '../../components/map/map.js';
import MinMax from '../../components/minmax/minmax.js';
import WindSpeed from '../../components/windspeed/windspeed.js';

function Home() {
  const [data, setData] = React.useState({
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
  });
  const [nexts, setNexts] = React.useState([{
    "dt":0,
    "weather":[
      {
        "icon":"",
        "description":""
      }
    ],
    "temp":{
      "min":0,
      "max":0
    },
    "wind_speed":0,
    "humidity":0
  }]);

  React.useEffect(() => {
    const setClima = async () => {
      const result = await API.current();
      console.log(result);
      setData(result);
    };
    const setClimasNext = async () => {
      const result = await API.next();
      console.log(result);
      setNexts(result);
    };
    setClima();
    setClimasNext();
  }, []);


  return (
    <div className="container-fluid">
      <div className="row">

        <div className="cell-md-6">
          <div className="tiles-grid" >
            <DateFecha />
            <CurrentTemp
            img={'http://openweathermap.org/img/wn/'.concat(data.weather[0].icon).concat('@2x.png')}
              city={data.name}
              temp={data.main.temp}
              description={data.weather[0].description.charAt(0).toUpperCase().concat(data.weather[0].description.slice(1))} />
            <MinMax
              min={data.main.temp_min}
              max={data.main.temp_max} />
            <Map url={'https://embed.windy.com/embed2.html?lat='.concat(data.coord.lat).concat('&lon=').concat(data.coord.lon).concat('&detailLat=').concat(data.coord.lat).concat('&detailLon=').concat(data.coord.lon).concat('&zoom=4&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1')}/>
            <WindSpeed viento={data.wind.speed} />
            <Humidity humidity={data.main.humidity} />
          </div>
        </div>

        <div className="cell-md-6">
          {nexts.map((item,index)=>{
            return <DayCard
              img={'http://openweathermap.org/img/wn/'.concat(item.weather[0].icon).concat('@2x.png')}
              fecha={item.dt}
              max={item.temp.max}
              min={item.temp.min}
              wind={item.wind_speed}
              humidity={item.humidity} />
          })}
        </div>

      </div>
    </div>
  );
}

export default Home;
