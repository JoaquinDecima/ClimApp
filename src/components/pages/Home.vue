<template>
  <main class="container-fluid">

    <div class="row">
      <Cities/>
      <div class="col-md-6">
        <div class="container-fluid">
          <div class="row">
            <TodayDate/>
            <MinMaxTemp/>
            <TodayWeather/>
            <TodayWind/>
            <TodayHumidity/>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <NexDaysTable/>
      </div>
      <Map/>
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
export default {
  name: "Home",
  components: {Map, TodayHumidity, TodayWind, TodayWeather, MinMaxTemp, TodayDate, NexDaysTable, Cities}
}
</script>

<style scoped>
  main{
    margin: 15px auto;
    padding: 0px 20px;
  }
</style>