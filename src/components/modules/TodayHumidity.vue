<template>
  <div class="col-md-6 text-center">
    <div class="humidity">
      <p class="humidity-title"><i class="fa fa-tint" aria-hidden="true"></i> Humedad</p>
      <p class="humidity-data">{{humidity}}%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayHumidity",
  props: ["humidity"]
}
</script>

<style scoped>
  .humidity{
    border-radius: 12px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    padding: 20px;
    margin-bottom: 15px;
  }

  .humidity-title{
    font-size: 42px;
    color: #74D9B1;
  }

  .humidity-data{
    font-size: 20px;
    color: white;
  }
</style>