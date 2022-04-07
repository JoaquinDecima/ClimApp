<template>
  <div class="col-md-6 text-center">
    <div class="minmaxtemp">
      <p class="min">
        <i class="fa fa-thermometer-empty" aria-hidden="true"></i> -25 °C
      </p>
      <p class="max">
        <i class="fa fa-thermometer-full" aria-hidden="true"></i> 49 °C
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MinMaxTemp"
}
</script>

<style scoped>
  .minmaxtemp{
    border-radius: 12px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    padding: 20px;
    color: white;
    margin-bottom: 15px;
  }

  p{
    font-size: 35px;
    margin-bottom: 0px;
  }

  .min .fa{
    color: aqua !important;
  }

  .max .fa{
    color: red !important;
  }
</style>