<template>
  <div class="col-12">
    <div class="map">
      <div class="ratio ratio-21x9">
        <iframe
          className=""
          :src="'https://embed.windy.com/embed2.html?lat='+lat+'&lon='+lon+'&detailLat='+lat+'&detailLon='+lon+'&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1'"
          frameBorder="0">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: ["lon", "lat"]
}
</script>

<style scoped>
  .map{
    border-radius: 12px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    padding: 20px;
    margin-bottom: 15px;
  }

  iframe{
    border-radius: 12px;
  }
</style>