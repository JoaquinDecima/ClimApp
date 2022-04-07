<template>
  <main class="container-fluid">
    <div class="row">
      <Cities/>
      <div class="col-md-6">
        <div class="container-fluid">
          <div class="row">
            <TodayDate/>
            <MinMaxTemp :min="wdata.main.temp_min" :max="wdata.main.temp_max"/>
            <TodayWeather :city="wdata.name" :temp="wdata.main.temp" :img="wdata.weather[0].icon" />
            <TodayWind :speed="wdata.wind.speed"/>
            <TodayHumidity :humidity="wdata.main.humidity"/>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <NexDaysTable/>
      </div>
      <Map :lon="wdata.coord.lon" :lat="wdata.coord.lat"/>
    </div>

  </main>
</template>

<script>
import Cities from "../modules/Cities.vue";
import NexDaysTable from "../modules/NexDaysTable.vue";
import TodayDate from "../modules/TodayDate.vue";
import MinMaxTemp from "../modules/MinMaxTemp.vue";
import TodayWeather from "../modules/TodayWeather.vue";
import TodayWind from "../modules/TodayWind.vue";
import TodayHumidity from "../modules/TodayHumidity.vue";
import Map from "../modules/Map.vue";
import {getParams} from "../../service/routes";
import {current, currentcity} from "../../service/api";

let wdata

if (getParams()==undefined){
  wdata = await current()
} else {
  wdata = await currentcity(getParams())
}

export default {
  name: "Home",
  data: () => {
    return {
      wdata
    }
  },
  components: {Map, TodayHumidity, TodayWind, TodayWeather, MinMaxTemp, TodayDate, NexDaysTable, Cities}
}
</script>

<style scoped>
  main{
    margin: 15px auto;
    padding: 0px 20px;
  }
</style>