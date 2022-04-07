<template>
  <div class="col-12 cities" @change="setCity($event)">
    <select class="form-select text-center" aria-label="Default select example">
      <option selected>Seleccione otra ciudad</option>
      <option value="Buenos%20Aires">Buenos Aires</option>
      <option value="Tucuman">Tucuman</option>
      <option value="Mendoza">Mendoza</option>
      <option value="Entre%20Rios">Entre Rios</option>
      <option value="Cordoba">Cordoba</option>
      <option value="Rio%20Negro">Rio Negro</option>
      <option value="Salta">Salta</option>
      <option value="Chaco">Chaco</option>
      <option value="Santiago%20del%20Estero">Santiago del Estero</option>
      <option value="La%20Rioja">La Rioja</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "cities",
  methods: {
    setCity(event){
      window.location.href = `https://joaquindecima.github.io/ClimApp/?city=${event.target.value}`
    }
  }
}
</script>

<style scoped>
  .cities{
    padding: 20px;
    border-radius: 12px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    margin: 15px 0px;
  }

  select{
    border-radius: 12px;
    color: white;
    background: rgba(20,20,20,0.6);
    backdrop-filter: blur(6px);
    border-color: #74D9B1;
  }
</style>