<template>
  <div class="col-12">
    <div class="weather container-fluid text-center">
      <div class="row">
        <div class="col-md-6">
          <p class="city"><i class="fa fa-map-marker" aria-hidden="true"></i> {{city}}</p>
          <img
            :src="'http://openweathermap.org/img/wn/'+img+'@2x.png'"
            class="img-fluid" />
        </div>
        <div class="col-md-6">
          <p class="temp">{{temp}}°C</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayWeather",
  props: ["temp", "city", "img"]
}
</script>

<style scoped>
  .weather{
    border-radius: 12px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    padding: 20px;
    margin-bottom: 15px;
  }

  .city{
    color: #74D9B1;
    font-size: 25px;
  }

  .temp{
    color: white;
    font-size: 68px;
  }
</style>