import React from 'react';
import API from '../../services/api.js';

import './home.css';
import CurrentTemp from '../../components/currenttemp/currenttemp.js';

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
      "temp":0
    }
  });
  var img =

  React.useEffect(() => {
    const setClima = async () => {
      const result = await API.current();
      console.log(result);
      setData(result);
    };
    setClima()
  }, []);


  return (
    <div className="container">
      <div className="row">

        <CurrentTemp
          img={'http://openweathermap.org/img/wn/'.concat(data.weather[0].icon).concat('@2x.png')}
          city={data.name}
          temp={data.main.temp}
          description={data.weather[0].description.charAt(0).toUpperCase().concat(data.weather[0].description.slice(1))} />

      </div>
    </div>
  );
}

export default Home;
