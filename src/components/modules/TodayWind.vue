<template>
  <div class="col-md-6 text-center">
    <div class="wind">
      <p class="wind-title"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Viento</p>
      <p class="wind-data">186 Km/h</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayWind"
}
</script>

<style scoped>
  .wind{
    border-radius: 12px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    padding: 20px;
    margin-bottom: 15px;
  }

  .wind-title{
    font-size: 42px;
    color: #74D9B1;
  }

  .wind-data{
    font-size: 20px;
    color: white;
  }
</style>